var ball;
var balls = [];
var numballs;
var clicks = 0;
var removing = false

function setup() {
  createCanvas(displaywidth, displayheight);
  // createCanvas(800, 600)
  colE = createElement('h1', 'Choose a ball color');
  colE.position(0, 400);
  col = createInput();
  col.position(0, 400 + 115);

  backE = createElement('h1', 'Choose a background color');
  backE.position(0, 400 + 120);
  back = createInput('grey');
  back.position(0, 400 + 180);
  x = createElement('h1', 'There are ' + clicks + ' balls')
  x.position(400, 400 + 60)

  reset = createButton('reset')
  reset.position(width - 40, 400 + 80)
  reset.mousePressed(update)
  
  i = createElement('h1', 'Click the screen')
  i.position( 420, 400 + 120)
}

function mousePressed() {
  if (mouseX <= width && mouseY <= height && removing == false) {
    var b = new Ball(random(0, 255), random(0, 255), random(0, 255), col.value());
    balls.push(b);
    clicks += 1;
  }
}

function removeballs() {
  // if (mousePressed && removing == true){
  for (var i = balls.length - 1; i >= 0; i--) {
    if (balls[i].clicked(mouseX, mouseY)) {
      balls.splice(i, 1);
      clicks -= 1
      // }
    }
  }
}

function update() {
  for (var i = balls.length - 1; i >= 0; i--) {
    balls.splice(i, 1);
  }
  clicks = 0
}

function draw() {
  background(back.value());
  for (var b of balls) {
    b.show();
    b.move();
    b.check();
    var overlapping = false
    for (var other of balls) {
      if (b !== other && b.intersects(other)) {
        overlapping = true
      }
    }
    if (overlapping) {
      b.changecolor(225)
    } else {
      b.changecolor(90)
    }
  }
  x.html('There are ' + clicks + ' balls')

  if (keyIsDown(32)) {
    removeballs()
  }
}
function removeballs() {
  // if (mousePressed && removing == true){
  for (var i = balls.length - 1; i >= 0; i--) {
    if (balls[i].clicked(mouseX, mouseY)) {
      balls.splice(i, 1);
      clicks -= 1
      // }
    }
  }
}

function update() {
  for (var i = balls.length - 1; i >= 0; i--) {
    balls.splice(i, 1);
  }
  clicks = 0
}

function draw() {
  background(back.value());
  for (var b of balls) {
    b.show();
    b.move();
    b.check();
    var overlapping = false
    for (var other of balls) {
      if (b !== other && b.intersects(other)) {
        overlapping = true
      }
    }
    if (overlapping) {
      b.changecolor(225)
    } else {
      b.changecolor(90)
    }
  }
  x.html('There are ' + clicks + ' balls')

  if (keyIsDown(32)) {
    removeballs()
  }
}
