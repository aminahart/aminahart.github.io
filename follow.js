function setup() {
  c = createCanvas(1100, 700);
  c.position (0, 200)
}

function draw() {
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  var l = random (50, 100);

  if (mouseIsPressed) {
    fill(r, g, b);
    stroke(r, g, b)
  } else {
    fill(r, g, b);
    stroke(0);
  }
  rect(mouseX, mouseY, 80, 80, 10);
}