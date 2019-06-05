var r;
var g;
var b;

function setup() {
  c = createCanvas(1100, 700);
  c.position(0, 200)
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