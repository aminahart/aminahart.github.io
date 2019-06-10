function setup() {
  createCanvas(displayWidth- 15, 600);
  background('white');
  colE = createElement('h2', 'Choose a color');
  colE.position(0, height + 140);
  col = createInput('black');
  col.position(0, height + 220);

  reset = createButton('reset');
  reset.position(width - 40, height + 200);
  reset.mousePressed(update);

  slider = createSlider(5, 50, 30);
  slider.position(400, height +200);
  slider.style('width', '150px');
}

function draw() {
  fill(col.value());
  noStroke();

  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, slider.value(), slider.value(), 10);
  }
}

function update() {
  background('white');
}