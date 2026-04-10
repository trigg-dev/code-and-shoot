// =====================
// Code & Shoot
// 第8回: 弾で敵を倒そう
// =====================

// === プレイヤー ===
let x = 240;
let y = 580;

// === 弾丸 ===
let bulletX = 0;
let bulletY = 0;
let bulletSpeed = 6;
let bulletActive = false;

// === 敵 ===
let enemyX = 240;
let enemyY = -20;
let enemySpeed = 2;
let enemyActive = true;

// === スコア ===
let score = 0;

function setup() {
  createCanvas(480, 640);
  enemyX = random(20, 460);
  enemySpeed = random(1, 4);
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

  // --- 弾丸: 画面外に出たら消す ---
  if (bulletY < 0) {
    bulletActive = false;
  }

  // --- 敵の移動 ---
  if (enemyActive) {
    enemyY = enemyY + enemySpeed;
  }

  // --- 敵: 画面外に出たらリスポーン ---
  if (enemyY > 660) {
    enemyX = random(20, 460);
    enemyY = -20;
    enemySpeed = random(1, 4);
  }

  // --- 当たり判定: 弾 vs 敵 ---
  if (bulletActive && enemyActive) {
    let d = dist(bulletX, bulletY, enemyX, enemyY);
    if (d < 20) {
      bulletActive = false;
      enemyX = random(20, 460);
      enemyY = -20;
      enemySpeed = random(1, 4);
      score = score + 1;
    }
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

  // --- 描画: 敵 ---
  if (enemyActive) {
    fill(255, 80, 80);
    ellipse(enemyX, enemyY, 36, 36);
  }

  // --- 描画: スコア ---
  fill(255);
  textSize(18);
  text("SCORE: " + score, 10, 30);
}
