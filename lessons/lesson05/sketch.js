// =====================
// Code & Shoot
// 第5回: 画面の端で止まろう
// =====================

// === プレイヤー ===
let x = 240;
let y = 580;

function setup() {
  createCanvas(480, 640);
}

function draw() {
  background(10, 10, 30);

  // --- プレイヤー操作（端チェックつき） ---
  if (keyIsDown(LEFT_ARROW)) {
    if (x > 20) {
      x = x - 4;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (x < 460) {
      x = x + 4;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    if (y > 20) {
      y = y - 4;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (y < 620) {
      y = y + 4;
    }
  }

  // --- 描画: プレイヤー ---
  fill(60, 180, 255);
  noStroke();
  ellipse(x, y, 36, 44);
}
