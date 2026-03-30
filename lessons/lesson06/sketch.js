// =====================
// Code & Shoot
// 第6回: 弾を撃とう
// =====================

// === プレイヤー ===
let x = 240;
let y = 580;

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

  // --- 弾丸の発射 ---
  if (keyIsDown(32)) {
    if (!bulletActive) {
      bulletActive = true;
      bulletX = x;
      bulletY = y - 20;
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
  ellipse(x, y, 36, 44);

  // --- 描画: 弾丸 ---
  if (bulletActive) {
    fill(255, 255, 100);
    ellipse(bulletX, bulletY, 6, 12);
  }
}
