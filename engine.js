// ========== 音乐系统 ==========
const MusicSystem = {
  ctx: null,
  masterGain: null,
  playing: false,
  muted: false,
  volume: 0.35,
  currentNodes: [],
  loopTimer: null,

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.volume;
    // 添加混响效果
    const convolver = this.ctx.createConvolver();
    const reverb = this.createReverb(2.5, 2);
    convolver.buffer = reverb;
    this.masterGain.connect(convolver);
    convolver.connect(this.ctx.destination);
    // 也直接连一路干声
    const dryGain = this.ctx.createGain();
    dryGain.gain.value = 0.6;
    this.masterGain.connect(dryGain);
    dryGain.connect(this.ctx.destination);
  },

  createReverb(duration, decay) {
    const rate = this.ctx.sampleRate;
    const length = rate * duration;
    const impulse = this.ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
      }
    }
    return impulse;
  },

  // 古筝音色：用多个正弦波叠加模拟
  playNote(freq, startTime, duration, vel = 0.12) {
    const ctx = this.ctx;
    const noteGain = ctx.createGain();
    noteGain.connect(this.masterGain);

    // 基音
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.value = freq;
    
    // 二次泛音
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = freq * 2;
    const g2 = ctx.createGain();
    g2.gain.value = vel * 0.3;
    
    // 三次泛音
    const osc3 = ctx.createOscillator();
    osc3.type = 'triangle';
    osc3.frequency.value = freq * 3;
    const g3 = ctx.createGain();
    g3.gain.value = vel * 0.1;

    osc1.connect(noteGain);
    osc2.connect(g2); g2.connect(noteGain);
    osc3.connect(g3); g3.connect(noteGain);

    // 古筝拨弦包络：快速起音，缓慢衰减
    noteGain.gain.setValueAtTime(0, startTime);
    noteGain.gain.linearRampToValueAtTime(vel, startTime + 0.01);
    noteGain.gain.exponentialRampToValueAtTime(vel * 0.5, startTime + duration * 0.15);
    noteGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    [osc1, osc2, osc3].forEach(o => {
      o.start(startTime);
      o.stop(startTime + duration + 0.1);
    });
  },

  // 五声音阶频率（D 宫调式，典型中国古风）
  // D4=293.66, E4=329.63, F#4=369.99, A4=440, B4=493.88
  // D5=587.33, E5=659.25, F#5=739.99, A5=880
  pentatonic: {
    'D4':293.66,'E4':329.63,'F#4':369.99,'A4':440,'B4':493.88,
    'D5':587.33,'E5':659.25,'F#5':739.99,'A5':880,'B5':987.77,
    'D3':146.83,'E3':164.81,'A3':220,'B3':246.94,
  },

  // 《葬花吟》旋律简化（基于五声音阶的改编）
  // 花谢花飞花满天，红消香断有谁怜
  zanghuayin: [
    // 主旋律第一段
    {n:'D5',d:0.8},{n:'B4',d:0.6},{n:'A4',d:0.4},{n:'F#4',d:0.8},
    {n:'E4',d:0.6},{n:'D4',d:1.0},{n:null,d:0.4},
    {n:'E4',d:0.4},{n:'F#4',d:0.6},{n:'A4',d:0.8},{n:'B4',d:0.4},
    {n:'A4',d:1.2},{n:null,d:0.4},
    // 第二段
    {n:'D5',d:0.6},{n:'E5',d:0.4},{n:'D5',d:0.6},{n:'B4',d:0.8},
    {n:'A4',d:0.6},{n:'F#4',d:0.6},{n:'E4',d:0.8},{n:null,d:0.3},
    {n:'F#4',d:0.5},{n:'A4',d:0.5},{n:'B4',d:0.6},{n:'A4',d:0.6},
    {n:'F#4',d:0.8},{n:'E4',d:1.0},{n:null,d:0.6},
    // 第三段（高潮）—— 侬今葬花人笑痴
    {n:'A4',d:0.4},{n:'B4',d:0.4},{n:'D5',d:0.8},{n:'E5',d:0.6},
    {n:'F#5',d:1.0},{n:'E5',d:0.4},{n:'D5',d:0.8},{n:null,d:0.3},
    {n:'B4',d:0.6},{n:'D5',d:0.4},{n:'B4',d:0.6},{n:'A4',d:0.8},
    {n:'F#4',d:0.6},{n:'E4',d:0.6},{n:'D4',d:1.2},{n:null,d:0.5},
    // 第四段（尾声）—— 一朝春尽红颜老
    {n:'E4',d:0.5},{n:'F#4',d:0.5},{n:'A4',d:0.8},{n:'F#4',d:0.4},
    {n:'E4',d:0.6},{n:'D4',d:1.0},{n:null,d:0.3},
    {n:'E4',d:0.4},{n:'A4',d:0.6},{n:'B4',d:0.8},{n:'A4',d:0.6},
    {n:'D5',d:1.0},{n:'B4',d:0.6},{n:'A4',d:1.2},{n:null,d:0.8},
    // 低音伴奏结尾
    {n:'D4',d:1.5},{n:null,d:0.5},{n:'A3',d:1.5},{n:null,d:0.5},
    {n:'D4',d:2.0},{n:null,d:1.0},
  ],

  // 低音伴奏音符
  bassNotes: ['D3','A3','E3','D3','B3','A3','D3','E3'],

  playMelody() {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime + 0.1;
    let t = now;

    // 主旋律
    this.zanghuayin.forEach(note => {
      if (note.n && this.pentatonic[note.n]) {
        this.playNote(this.pentatonic[note.n], t, note.d * 1.3, 0.10);
      }
      t += note.d;
    });

    // 低音伴奏（稀疏的）
    const totalDur = t - now;
    const bassInterval = totalDur / this.bassNotes.length;
    this.bassNotes.forEach((bn, i) => {
      if (this.pentatonic[bn]) {
        this.playNote(this.pentatonic[bn], now + i * bassInterval, bassInterval * 0.8, 0.05);
      }
    });

    // 循环播放
    const loopDelay = (totalDur + 2) * 1000;
    this.loopTimer = setTimeout(() => {
      if (this.playing && !this.muted) this.playMelody();
    }, loopDelay);
  },

  start() {
    this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    this.playing = true;
    this.muted = false;
    this.masterGain.gain.value = this.volume;
    this.playMelody();
    this.updateBtn();
  },

  toggle() {
    if (!this.ctx) { this.start(); return; }
    this.muted = !this.muted;
    if (this.muted) {
      this.masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
      if (this.loopTimer) clearTimeout(this.loopTimer);
    } else {
      this.masterGain.gain.linearRampToValueAtTime(this.volume, this.ctx.currentTime + 0.5);
      this.playMelody();
    }
    this.updateBtn();
  },

  updateBtn() {
    const btn = document.getElementById('music-btn');
    if (btn) {
      btn.textContent = this.muted ? '🔇 音乐：关' : '🎵 葬花吟';
      btn.classList.toggle('muted', this.muted);
    }
  }
};

