let projectileArr = [];
addEventListener("click", function (e) {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let r = 4;
  let angle = Math.atan2(
    e.clientY - canvas.height / 2,
    e.clientX - canvas.width / 2
  );

  let velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle),
  };
  projectileArr.push(new Projectiles(x, y, r, velocity));
});

addEventListener("resize", function () {
  //set the canvas height and width
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

function getDistance(x1, x2, y1, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
