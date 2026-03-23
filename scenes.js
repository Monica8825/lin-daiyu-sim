// ========== 剧情数据 ==========
const SCENES = {

// ===================== 第一章 · 别父入都 =====================
start: {
  chapter:'第一章 · 别父入都', scene:'扬州 · 林府',
  text:`<p>大清康熙末年。扬州城林府后院，落叶飘零。</p>
<p>你跪在母亲的灵位前，泪水无声滑落。才六岁，母亲贾敏便撒手人寰。父亲林如海日渐消瘦，看着你的眼神满是忧虑与心疼。</p>
<p>今日，外祖母派来的船已泊在码头。衣着华丽的嬷嬷候在门外，要接你去京城——荣国府。</p>
<p>父亲拉着你的手，声音沙哑：</p>
<div class="dialogue">"玉儿，你外祖母是最疼你的。到了那边，凡事——"</div>
<p>他顿了顿，只说了一句：</p>
<div class="dialogue"><span class="emphasis">"步步留心，时时在意。不要多说一句话，不可多行一步路。"</span></div>
<p>你望着父亲。<span class="emphasis">这一去，命运便不再由自己掌控了。</span></p>`,
  choices:[
    {text:'忍住泪水，向父亲郑重点头',desc:'收起悲伤，以最周全的姿态入京',next:'depart_a',effects:{mood:5,pride:5}},
    {text:'抱住父亲痛哭',desc:'你不想走，宁可清苦也不愿寄人篱下',next:'depart_b',effects:{mood:-10,pride:5,talent:3},items:['父亲擦泪的手帕']},
    {text:'轻声问："女儿还能回来吗？"',desc:'你敏锐地察觉这不是普通的探亲',next:'depart_c',effects:{mood:-5,talent:5}},
    {text:'沉默不语，转身去看母亲灵位',desc:'在灵前默默许下心愿',next:'depart_d',effects:{mood:-3,pride:8,talent:3}}
  ]
},

depart_a:{chapter:'第一章 · 别父入都',scene:'扬州 · 渡口',
  text:`<p>你深吸一口气，向父亲深深一拜：</p>
<div class="dialogue">"女儿记下了。爹爹保重。"</div>
<p>林如海眼中闪过欣慰与心酸，将你抱上船。你站在船尾，望着父亲的身影隐没在烟柳深处。没有哭，只把那八个字反复念了十遍。</p>
<p class="thought">步步留心，时时在意。从此这八个字就是你的护身符。</p>`,
  choices:[{text:'继续',next:'arrive'}]
},

depart_b:{chapter:'第一章 · 别父入都',scene:'扬州 · 渡口',
  text:`<p>你扑进父亲怀里，攥住他的衣襟哭得浑身发抖：</p>
<div class="dialogue">"爹爹……我不想走……"</div>
<p>父亲颤抖着搂住你，好半晌蹲下身，用帕子擦去你的泪：</p>
<div class="dialogue">"玉儿，你是林家的女儿。你母亲的才学，你的聪慧，是谁也拿不走的。"</div>
<div class="dialogue">"爹爹会去看你的。等公务安顿好了，就去看你。"</div>
<p class="thought">你知道，那或许是无法兑现的承诺。但你还是拼命点了点头。</p>`,
  choices:[{text:'继续',next:'arrive'}]
},

depart_c:{chapter:'第一章 · 别父入都',scene:'扬州 · 林府',
  text:`<p>你仰起脸，眼中带着薄薄的泪光：</p>
<div class="dialogue">"爹爹，女儿……还能回来吗？"</div>
<p>这句话像一把小刀扎在林如海心上。他沉默很久，终于弯腰拢了拢你额前的碎发：</p>
<div class="dialogue">"自然能。等爹爹忙完……自然接你回来。"</div>
<p class="narration">他说这话时没有看你的眼睛。你虽年幼，却已能分辨大人话中的犹豫。</p>
<p class="thought">有些路一旦走出去，便再也回不了头。</p>`,
  choices:[{text:'继续',next:'arrive'}]
},

depart_d:{chapter:'第一章 · 别父入都',scene:'扬州 · 灵堂',
  text:`<p>你没有回答。转身走到母亲灵位前，跪了下来。</p>
<p class="thought">娘，女儿要走了。您在天上看着女儿……</p>
<p>额头触地的那一刻，有什么在心里悄悄长了出来——不是悲伤，而是一种不动声色的<span class="emphasis">倔强</span>。</p>
<p>你起身，拍了拍膝上的灰，走到父亲面前：</p>
<div class="dialogue">"女儿准备好了。"</div>
<p class="narration">林如海一时说不出话来。他的女儿，比他想象的还要早慧。</p>`,
  choices:[{text:'继续',next:'arrive'}]
},

// ——— 抵达荣国府 ———
arrive:{chapter:'第一章 · 别父入都',scene:'京城 · 荣国府',
  effects:{social:5,mood:5},
  text:`<p>船行三日。荣国府的大门比你想象的气派——黑漆大门，石狮威严。轿子从侧门入府，一路上丫鬟仆妇换了三四拨，穿着比你还体面。</p>
<p>你被引到正堂。一位满头银发的老太太已等候多时，一见你便泪如雨下，将你搂入怀中：</p>
<div class="dialogue">"我的心肝肉！你像你母亲……像极了……"</div>
<p>这便是外祖母——<span class="emphasis">贾母</span>。周围几位舅母、表姐妹，都在打量你。</p>
<p class="thought">从此刻起，你的一言一行都在旁人眼中。</p>`,
  choices:[
    {text:'谨遵父亲教诲，逐一恭敬行礼',desc:'少说话，多观察，礼数无可挑剔',next:'greet_proper',effects:{social:12,pride:3,mood:5}},
    {text:'真情流露，伏在外祖母怀中大哭',desc:'外祖母的温暖让你卸下了防备',next:'greet_cry',effects:{mood:-5,social:8}},
    {text:'强忍泪意，落落大方地自我介绍',desc:'展现林家女儿的风采',next:'greet_grace',effects:{social:10,talent:3,pride:5}},
    {text:'默默观察每个人的神情与座次',desc:'弄清楚权力格局',next:'greet_observe',effects:{talent:5,pride:3},flags:{observed:true}}
  ]
},

greet_proper:{chapter:'第一章 · 别父入都',scene:'荣国府 · 正堂',
  text:`<p>你退出半步，敛容行万福礼：</p>
<div class="dialogue">"黛玉给外祖母请安。一路劳动外祖母惦念，黛玉不孝。"</div>
<p>声音清晰，带着江南的软糯，又不失矜持。随后你逐一见礼——<span class="emphasis">邢夫人</span>淡淡客气，<span class="emphasis">王夫人</span>目光似有衡量，<span class="emphasis">李纨</span>温柔和气。三位姑娘中，<span class="emphasis">探春</span>目光最亮。</p>
<p>贾母满意道：</p>
<div class="dialogue">"你们瞧瞧，这通身的气派！"</div>`,
  choices:[{text:'继续',next:'xifeng'}]
},

greet_cry:{chapter:'第一章 · 别父入都',scene:'荣国府 · 正堂',
  text:`<p>外祖母的怀抱让你再也绷不住了，伏在她膝上哽咽：</p>
<div class="dialogue">"外祖母……我好想娘……"</div>
<p>祖孙俩哭作一团，在场众人都红了眼眶。王夫人递来热茶，你抬头看她——面容和善，却有说不出的不安。</p>
<p>贾母替你理了理鬓发：</p>
<div class="dialogue">"好孩子，日后跟着我，不会让你受委屈。"</div>
<p class="thought">"不受委屈"——在大家族里，是最难兑现的承诺。</p>`,
  choices:[{text:'继续',next:'xifeng'}]
},

greet_grace:{chapter:'第一章 · 别父入都',scene:'荣国府 · 正堂',
  text:`<p>你微微一笑，行礼后说：</p>
<div class="dialogue">"黛玉见过外祖母、各位舅母、姐姐妹妹。初来乍到，还请多多关照。"</div>
<p>声音虽轻却不怯，带着与年龄不符的从容。探春悄悄拉迎春的袖子："这个林姐姐，不一般。"</p>
<p>贾母笑得合不拢嘴：</p>
<div class="dialogue">"不愧是我们敏儿的女儿！好风骨！"</div>
<p class="narration">王夫人的目光在你身上多停留了一瞬。你注意到了，却什么都没有表现。</p>`,
  choices:[{text:'继续',next:'xifeng'}]
},

greet_observe:{chapter:'第一章 · 别父入都',scene:'荣国府 · 正堂',
  text:`<p>你安静地依偎在贾母身边，用一双乌黑的眼睛将满屋人看了个遍。</p>
<p class="thought">贾母坐主位——定海神针。邢夫人坐最远——大房不得势。王夫人在右手边最近——二房才是核心。探春的眼神最亮——她也在观察我。</p>
<p>你行了礼，说得不多不少。</p>
<p class="narration">没有人知道，这个六岁的小女孩，已经把这间屋子里的权力关系默默画了一张图。</p>`,
  choices:[{text:'继续',next:'xifeng'}]
},

// ——— 王熙凤 & 宝玉 ———
xifeng:{chapter:'第一章 · 别父入都',scene:'荣国府 · 正堂',
  text:`<p>门外忽传来一阵笑声：</p>
<div class="dialogue">"我来迟了，不曾迎接远客！"</div>
<p>来人一身彩绣辉煌——三角眼，吊梢眉，丹唇未启笑先闻。这是<span class="emphasis">王熙凤</span>。</p>
<p>她握住你的手：</p>
<div class="dialogue">"天下竟有这样标致的人物！怨不得老祖宗天天口头心头一时不忘！"</div>
<p>转眼间又掏帕子擦泪，念叨你母亲。贾母笑骂"凤辣子"。</p>
<p class="thought">此人八面玲珑，能哭能笑——<span class="emphasis">是贾府真正管事的人。</span></p>`,
  choices:[{text:'继续',next:'meet_baoyu'}]
},

meet_baoyu:{chapter:'第一章 · 别父入都',scene:'贾母院中',
  effects:{love:15,mood:5},
  text:`<p>晚间，门帘一掀——一个少年公子走进来。面若中秋之月，项上挂着<span class="emphasis">通灵宝玉</span>。</p>
<p>他愣住了，直直看着你，忽然笑道：</p>
<div class="dialogue"><span class="emphasis">"这个妹妹我曾见过的。"</span></div>
<p>贾母笑骂他胡说。他认真摇头：</p>
<div class="dialogue">"虽未曾见过，然看着面善，今日只作远别重逢。"</div>
<p>他走近几步，问：</p>
<div class="dialogue"><span class="emphasis">"妹妹可曾读过什么书？"</span></div>
<p>你注意到，方才姐妹们被问起读书时，都只说"认得几个字"。这个问题，没那么简单。</p>`,
  choices:[
    {text:'"读了些书，只是些许粗浅的。"',desc:'谦虚但不否认',next:'baoyu_honest',effects:{love:5,pride:3}},
    {text:'"不曾读什么书，认得几个字罢了。"',desc:'入乡随俗',next:'baoyu_humble',effects:{social:5,mood:-3}},
    {text:'反问："表兄又读了什么书呢？"',desc:'以攻为守',next:'baoyu_counter',effects:{love:10,talent:3,pride:5}},
    {text:'"读过《四书》，也读些诗词。"',desc:'你是林家女儿，无需自贬',next:'baoyu_proud',effects:{talent:5,pride:8,love:3,social:-3}}
  ]
},

baoyu_honest:{chapter:'第一章 · 别父入都',scene:'贾母院中',
  text:`<p>你低眉浅笑道出。宝玉眼睛亮了，滔滔不绝说他最不爱"正经书"。贾母笑骂"混账话"。</p>
<p>他忽然问：</p><div class="dialogue">"妹妹可有玉没有？"</div>
<p>你摇头："我没有。那玉是件稀罕物，岂能人人都有。"</p>`,
  choices:[{text:'继续',next:'smash_jade'}]
},

baoyu_humble:{chapter:'第一章 · 别父入都',scene:'贾母院中',
  text:`<p>你垂眸轻声应答。话一出口心中泛苦——<span class="thought">明明满腹诗书，你把自己藏了起来。</span></p>
<p>宝玉似乎看穿了什么，眼中闪过一丝不信。他转而问：</p>
<div class="dialogue">"妹妹可有玉没有？"</div><p>你摇头。</p>`,
  choices:[{text:'继续',next:'smash_jade'}]
},

baoyu_counter:{chapter:'第一章 · 别父入都',scene:'贾母院中',
  text:`<p>你微微歪头：</p>
<div class="dialogue">"表兄又读了什么书呢？"</div>
<p>宝玉大笑："正经书没读几本，杂书倒看了一肚子！那些《四书》《五经》不过用来糊弄人的！"</p>
<p class="thought">这个人……有一种与这府邸格格不入的天真。</p>
<p>他凑近问：</p><div class="dialogue">"妹妹可有玉没有？"</div><p>你摇头。</p>`,
  choices:[{text:'继续',next:'smash_jade'}]
},

baoyu_proud:{chapter:'第一章 · 别父入都',scene:'贾母院中',
  text:`<p>你坦然说道。满室寂然——探春眼睛亮了，王夫人微蹙眉。</p>
<p>宝玉大喜击掌：</p>
<div class="dialogue">"好极了！终于来了个能和我说话的人！"</div>
<p class="narration">王夫人的目光温度，比方才更低了一些。</p>
<p class="thought">你没有后悔。你是林家的女儿。</p>
<p>宝玉又问：</p><div class="dialogue">"妹妹可有玉没有？"</div><p>你摇头。</p>`,
  choices:[{text:'继续',next:'smash_jade'}]
},

smash_jade:{chapter:'第一章 · 别父入都',scene:'贾母院中',
  effects:{mood:-10,love:8},
  text:`<p>宝玉脸色忽变，猛地扯下通灵宝玉，狠狠往地上一摔：</p>
<div class="dialogue"><span class="emphasis">"什么罕物！连人之高低都不择，还说通灵不通灵呢！我也不要这劳什子了！"</span></div>
<p>满室哗然。贾母吓得变色，丫鬟们慌忙去捡。</p>
<p class="thought">他为什么发这么大脾气？因为我没有玉？他觉得……不公平？</p>
<p>你觉得眼眶酸涩。来的第一天便因你的话引发风波。</p>
<p class="thought">我不该来的……可我又有什么错呢？</p>`,
  choices:[
    {text:'忍泪退到一旁，不添乱',desc:'你不想成为风波焦点',next:'ch1_end',effects:{mood:-5,pride:5}},
    {text:'悄悄落泪，自责不已',desc:'"都是我的不好……"',next:'ch1_end',effects:{mood:-10,love:5}},
    {text:'心想：这个人，是个痴人',desc:'你对宝玉有了更深的认识',next:'ch1_end',effects:{love:10,talent:3}}
  ]
},

ch1_end:{chapter:'第一章 · 别父入都',scene:'贾母院中 · 夜',
  text:`<p>夜深了。你躺在陌生的床上，月光透过纱帘洒进来。</p>
<p class="thought">这里很大，很华丽。可这不是我的家。母亲不在了，父亲远在扬州。我终究是个"外人"。</p>
<p>你忽然想起那个摔玉的少年——他明亮的眼睛，率真的笑，毫不掩饰的好奇与愤怒。</p>
<p class="thought">这个人，和这座府邸里的所有人都不一样。</p>
<p>不知不觉，嘴角微微翘了一下。随即又觉得鼻子酸酸的。</p>
<div class="divider"></div>
<p class="narration" style="text-align:center;color:var(--gold);letter-spacing:4px">第一章 · 完</p>
<p class="narration" style="text-align:center;margin-top:10px">寄人篱下的日子，才刚刚开始。</p>`,
  choices:[{text:'▸ 第二章 · 潇湘春梦',next:'ch2_start'}]
},

// ===================== 第二章 · 潇湘春梦 =====================
ch2_start:{chapter:'第二章 · 潇湘春梦',scene:'大观园 · 潇湘馆',
  effects:{mood:10,talent:5},
  text:`<p>时光荏苒。贾母极为疼你，让你与宝玉同住同食。然而你心里明白——<span class="emphasis">别人给的体面，终究不是自己的</span>。</p>
<p>元春省亲后，大观园落成。你挑了<span class="emphasis">潇湘馆</span>——翠竹千竿，幽静清雅，像极了江南的记忆。</p>
<div class="dialogue">"总算有个自己的地方了。"</div>
<p>紫鹃笑道竹子清雅就是下雨吵。你摇头：</p>
<div class="dialogue">"雨打竹叶的声音，最好听。"</div>
<p>而此时，<span class="emphasis">薛宝钗</span>也住进了蘅芜苑。有人说她的金锁上的字，恰好与宝玉的玉是一对——<span class="emphasis">"金玉良缘"</span>。</p>
<p>这几个字传到你耳中时，你正在抄诗。笔尖一顿，一滴墨洇开了。</p>`,
  choices:[
    {text:'找宝玉问清楚"金玉良缘"',desc:'你需要一个确切的答案',next:'ch2_confront',effects:{love:5,mood:-8}},
    {text:'主动去找宝钗，结识这个"对手"',desc:'知己知彼',next:'ch2_baochai',effects:{social:8,talent:3}},
    {text:'关起门来写诗，不理流言',desc:'你有你的骄傲',next:'ch2_poetry',effects:{talent:10,pride:8,mood:-5}},
    {text:'去找紫鹃说心事',desc:'你需要一个可以倾诉的人',next:'ch2_zijuan',effects:{mood:8,social:3}}
  ]
},

ch2_confront:{chapter:'第二章 · 潇湘春梦',scene:'大观园 · 怡红院',
  text:`<p>你去了怡红院。宝玉见你来了笑脸相迎。你喝了口茶：</p>
<div class="dialogue">"我听说宝姐姐的金锁上有字，恰好与你的玉是一对儿？"</div>
<p>宝玉急了：</p>
<div class="dialogue">"什么金什么玉，我不过有块破石头！"</div>
<p>你冷笑："你急什么？我不过问一句。"可眼眶已红了。</p>
<p>宝玉慌了手脚：</p>
<div class="dialogue">"好妹妹，你是知道我的心的。我心里就只……"</div>
<p>他没有说完。但你听懂了。你背过身擦了擦眼角，轻声说了句"知道了"便走了。</p>`,
  choices:[{text:'继续',next:'ch2_poetry_club'}]
},

ch2_baochai:{chapter:'第二章 · 潇湘春梦',scene:'大观园 · 蘅芜苑',
  text:`<p>宝钗的住处极为素净——几乎没有摆设，像一间雪洞。</p>
<p>她笑着迎你，沏了好茶，劝你别吃寒凉的药，推荐了燕窝粥。话说得体贴周到，挑不出毛病。</p>
<p class="thought">她是真心关心我，还是在展示她的贤惠？</p>
<p>你说不清。但你不得不承认——<span class="emphasis">薛宝钗是一个极厉害的人</span>。不是张扬的厉害，而是让你找不到破绽的厉害。</p>`,
  choices:[{text:'继续',next:'ch2_poetry_club'}]
},

ch2_poetry:{chapter:'第二章 · 潇湘春梦',scene:'大观园 · 潇湘馆',
  text:`<p>你关上门，铺纸研墨。写下：</p>
<div class="dialogue" style="text-align:center;border:none;padding:20px">"半卷湘帘半掩门，碾冰为土玉为盆。<br>偷来梨蕊三分白，借得梅花一缕魂。"</div>
<p>写到天色暗下来，你看着满桌诗稿——每一个字都是你自己的。</p>
<p class="thought">金玉良缘也好，什么良缘也罢。我有我的诗，我有我的竹子。<span class="emphasis">这是谁也拿不走的。</span></p>`,
  choices:[{text:'继续',next:'ch2_poetry_club'}]
},

ch2_zijuan:{chapter:'第二章 · 潇湘春梦',scene:'大观园 · 潇湘馆',
  text:`<p>夜里，你和紫鹃听着雨打竹叶。</p>
<div class="dialogue">"紫鹃，什么是金玉良缘？"</div>
<p>紫鹃认真道：</p>
<div class="dialogue">"那不过是闲人嚼舌头罢了。宝二爷心里有谁，旁人说了不算。"</div>
<p>你苦笑：</p>
<div class="dialogue">"可旁人说多了，就成了命。"</div>
<p>紫鹃叹息替你披上薄衫：</p>
<div class="dialogue">"姑娘，这里面的事说到底就一句——<span class="emphasis">谁能做主，谁说了算。</span>"</div>
<p class="thought">在这个时代，一个女人的命运，从来不在自己手里。</p>`,
  choices:[{text:'继续',next:'ch2_poetry_club'}]
},

ch2_poetry_club:{chapter:'第二章 · 潇湘春梦',scene:'大观园 · 秋爽斋',
  effects:{talent:8},
  text:`<p>探春发起了<span class="emphasis">海棠诗社</span>。你领了"潇湘妃子"的别号。</p>
<p>第一回咏白海棠，宝钗最先写完——众赞"含蓄浑厚"。你不急不忙，最后落笔。</p>
<p>探春抢先说：</p>
<div class="dialogue">"'偷来梨蕊三分白，借得梅花一缕魂'——当推为上！"</div>
<p>李纨定了名次——<span class="emphasis">宝钗第一，你第二</span>。理由是宝钗更"端庄合乎正道"。</p>
<p class="thought">她写的是规矩，我写的是灵魂。</p>`,
  choices:[
    {text:'心中不服，下次一定夺魁',desc:'你的才华不该屈居人后',next:'ch2_end',effects:{talent:5,pride:5,mood:-3}},
    {text:'由衷欣赏宝钗的诗',desc:'英雄惜英雄',next:'ch2_end',effects:{social:8,mood:5}},
    {text:'"我的诗本就是给自己写的"',desc:'你不在乎名次',next:'ch2_end',effects:{pride:10,talent:3,mood:5}}
  ]
},

ch2_end:{chapter:'第二章 · 潇湘春梦',scene:'潇湘馆 · 秋夜',
  text:`<p>后来的菊花诗，你三首占前三——连宝钗都真心赞你。那一天你笑得像个真正快乐的少女。</p>
<p>可秋天来了，咳嗽又犯了。紫鹃端药来，你喝了一口便蹙眉。窗外落叶飘零。</p>
<p class="thought">这园子里的花开了又谢，和人一样。我们这些姑娘，又能在这里待几年呢？</p>
<div class="divider"></div>
<p class="narration" style="text-align:center;color:var(--gold);letter-spacing:4px">第二章 · 完</p>
<p class="narration" style="text-align:center;margin-top:10px">大观园的春天，终究是要过去的。</p>`,
  choices:[{text:'▸ 第三章 · 风刀霜剑',next:'ch3_start'}]
},

// ===================== 第三章 · 风刀霜剑 =====================
ch3_start:{chapter:'第三章 · 风刀霜剑',scene:'潇湘馆',
  effects:{health:-15,mood:-15,social:-5},
  text:`<p><span class="emphasis">父亲林如海病逝于扬州。</span>你扶灵痛哭，几乎昏厥。从此你真正成了孤儿——无父无母，彻底寄人篱下。</p>
<p>你察觉到——林家无财力之后，某些人看你的眼光变了。婆子送东西偶尔"忘了"你。王夫人客气中多了一层说不清的东西。</p>
<p>只有贾母还是疼你。只有宝玉还是日日来看你。可贾母年迈——宝玉的真心，在这个家里不由他做主。</p>
<p>一个深夜，你咳得停不下来——帕子上有了<span class="emphasis">血丝</span>。紫鹃吓哭了。你攥住帕子不让她看：</p>
<div class="dialogue">"没事，别大惊小怪的。"</div>`,
  choices:[
    {text:'振作精神，积极调养身体',desc:'你不想就这样倒下',next:'ch3_selfcare',effects:{health:10,mood:5,pride:5}},
    {text:'写一首诗来排遣苦闷',desc:'把所有的痛化为文字',next:'ch3_bury_flowers',effects:{talent:10,mood:-5}},
    {text:'去找宝玉',desc:'只有他真正懂你',next:'ch3_baoyu',effects:{love:10,mood:5}},
    {text:'找探春商量，为自己谋后路',desc:'你不能坐以待毙',next:'ch3_tanchun',effects:{social:8,pride:5}}
  ]
},

ch3_selfcare:{chapter:'第三章 · 风刀霜剑',scene:'潇湘馆',
  effects:{health:10},
  text:`<p>你让紫鹃找了大夫，认真吃药，日日喝燕窝粥。宝钗送来上好燕窝——你犹豫片刻，收下了。</p>
<p>你开始早起在小院里走动。紫鹃笑着说气色好了许多。</p>
<p class="thought">我不想在这金丝笼里枯萎。哪怕只是一株竹子，也要站着。</p>`,
  choices:[{text:'继续',next:'ch3_crisis'}]
},

ch3_bury_flowers:{chapter:'第三章 · 风刀霜剑',scene:'大观园 · 花冢',
  effects:{talent:10},
  text:`<p>暮春，落花满地。你扛着花锄，一瓣一瓣将落花葬入土中，低低吟唱：</p>
<div class="dialogue" style="text-align:center;border:none;padding:20px;line-height:2.5">
"花谢花飞花满天，红消香断有谁怜？<br>
一年三百六十日，风刀霜剑严相逼。<br>
……<br>
<span class="emphasis">侬今葬花人笑痴，他年葬侬知是谁？<br>
试看春残花渐落，便是红颜老死时。<br>
一朝春尽红颜老，花落人亡两不知！</span>"
</div>
<p>你不知道的是，山坡另一侧，宝玉已泪流满面。</p>`,
  choices:[{text:'继续',next:'ch3_crisis'}]
},

ch3_baoyu:{chapter:'第三章 · 风刀霜剑',scene:'大观园 · 沁芳桥',
  effects:{love:10,mood:5},
  text:`<p>你在沁芳桥上找到宝玉。春风吹过，水声潺潺。</p>
<div class="dialogue">"宝玉，人活着到底为了什么？"</div>
<p>他认真想了想：</p>
<div class="dialogue">"和自己喜欢的人在一起，做自己喜欢的事。不为功名——只为一个'真'字。"</div>
<div class="dialogue">"可如果……活着的人做不了自己的主呢？"</div>
<p>他沉默了。小心翼翼握了握你的指尖：</p>
<div class="dialogue">"<span class="emphasis">你的心，永远是你自己的。谁也拿不走。</span>"</div>
<p>你们在桥上坐了很久，直到月亮升起。</p>`,
  choices:[{text:'继续',next:'ch3_crisis'}]
},

ch3_tanchun:{chapter:'第三章 · 风刀霜剑',scene:'大观园 · 秋爽斋',
  text:`<p>探春正在整理账册。见你来了直截了当：</p>
<div class="dialogue">"林姐姐不是为了闲聊吧？"</div>
<div class="dialogue">"三妹妹，一个没有父母没有家业的女孩子，还有什么出路？"</div>
<p>探春叹气：</p>
<div class="dialogue">"我也是女儿家，庶出一辈子都是短处。这世道对女儿家本就不公。"</div>
<p>她忽然眼中有光：</p>
<div class="dialogue">"但我不信命。我把园子花木承包出去，一年省好几百两银子。——<span class="emphasis">只要脑子是自己的，总能找到活路。</span>"</div>
<p class="thought">也许……我能做的，比我以为的更多。</p>`,
  choices:[{text:'继续',next:'ch3_crisis'}]
},

ch3_crisis:{chapter:'第三章 · 风刀霜剑',scene:'荣国府',
  effects:{mood:-10},
  text:`<p>变故来了——王夫人在贾母面前提起宝玉婚事，话里话外暗示<span class="emphasis">"金玉良缘"</span>。贾母只说"再看看"。</p>
<p>府中上下都嗅到了风向——<span class="emphasis">王夫人属意宝钗。</span></p>
<p>消息传来那晚，你呆坐了一整夜。紫鹃急了：</p>
<div class="dialogue">"姑娘，老太太还在呢！老太太疼姑娘，不会不管的！"</div>
<p>你摇了摇头，声音很轻：</p>
<div class="dialogue">"紫鹃，你不懂。老太太再疼我——<span class="emphasis">她终究拗不过整个家族的意思。</span>"</div>`,
  choices:[
    {text:'去找贾母，为自己争取一次',desc:'你不想认命',next:'ch3_final',effects:{pride:10,mood:-5,social:5},flags:{fought:true}},
    {text:'什么都不做，默默承受',desc:'也许这就是命',next:'ch3_final',effects:{mood:-15,pride:-5}},
    {text:'写一封信给宝玉，把心事说清楚',desc:'哪怕不能在一起，也要让他知道你的心',next:'ch3_final',effects:{love:15,talent:5},flags:{letter:true}},
    {text:'开始为自己做打算，不再依附任何人',desc:'你要掌握自己的命运',next:'ch3_final',effects:{pride:15,talent:5,mood:5},flags:{independent:true}}
  ]
},

ch3_final:{chapter:'第三章 · 风刀霜剑',scene:'潇湘馆 · 深秋',
  text:`<p>秋意渐深。贾府开始筹备宝玉的婚事。</p>
<p>没有人来告诉你什么。但你什么都知道了——从丫鬟们压低的声音里，从王熙凤刻意的回避里，从宝玉越来越焦虑的眼神里。</p>
<p>那个人，不是你。</p>
<p>你坐在窗前，窗外的竹叶被风吹得沙沙作响。你忽然觉得很累，累到连眼泪都流不出来。</p>
<p>紫鹃守在你身边，一句话也不敢说。</p>
<p class="thought">从扬州到京城，从六岁到如今。这些年，我步步留心、时时在意，到头来——命运还是不在自己手里。</p>
<div class="divider"></div>
<p class="narration" style="text-align:center;color:var(--gold);letter-spacing:4px">第三章 · 完</p>`,
  choices:[{text:'▸ 终章 · 花落人亡',next:'ch4_start'}]
},

// ===================== 终章 · 花落人亡 =====================
ch4_start:{chapter:'终章 · 花落人亡',scene:'潇湘馆',
  effects:{health:-20,mood:-20},
  text:`<p>宝玉大婚之日定了。新娘是薛宝钗。</p>
<p>据说宝玉并不知情——他以为娶的是你。王熙凤设了"掉包计"，用红盖头瞒天过海。</p>
<p>你病得越来越重。咳血的频率越来越高，大夫来了几次，都只是摇头叹气。</p>
<p>紫鹃哭着去求贾母。贾母也哭了——但她老了，病了，说话已经不像从前那样管用了。</p>
<p>这个曾经护佑你的人，如今也无能为力。</p>
<div class="divider"></div>
<p>婚礼那天，鞭炮声从府的另一头传来。你躺在床上，听得清清楚楚。</p>
<p>紫鹃跪在床边哭。你艰难地转过头，看着她——忽然笑了一下：</p>
<div class="dialogue">"傻丫头，哭什么。"</div>`,
  choices:[
    {text:'烧掉所有诗稿',desc:'这些心血，不愿留给不懂的人',next:'ending_burn',effects:{talent:-20,pride:15}},
    {text:'把诗稿托付给紫鹃保管',desc:'至少让文字留在世上',next:'ending_keep',effects:{talent:10,social:5}},
    {text:'挣扎着起身，最后看一眼窗外的竹子',desc:'你想站着面对最后一刻',next:'ending_stand',effects:{pride:20,health:-10}},
    {text:'闭上眼，默默念着宝玉的名字',desc:'你这一生，到底爱过',next:'ending_love',effects:{love:20,mood:5}},
    {text:'不——我还不想死。',desc:'你决定为自己活下去',next:'ending_survive',effects:{pride:20,health:10,mood:15}}
  ]
},

ending_burn:{chapter:'终章 · 花落人亡',scene:'潇湘馆',
  ending:true,
  endTitle:'结局 · 焚稿断痴情',
  endPoem:'一朝春尽红颜老，花落人亡两不知。',
  endText:`<p>你让紫鹃把诗稿搬来。一页一页，投入火盆。</p>
<p>那些写过的诗、填过的词、流过的泪——都化作了灰烬。紫鹃哭得跪倒在地。</p>
<p>火光映在你苍白的脸上，你忽然觉得很轻松。</p>
<p style="margin-top:20px">鞭炮声还在响。你闭上了眼。</p>
<p style="margin-top:20px">嘴角似乎带着一丝微笑——又似乎什么都没有。</p>
<div style="margin:30px 0;height:1px;background:linear-gradient(90deg,transparent,#4a3828,transparent)"></div>
<p>林黛玉，卒。</p>
<p style="margin-top:20px;font-size:13px">她的才华惊艳了大观园的每一个人。<br>她的骄傲让她至死不肯低头。<br>她用最后的力气，烧掉了自己的全部。<br><br><b>——这是一个时代的悲剧。不是她不够好，而是这个世界，配不上她。</b></p>`,
  text:`<p>你把诗稿一页一页投入火中。</p>
<div class="dialogue">"这些东西……留着做什么呢。"</div>
<p>紫鹃泣不成声。火光映着你苍白的面容。远处鞭炮声声。</p>
<p>你闭上眼，感觉自己变成了一片落花，轻轻地、轻轻地飘了起来……</p>`,
  choices:[]
},

ending_keep:{chapter:'终章 · 花落人亡',scene:'潇湘馆',
  ending:true,
  endTitle:'结局 · 留诗照汗青',
  endPoem:'质本洁来还洁去，强于污淖陷渠沟。',
  endText:`<p>你把诗稿交到紫鹃手中：</p>
<p>"替我收好。将来……若有人懂，便给他看看。"</p>
<p>紫鹃抱着诗稿泪如雨下。你摸了摸她的头，像小时候母亲摸你的头一样。</p>
<p style="margin-top:20px">窗外竹叶沙沙。你听着那声音，慢慢闭上了眼。</p>
<div style="margin:30px 0;height:1px;background:linear-gradient(90deg,transparent,#4a3828,transparent)"></div>
<p>林黛玉，卒。</p>
<p style="margin-top:20px;font-size:13px">她的诗稿被紫鹃珍藏了一辈子。<br>多年后有人翻开那些泛黄的纸页，惊叹于字里行间的才华与深情。<br><br><b>——肉身会消逝，但文字不朽。她活在了每一个读到她诗的人心里。</b></p>`,
  text:`<p>你郑重地将诗稿交到紫鹃手中。</p>
<div class="dialogue">"替我收好。若有人懂，便给他看看。"</div>
<p>你最后听了一回雨打竹叶的声音，慢慢闭上了眼。</p>`,
  choices:[]
},

ending_stand:{chapter:'终章 · 花落人亡',scene:'潇湘馆',
  ending:true,
  endTitle:'结局 · 竹影犹在',
  endPoem:'孤标傲世偕谁隐，一样花开为底迟。',
  endText:`<p>你用尽全身力气撑起身体，走到窗前。</p>
<p>推开窗——翠竹千竿，在风中挺拔如初。</p>
<p>你扶着窗框站了很久。紫鹃吓得要来扶你，你摇了摇头。</p>
<p>"让我站一会儿。"</p>
<p style="margin-top:20px">你望着那些竹子，想起了很多事——母亲的笑容，父亲的叮嘱，宝玉的眼睛，大观园的诗社。</p>
<p>然后你笑了。</p>
<p>"我这一辈子，没有低过头。"</p>
<div style="margin:30px 0;height:1px;background:linear-gradient(90deg,transparent,#4a3828,transparent)"></div>
<p>林黛玉，站着走完了最后一程。</p>
<p style="margin-top:20px;font-size:13px">她没有嫁给她爱的人，没有等到命运的眷顾。<br>但她从未在这个世界面前弯过腰。<br><br><b>——竹可折，不可弯。这是她活过的证据。</b></p>`,
  text:`<p>你撑起身体，走到窗前。推开窗——翠竹千竿，挺拔如初。</p>
<div class="dialogue">"我这一辈子，没有低过头。"</div>
<p>你扶着窗框，望着竹影，嘴角带着微笑。风吹过你的发梢，像江南的春天。</p>`,
  choices:[]
},

ending_love:{chapter:'终章 · 花落人亡',scene:'潇湘馆',
  ending:true,
  endTitle:'结局 · 此心不渝',
  endPoem:'愿奴胁下生双翼，随花飞到天尽头。',
  endText:`<p>你闭上眼，唇间无声地念着一个名字。</p>
<p>你想起初见那天——"这个妹妹我曾见过的。"</p>
<p>想起沁芳桥上的月光，想起他说"你的心永远是你自己的"。</p>
<p>想起那块被他摔在地上的通灵宝玉。</p>
<p style="margin-top:20px">你笑了。泪水从闭着的眼角滑落。</p>
<p>"我这一生……到底是爱过的。"</p>
<div style="margin:30px 0;height:1px;background:linear-gradient(90deg,transparent,#4a3828,transparent)"></div>
<p>林黛玉，卒。</p>
<p style="margin-top:20px;font-size:13px">据说宝玉揭开盖头发现不是她的那一刻，疯了一般冲向潇湘馆。<br>但一切都已经来不及了。<br><br><b>——这世间最残忍的事，不是不曾拥有，而是明明两心相知，却被命运硬生生拆散。</b></p>`,
  text:`<p>你闭上眼，默默念着那个名字。想起了初见，想起了桥上的月光，想起了他说的每一句真话。</p>
<p>泪水从闭着的眼角滑落。你笑了：</p>
<div class="dialogue">"我这一生……到底是爱过的。"</div>`,
  choices:[]
},

// =================== 新结局 · 黛玉活了下来 ===================
ending_survive:{chapter:'终章 · 向死而生',scene:'潇湘馆 · 深夜',
  text:`<p>鞭炮声声声入耳。紫鹃趴在床边哭得浑身发抖。</p>
<p>你躺在床上，看着头顶的帐幔，感觉身体像被抽空了一样——疼，冷，倦。</p>
<p>忽然，你想起了父亲的话——</p>
<div class="dialogue"><span class="emphasis">"你是林家的女儿。"</span></div>
<p>又想起探春的话——</p>
<div class="dialogue"><span class="emphasis">"只要脑子是自己的，总能找到活路。"</span></div>
<p>还有宝玉在桥上说的——</p>
<div class="dialogue"><span class="emphasis">"你的心，永远是你自己的。"</span></div>
<p>你忽然攥紧了被角。</p>
<p>不。</p>
<p><span class="emphasis">你不要死在这里。不要死在别人的婚礼上。不要死在这座金丝笼里。</span></p>
<div class="dialogue">"紫鹃。"</div>
<p>紫鹃抬起泪眼。</p>
<div class="dialogue">"帮我……扶起来。"</div>`,
  choices:[
    {text:'继续',next:'ending_survive_2'}
  ]
},

ending_survive_2:{chapter:'终章 · 向死而生',scene:'潇湘馆 · 黎明',
  effects:{health:5,pride:10,mood:10},
  text:`<p>紫鹃不敢相信自己的耳朵。她扑过来扶住你，你的身体轻得像一片枯叶。</p>
<p>你靠在紫鹃肩上，艰难地喘着气。窗外天色微亮——鞭炮声终于停了。</p>
<div class="dialogue">"紫鹃，你带我走。"</div>
<div class="dialogue">"姑娘——去哪儿？"</div>
<div class="dialogue">"回扬州。回江南。"</div>
<p>紫鹃愣住了。你的声音很弱，但眼神里有一种她从未见过的光——不是绝望，不是悲伤，而是一种<span class="emphasis">破釜沉舟的决绝</span>。</p>
<div class="dialogue">"姑娘，您的身子……"</div>
<div class="dialogue">"死也要死在自己的地方。不死在别人家。"</div>
<p>你顿了顿，忽然笑了一下：</p>
<div class="dialogue">"<span class="emphasis">不——我不打算死。</span>"</div>
<p>你让紫鹃去找探春。天亮之后，探春来了——她的眼睛也是红的。她听完你的话，沉默了很久。</p>
<p>然后她从怀里掏出一个荷包，里面是银票：</p>
<div class="dialogue">"这是我攒的。——林姐姐，你走。我替你瞒着。"</div>`,
  choices:[
    {text:'继续',next:'ending_survive_3'}
  ]
},

ending_survive_3:{chapter:'终章 · 向死而生',scene:'京城南门 · 清晨',
  effects:{pride:10,mood:15},
  text:`<p>三天后，趁着贾府还沉浸在宝玉婚后的混乱中，你和紫鹃悄悄从侧门出了荣国府。</p>
<p>你裹着一件旧棉袍，坐在一辆不起眼的马车上。京城的城门缓缓打开。晨光刺眼。</p>
<p>你回头看了一眼那座高墙大院——</p>
<p class="thought">十二年。从六岁到十八岁。我的整个少女时代，都困在那座园子里。</p>
<p>紫鹃紧紧握着你的手：</p>
<div class="dialogue">"姑娘，前面的路……"</div>
<div class="dialogue">"不知道。"</div>
<p>你说完，忽然觉得胸口那个堵了很多年的东西，松动了一点。</p>
<div class="dialogue">"<span class="emphasis">但至少是我自己选的路。</span>"</div>
<p>马车驶出城门。官道两旁是初春的柳树，嫩芽刚冒出来，绿得发亮。</p>
<p>你深深吸了一口气——空气里有泥土和青草的味道。像小时候扬州的味道。</p>
<p>你咳嗽了两声。紫鹃赶紧递上热茶。你喝了一口，苦涩的药味里带着一丝甜。</p>
<p>你望着前方的路，眼眶湿了，但嘴角是翘的。</p>`,
  choices:[
    {text:'继续',next:'ending_survive_final'}
  ]
},

ending_survive_final:{chapter:'终章 · 向死而生',scene:'江南 · 三年后',
  ending:true,
  endTitle:'结局 · 潇湘重生',
  endPoem:'未若锦囊收艳骨，一抔净土掩风流。<br>——不。她选择了另一种结局。',
  endText:`<p>三年后。</p>
<p>扬州城外有一座小小的书院，名叫<span class="emphasis">"潇湘书塾"</span>。</p>
<p>书院的女先生姓林，据说是姑苏世家的后人。她身子清瘦，总是轻咳，但讲起诗词来眼睛亮得像天上的星星。</p>
<p>她教女孩子们读书、写字、作诗。不教三从四德，只教她们——<span class="emphasis">"你的心是你自己的，谁也拿不走。"</span></p>
<p>学生们都喊她"林先生"。</p>
<p>有一天，一个学生问：</p>
<p>"林先生，您从前在京城大户人家住过，为什么回到这里来？"</p>
<p>林先生沉默了一会儿，望着窗外的翠竹，轻声说：</p>
<p><span class="emphasis">"因为我想活着。活成自己想要的样子。"</span></p>
<div style="margin:30px 0;height:1px;background:linear-gradient(90deg,transparent,#4a3828,transparent)"></div>
<p>紫鹃还在她身边。偶尔有京城的信来——探春嫁去了海疆，在那边办了更大的事业。宝玉据说出了家，做了和尚。</p>
<p>她听到这个消息时，手里的笔停了很久。</p>
<p>然后她写下一首诗，夹进了母亲留下的那卷诗稿里。没有给任何人看。</p>
<p style="margin-top:20px;text-align:center;color:#e8a0b0;font-style:italic;line-height:2.5">
"质本洁来还洁去，一身诗意千寻瀑。<br>
他年若是同淋雪，此生也算共白头。"
</p>
<div style="margin:30px 0;height:1px;background:linear-gradient(90deg,transparent,#4a3828,transparent)"></div>
<p style="font-size:13px">她没有嫁人。没有等到命运的施舍。<br>
但她活了下来——带着满身的才华和伤疤，带着一颗从未低头的心。<br><br>
她把自己活成了一棵竹子。<br>
风吹不折，雪压不弯。<br><br>
<b>——这不是原著里的林黛玉。<br>但也许，这是她本该拥有的人生。</b></p>`,
  text:`<p>三年后，扬州城外。</p>
<p>一座小小的书院，翠竹环绕。一个清瘦的女先生正在教女孩子们读诗。</p>
<p>她轻咳了两声，学生们关切地看她。她摆摆手，笑了：</p>
<div class="dialogue">"没事。——我们继续。今天讲李清照。"</div>
<p class="thought">林黛玉，活了下来。</p>
<p class="thought">她没有等到谁来救她。她救了自己。</p>`,
  choices:[]
}

};