// ========== 游戏引擎 ==========
const Engine = {
  stats: {
    health:  { name:'体质',     icon:'❤️', value:40, max:100, cls:'health' },
    talent:  { name:'才情',     icon:'📖', value:75, max:100, cls:'talent' },
    mood:    { name:'心境',     icon:'🌙', value:35, max:100, cls:'mood'   },
    social:  { name:'人缘',     icon:'🤝', value:50, max:100, cls:'social' },
    pride:   { name:'自尊',     icon:'💎', value:70, max:100, cls:'pride'  },
    love:    { name:'宝玉好感', icon:'💕', value:0,  max:100, cls:'love'   }
  },
  inventory: ['母亲遗赠的诗稿','父亲所赐的玉佩','随身衣物与书箱'],
  newItems: [],
  flags: {},
  current: null,

  modify(key, delta) {
    const s = this.stats[key]; if (!s) return null;
    const old = s.value;
    s.value = Math.max(0, Math.min(s.max, old + delta));
    return { name: s.name, old, now: s.value, delta };
  },

  addItem(name) {
    if (!this.inventory.includes(name)) {
      this.inventory.push(name);
      this.newItems.push(name);
      showNotify('获得物品：' + name);
    }
  },

  applyEffects(effects) {
    const changes = [];
    if (!effects) return changes;
    for (const [k, v] of Object.entries(effects)) {
      const c = this.modify(k, v);
      if (c) changes.push(c);
    }
    return changes;
  }
};

