var mainCharacter;
var gravity = 9.8 / 30.0;
var backgroundImage;
var mainCharacterImage;
var weaponImage;
var monsterImage;
var groundOffset = 30;
var monsterArray = [];
var health = 100;
var score = 0;
var isLeft = false;
var numBad = 5;

class Character {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = "blue";
    this.isMonster = false;
    this.isDead = false;
    this.targetX = random() * width;
  }

  update() {
    if (this.y + this.width * 0.5 >= (height - groundOffset) && this.ySpeed > 0) {
      this.ySpeed = this.ySpeed * (-0.4);
      this.y = height - this.width * 0.5 - groundOffset;
    }
    this.ySpeed += gravity;
    this.y += this.ySpeed;

    this.xSpeed *= 0.8;
    this.x += this.xSpeed;
  }

  moveBadGuy() {
    var differenceX = this.targetX - this.x;
    this.xSpeed += differenceX * 0.002;

    if (random() >= 0.98) {
      this.targetX = random() * width;
      this.ySpeed -= 2;
    }
    this.isTouchingMainCharacter();
  }

  isTouchingMainCharacter() {
    if (mainCharacter.x + mainCharacter.width >= this.x &&
      mainCharacter.x <= this.x + this.width &&
      mainCharacter.y + mainCharacter.width >= this.y &&
      mainCharacter.y <= this.y + this.width) {
      //here we have figured out that there was a hit
      stroke("black");
      noFill();
      rect(this.x, this.y, this.width, this.width);
      if (mainCharacter.x < this.x) {
        mainCharacter.x -= 20;
        this.x += 40;
      } else {
        mainCharacter.x += 20;
        this.x -= 40;
      }

      if (mainCharacter.y - this.y < -30) {
        this.isDead = true;
        mainCharacter.ySpeed = -2;
        score++;
      } else {
        health -= 1;
      }
    }
  }

  draw() {
    if (this.isMonster) {
      image(monsterImage, this.x, this.y, this.width, this.width);
    } else {
      image(mainCharacterImage, this.x, this.y, this.width, this.width);
    }
  }
}

function setup() {
  c = createCanvas(1000, 500);
  c.position(225, 75);
  mainCharacter = new Character(200, 200, 60);
  backgroundImage = loadImage("./pixelback.png");
  mainCharacterImage = loadImage("./batmanright.png");
  monsterImage = loadImage("./jokerleft.png");

  for (var i = 0; i < numBad; i++) {
    var newMonster = new Character(random(400, width) + 20 * i, height - 20, 60);
    newMonster.isMonster = true;
    monsterArray.push(newMonster);
  }
}

function draw() {
  if (health <= 0) {
    background(0);
    fill("white");
    // textAlign(CENTER)
    textSize(50);
    text("GAME OVER \nSCORE: " + score, 200, 150, 1000, 1000);
    return
  }

  background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height);

  if (mainCharacterImage == loadImage("./batmanleft.png")) {
    isLeft = true;
  }

  if (mainCharacterImage == loadImage("./batmanleft.png")) {
    isLeft = false;
  }

  if (keyIsDown(LEFT_ARROW)) {
    mainCharacter.xSpeed -= 1.0;
    if (isLeft == false) {
      mainCharacterImage = loadImage("./batmanleft.png");
      isLeft = true;
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    mainCharacter.xSpeed += 1;
    if (isLeft == true) {
      mainCharacterImage = loadImage("./batmanright.png");
      isLeft = false;
    }
  }

  mainCharacter.update();
  mainCharacter.draw();

  //draw health bar
  strokeWeight(2);
  stroke("black");
  fill('black');
  rect(10, 10, 200, 20);
  fill("red");

  rect(10, 10, health * 2, 20);
  text((int)(health), health * 2 + 15, 27);

  fill("white");
  textSize(20);
  text('Score: ', width - 100, 10, 40, 20);
  text(score, width - 30, 10, 40, 20);

  var anyCatAlive = false;

  for (var i = 0; i < monsterArray.length; i++) {
    if (monsterArray[i].isDead) {
      //do nothing! (because monster is dead)
    } else {
      anyCatAlive = true;
      monsterArray[i].update();
      monsterArray[i].moveBadGuy();
      monsterArray[i].draw();
    }
  }
  if (anyCatAlive === false) {
    for (var i = 0; i < numBad; i++) {
      var newMonster = new Character(500 + 20 * i, height - 2, 60);
      newMonster.isMonster = true;
      monsterArray.push(newMonster);
    }
  }
}

function keyPressed() {
  //&& mainCharacter.y >= 260
  if (key === "ArrowUp" && mainCharacter.y >= 260) {
    //JUMP!
    mainCharacter.ySpeed -= 8.0;
  }
}
