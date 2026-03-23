// ========== 启动逻辑 ==========
function startGame() {
  document.getElementById('title-screen').classList.add('hidden');
  // 启动背景音乐
  MusicSystem.start();
  setTimeout(() => {
    document.getElementById('game-container').classList.add('active');
    renderScene('start');
  }, 800);
  createPetals();
}

function restartGame() {
  location.reload();
}

// 键盘快捷操作：数字键选择
document.addEventListener('keydown', e => {
  const num = parseInt(e.key);
  if (num >= 1 && num <= 9) {
    const data = SCENES[Engine.current];
    if (data && data.choices && data.choices[num - 1]) {
      choose(num - 1);
    }
  }
});

// 初始化花瓣
createPetals();
