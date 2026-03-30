// =====================
// Code & Shoot
// 第3回: 変数で動かそう
// =====================

// === プレイヤー ===
let x = 240;
let y = 580;

function setup() {
  createCanvas(480, 640);
}

function draw() {
  background(10, 10, 30);

  // 自動で右に動く
  x = x + 1;

  // --- 描画: プレイヤー ---
  fill(60, 180, 255);
  noStroke();
  ellipse(x, y, 36, 44);
}