// ========== UI 渲染 ==========
function renderStats() {
  const el = document.getElementById('stats-panel');
  el.innerHTML = '';
  for (const [, s] of Object.entries(Engine.stats)) {
    const pct = (s.value / s.max * 100).toFixed(0);
    el.innerHTML += `
      <div class="stat-item">
        <span class="stat-icon">${s.icon}</span>
        <div class="stat-info">
          <div class="stat-name">${s.name}</div>
          <div class="stat-bar-bg"><div class="stat-bar ${s.cls}" style="width:${pct}%"></div></div>
          <div class="stat-value">${s.value} / ${s.max}</div>
        </div>
      </div>`;
  }
}

function renderInventory() {
  const el = document.getElementById('inv-list');
  el.innerHTML = '';
  Engine.inventory.forEach(name => {
    const isNew = Engine.newItems.includes(name);
    el.innerHTML += `<span class="inv-item${isNew ? ' new' : ''}">${name}</span>`;
  });
}

function renderScene(scene) {
  Engine.current = scene;
  const data = SCENES[scene];
  if (!data) return;

  document.getElementById('chapter-indicator').textContent = data.chapter || '';

  // 应用场景固有效果
  const changes = Engine.applyEffects(data.effects);
  if (data.items) data.items.forEach(i => Engine.addItem(i));
  if (data.flags) Object.assign(Engine.flags, data.flags);

  // 故事区
  const story = document.getElementById('story-area');
  let html = '';
  if (data.scene) html += `<div class="scene-tag">📍 ${data.scene}</div>`;
  html += `<div class="story-text">${data.text}</div>`;
  if (changes.length) {
    html += '<div class="divider"></div><p style="font-size:13px;color:var(--t3)">📊 属性变化：</p>';
    changes.forEach(c => {
      const cls = c.delta > 0 ? 'positive' : 'negative';
      const sign = c.delta > 0 ? '+' : '';
      html += `<span class="stat-change ${cls}">${c.name} ${sign}${c.delta}</span>`;
    });
  }
  story.innerHTML = html;
  story.style.animation = 'none';
  story.offsetHeight; // reflow
  story.style.animation = 'fadeUp .6s ease';

  // 选项区
  const ca = document.getElementById('choices-area');
  if (data.choices && data.choices.length) {
    let ch = '<h3>你的选择</h3>';
    data.choices.forEach((c, i) => {
      ch += `<button class="choice-btn" onclick="choose(${i})">
        <span class="choice-num">${i + 1}</span>${c.text}
        ${c.desc ? `<div class="choice-desc">${c.desc}</div>` : ''}
      </button>`;
    });
    ca.innerHTML = ch;
  } else {
    ca.innerHTML = '';
  }

  // 检查是否结局
  if (data.ending) showEnding(data);

  renderStats();
  renderInventory();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function choose(idx) {
  const data = SCENES[Engine.current];
  if (!data || !data.choices[idx]) return;
  const c = data.choices[idx];

  Engine.applyEffects(c.effects);
  if (c.items) c.items.forEach(i => Engine.addItem(i));
  if (c.flags) Object.assign(Engine.flags, c.flags);
  Engine.newItems = [];

  if (c.next) renderScene(c.next);
}

function toggleInv() {
  document.getElementById('inv-panel').classList.toggle('open');
}

function showNotify(msg) {
  const el = document.getElementById('notification');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

function showEnding(data) {
  const es = document.getElementById('ending-screen');
  document.getElementById('ending-title').textContent = data.endTitle || '终章';
  document.getElementById('ending-poem').innerHTML = data.endPoem || '';
  document.getElementById('ending-text').innerHTML = data.endText || '';
  setTimeout(() => es.classList.add('active'), 1500);
}

// 花瓣
function createPetals() {
  const container = document.getElementById('petals');
  const chars = ['🌸','🏵️','💮','🪷'];
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.textContent = chars[Math.floor(Math.random() * chars.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    p.style.fontSize = (12 + Math.random() * 10) + 'px';
    container.appendChild(p);
  }
}
