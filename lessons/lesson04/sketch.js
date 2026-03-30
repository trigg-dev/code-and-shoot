// =====================
// Code & Shoot
// 第4回: キーボードで操作しよう
// =====================

// === プレイヤー ===
let x = 240;
let y = 580;

function setup() {
  createCanvas(480, 640);
}

function draw() {
  background(10, 10, 30);

  // --- プレイヤー操作 ---
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 4;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 4;
  }
  if (keyIsDown(UP_ARROW)) {
    y = y - 4;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y = y + 4;
  }

  // --- 描画: プレイヤー ---
  fill(60, 180, 255);
  noStroke();
  ellipse(x, y, 36, 44);
}
