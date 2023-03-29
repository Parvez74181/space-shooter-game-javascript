//create a projectile class
class Projectiles {
  constructor(x, y, r, velocity) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.velocity = velocity;
  }
  draw() {
    c.beginPath();
    c.fillStyle = "red";

    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fill();
  }
  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}
