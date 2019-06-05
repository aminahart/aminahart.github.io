var ball;
var balls = [];
// var numballs;
var clicks = 0;
var removing = false;

function setup() {
  c =createCanvas(displayWidth, 600);
  var canvasX = 0;
  var canvasY = 175;
  c.position(canvasX, canvasY);
  // createCanvas(800, 600)
  colE = createElement('h2', 'Choose a ball color');
  colE.position(canvasX, height + 140);
  col = createInput();
  col.position(canvasX, height + 220);

  backE = createElement('h2', 'Choose a background color');
  backE.position(canvasX + 400, height + 140);
  back = createInput();
  back.position(canvasX + 400, height + 220);

  x = createElement('h2', 'There are ' + clicks + ' balls');
  x.position(canvasX + 950, height + 140);

  reset = createButton('reset');
  reset.position(canvasX+width - 100, height + 180);
  reset.mousePressed(update);
  //
  // i = createElement('h1', 'Click the screen');
  // i.position(canvasX + 420, height + 120)
}

function mousePressed() {
  if (mouseX <= width && mouseY <= height && removing === false) {
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
    var overlapping = false;
    for (var other of balls) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      b.changecolor(225);
    } else {
      b.changecolor(90);
    }
  }
  x.html('There are ' + clicks + ' balls');

  if (keyIsDown(32)) {
    removeballs();
    // print('remove')
    // removing = true
    // }else{
    //   removing = false
  }
}