//create a player class
class Player {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.r = 15;
        this.color = "white";
    }
    draw() {
        c.beginPath();
        c.fillStyle = this.color;
        c.strokeStyle = this.color;

        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fill();
        c.stroke();
    }

}

let player = new Player();