// =====================
// Code & Shoot
// 第5回: 弾を撃とう
// =====================

// === プレイヤー ===
let playerX = 240;
let playerY = 580;
let playerSpeed = 4;

// === 弾丸 ===
let bulletX = 0;
let bulletY = 0;
let bulletSpeed = 6;
let bulletActive = false;

function setup() {
  createCanvas(480, 640);
}

function draw() {
  background(10, 10, 30);

  // --- プレイヤー操作（端チェックつき） ---
  if (keyIsDown(LEFT_ARROW)) {
    if (playerX > 20) {
      playerX = playerX - playerSpeed;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (playerX < 460) {
      playerX = playerX + playerSpeed;
    }
  }

  // --- 弾丸の発射 ---
  if (keyIsDown(32)) {
    if (!bulletActive) {
      bulletActive = true;
      bulletX = playerX;
      bulletY = playerY - 20;
    }
  }

  // --- 弾丸の移動 ---
  if (bulletActive) {
    bulletY = bulletY - bulletSpeed;
  }

  // --- 画面外に出たら消す ---
  if (bulletY < 0) {
    bulletActive = false;
  }

  // --- 描画: プレイヤー ---
  fill(60, 180, 255);
  noStroke();
  ellipse(playerX, playerY, 36, 44);

  // --- 描画: 弾丸 ---
  if (bulletActive) {
    fill(255, 255, 100);
    ellipse(bulletX, bulletY, 6, 12);
  }
}
