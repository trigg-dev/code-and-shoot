// =====================
// Code & Shoot
// 第3回: 変数で動かそう
// =====================

// === プレイヤー ===
let playerX = 240;
let playerY = 580;

function setup() {
  createCanvas(480, 640);
}

function draw() {
  background(10, 10, 30);

  // 自動で右に動く
  playerX = playerX + 1;

  // --- 描画: プレイヤー ---
  fill(60, 180, 255);
  noStroke();
  ellipse(playerX, playerY, 36, 44);
}
