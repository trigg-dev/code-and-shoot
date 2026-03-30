// =====================
// Code & Shoot
// 第2回: 自機を描こう
// =====================

function setup() {
  createCanvas(480, 640);
}

function draw() {
  background(10, 10, 30);

  // --- 自機を描く ---
  fill(60, 180, 255);
  noStroke();
  ellipse(240, 580, 36, 44);
}
