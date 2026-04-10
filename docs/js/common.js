/* ========================================
   common.js — レッスンページ共通スクリプト
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* --- コピーボタン --- */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.code-block').querySelector('code').textContent;
      navigator.clipboard.writeText(code);
      btn.textContent = 'コピーした！';
      setTimeout(() => { btn.textContent = 'コピー'; }, 1500);
    });
  });

  /* --- サイドバー スクロール追従 --- */
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  if (sidebarLinks.length) {
    const sections = document.querySelectorAll('[id]');

    function updateActive() {
      let current = '';
      sections.forEach(s => {
        if (s.getBoundingClientRect().top <= 80) current = s.id;
      });
      sidebarLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  /* --- モーダル制御 --- */
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) window.closeDemo();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeDemo();
  });
});

/* --- デモ開閉（グローバル） --- */
let demoInstance = null;

window.openDemo = function() {
  const modal = document.getElementById('demo-modal');
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'false');

  if (!demoInstance && typeof window.demoSketch === 'function') {
    demoInstance = new p5(window.demoSketch, 'demo-container');
  }
};

window.closeDemo = function() {
  const modal = document.getElementById('demo-modal');
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');

  if (demoInstance) {
    demoInstance.remove();
    demoInstance = null;
  }
};
