// setup canvas

const canvas = document.querySelector("canvas");
const para = document.querySelector("p");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);



// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// A shape class
class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

// Model a ball
class Ball extends Shape {
  exists;
  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY);
    this.color = color;
    this.size = size;
    this.exists = true;
  }
  // Draw the ball
  // context is like a paper
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  /*
  - beginPath() measn we want to draw a shape on the paper.
  - fillStyle define the color of the shape we drawing .
  - arc() is to define the position of ball and size, and an angle of arc. 2PI means that is a circle.
  */

  // Update the ball's data to implement the movement
  update() {
    if (this.x + this.size >= width || this.x - this.size <= 0) {
      this.velX = -this.velX;
    }
    if (this.y + this.size >= height || this.y - this.size <= 0) {
      this.velY = -this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
  }

  // Collision detection
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        if (
          dx * dx + dy * dy <
          (this.size + ball.size) * (this.size + ball.size)
        ) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// An EvilCircle class
class EvilCircle extends Shape {
  constructor(x, y) {
    super(x, y, 20, 20);
    this.color = "white";
    this.size = 10;
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;
      }
    });
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds() {
    if (this.x + this.size >= width) {
      this.x -= this.velX;
    }
    if (this.x - this.size <= 0) {
      this.x += this.velX;
    }
    if (this.y + this.size >= height) {
      this.y -= this.velY;
    }
    if (this.y - this.size <= 0) {
      this.y += this.velY;
    }
  }
  collisionDetect() {
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        if (
          dx * dx + dy * dy <
          (this.size + ball.size) * (this.size + ball.size)
        ) {
          ball.exists = false;
          numberOfBalls--;
          para.textContent = `Ball count: ${numberOfBalls}`;
        }
      }
    }
  }
}
// testing
// const testBall = new Ball(50, 100, 4, 4, "blue", 10);

// Animate the ball
const balls = [];
let numberOfBalls = 30;
while (balls.length < 30) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}

const evilCircle = new EvilCircle(100, 100);

// a loop to update all balls' position
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    if (ball.exists) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }
    
  }
  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();
  requestAnimationFrame(loop);
}



loop();
