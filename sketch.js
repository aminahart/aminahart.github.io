var ball;
var balls = [];
var x;
var numballs;
var clicks = 0;
var removing = false

function setup() {
  createCanvas(1425, 600);
  // createCanvas(800, 600)
  colE = createElement('h1', 'Choose a ball color');
  colE.position(0, height + 60);
  col = createInput();
  col.position(0, height + 115);

  backE = createElement('h1', 'Choose a background color');
  backE.position(0, height + 120);
  back = createInput('grey');
  back.position(0, height + 180);
  x = createElement('h1', 'There are ' + clicks + ' balls')
  x.position(400, height + 60)

  reset = createButton('reset')
  reset.position(width - 40, height + 80)
  reset.mousePressed(update)
  
  i = createElement('h1', 'Click the screen')
  i.position( 420, height + 120)
}

function mousePressed() {
  if (mouseX <= width && mouseY <= height && removing == false) {
    var b = new Ball(random(0, 255), random(0, 255), random(0, 255), col.value());
    // print('radi' ,b.r)
    // print('color' ,b.col)
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
    // print('remove')
    // removing = true
    // }else{
    //   removing = false
  }
}
