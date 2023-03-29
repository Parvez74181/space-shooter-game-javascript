// create a enemy class
class Enemy {
  constructor(x, y, r, color, velocity) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.velocity = velocity;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
  }
  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}
let enemyArr = [];

function enemyFunction() {
  let x;
  let y;
  setInterval(() => {
    let r = 10 + Math.random() * 20;

    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? -r : canvas.width + r;
      y = Math.random() * canvas.height;
    } else {
      x = Math.random() * canvas.width;
      y = Math.random() < 0.5 ? -r : canvas.height + r;
    }
    let angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
    let velocity = {
      x: Math.cos(angle),
      y: Math.sin(angle),
    };

    enemyArr.push(new Enemy(x, y, r, "purple", velocity));
  }, 1500);
}
enemyFunction();
