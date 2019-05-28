function setup() {
  createCanvas(1000, 800);
}

function draw() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  let l = random (50, 100);

  if (mouseIsPressed) {
    fill(r, g, b);
    stroke(r, g, b)
  } else {
    fill(r, g, b);
    stroke(0);
  }
  rect(mouseX, mouseY, 80, 80, 10);
}