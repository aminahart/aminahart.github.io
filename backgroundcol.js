var r;
var g;
var b;

function setup() {
  c = createCanvas(displayWidth, displayHeight-275);
  c.position(0, 175)
}

function draw() {
  r = map(mouseX, 0, 600, 0, 255);
  g = map(mouseY, 0, 600, 255, 0);
  b = map(mouseX, 0, 600, 255, 0);

  background(r, g, b);
  noStroke();
  // rectMode(CENTER);
  // rect(mouseX, mouseY, 40, 40, 4);
}