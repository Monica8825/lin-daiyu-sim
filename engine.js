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
