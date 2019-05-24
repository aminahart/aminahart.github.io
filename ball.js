class Ball {
  constructor(r, g, b, colInp) {
    this.y = mouseY;
    this.x = mouseX;
    this.r = random(10, 50);
    this.speedx = random(-3, 3);
    this.speedy = random(-3, 3);
    this.r = random(20, 100);
    // this.col = [this.r* 2 ,this.r,this.r * 3 + 14, 100]
    this.isnew = true
    if (colInp == '') {
      this.col = [random(0, 255), random(0, 255), random(0, 255), 100]

    } else if (colInp == 'red') {
      this.col = [random(220, 255), random(0, 70), random(0, 70), 100]

    } else if (colInp == 'orange') {
      this.col = [255, random(50, 200), 0, 100]

    } else if (colInp == 'yellow') {
      this.col = [255, random(200, 255), random(0, 100), 100]

    } else if (colInp == 'green') {
      this.col = [random(0, 200), random(120, 255), random(0, 50), 100]

    } else if (colInp == 'blue') {
      this.col = [random(0, 75), random(0, 255), 255, 100]

    } else if (colInp == 'purple') {
      this.col = [random(100, 150), 0, random(100, 255), 100]

    } else if (colInp == 'pink') {
      this.col = [255, 0, random(100, 255), 100]

    } else if (colInp == 'black') {
      var x = random(0, 75)
      this.col = [x, x, x, 100]
    }
  }

  move() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
  }

  show(col) {
    strokeWeight(2);
    noStroke()
    fill(this.col);
    ellipse(this.x, this.y, this.r, this.r);
  }

  check() {
    if (this.x > width - 15) {
      this.speedx = this.speedx * -1;
    }
    if (this.x < 15) {
      this.speedx = this.speedx * -1;
    }
    if (this.y > height - 15) {
      this.speedy = this.speedy * -1;
    }
    if (this.y < 15) {
      this.speedy = this.speedy * -1;
    }
  }

  intersects(other) {
    var d = dist(this.x, this.y, other.x, other.y)
    return (d < this.r / 2 + other.r / 2)
  }

  changecolor(brightness) {
    this.col[3] = brightness
  }

  clicked(x, y) {
    var d = dist(x, y, this.x, this.y);
    if (d < this.r) {
      return true
    } else {
      return false
    }
  }
}
