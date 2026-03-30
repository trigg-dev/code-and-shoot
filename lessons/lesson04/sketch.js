// =====================
// Code & Shoot
// 第4回: キーボードで操作しよう
// =====================

// === プレイヤー ===
let playerX = 240;
let playerY = 580;
let playerSpeed = 4;

function setup() {
  createCanvas(480, 640);
}

function draw() {
  background(10, 10, 30);

  // --- プレイヤー操作 ---
  if (keyIsDown(LEFT_ARROW)) {
    playerX = playerX - playerSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + playerSpeed;
  }
  if (keyIsDown(UP_ARROW)) {
    playerY = playerY - playerSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY = playerY + playerSpeed;
  }

  // --- 描画: プレイヤー ---
  fill(60, 180, 255);
  noStroke();
  ellipse(playerX, playerY, 36, 44);
}
