// =====================
// Code & Shoot
// 第4回: 画面の端で止まろう
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

  // --- 描画: プレイヤー ---
  fill(60, 180, 255);
  noStroke();
  ellipse(playerX, playerY, 36, 44);
}
