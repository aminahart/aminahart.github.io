//Mondrian Generator
//by Amina Hart
//February 12, 2019
//Onlines Games and Interactivity

var yellow = [234, 210, 51];
var blue = [15, 40, 140];
var red = [266, 10, 10];
var black = [25, 20, 20];
var white = 245;

function setup() {
  c = createCanvas(400, 400);
  c.position(0, 200);
  strokeWeight(8);
  frameRate(3);
}

function draw() {
  background(255);
  length = (int)(random(20, 350));
  height = (int)(random(20, 350));
  a = (int)(random(5, 100));
  lengthI = (int)(random(20, 300));
  heightI = (int)(random(20, 300));

  if (mouseIsPressed) {
    blue = [(int)(random(1, 256)), (int)(random(1, 256)), (int)(random(1, 256))];
    red = [(int)(random(1, 256)), (int)(random(1, 256)), (int)(random(1, 256))];
    yellow = [(int)(random(1, 256)), (int)(random(1, 256)), (int)(random(1, 256))];
    black = [(int)(random(1, 256)), (int)(random(1, 256)), (int)(random(1, 256))];

  } else {
    yellow = [234, 210, 51];
    blue = [15, 40, 140];
    red = [266, 10, 10];
    black = [25, 20, 20];
  }

  fill(blue);
  rect(0, 0, 50, height);
  fill(white);
  rect(0, height, 50, 400 - height);

  fill(white);
  rect(50, 0, length, 50);
  rect(length + 50, 0, 350 - length, 50);
  
  fill(red);
  rect(350, 50, 50, height);
  fill(white);
  rect(350, height + 40, 50, 350 - height);

  fill(yellow);
  rect(50, 50, lengthI, lengthI);
  fill(white);
  rect(50, lengthI + 50, heightI, a);
  rect(lengthI + 50, 50, 300 - lengthI, lengthI);
  rect(heightI + 50, lengthI + 50, 300 - heightI, 300 - lengthI);

  fill(black);
  rect(50, 350, length, 50);
  fill(white);
  rect(length + 50, 350, 350 - length, 50);
}