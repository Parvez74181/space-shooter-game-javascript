// Get the canvas Element
let canvas = document.querySelector("canvas");
//set the canvas height and width
canvas.width = innerWidth;
canvas.height = innerHeight;
//get the canvas 2d context
let c = canvas.getContext("2d");

let animationId;

//loop function
function animate() {
    animationId = requestAnimationFrame(animate);
    c.fillStyle = "rgba(0,0,0,0.08)";
    c.fillRect(0, 0, canvas.width, canvas.height);

    player.draw(); //draw the player

    // draw and update for each projectile
    projectileArr.forEach(projectile => {
        projectile.update()
    })


    // draw and update for enemy
    enemyArr.forEach((enemy, index) => {
        enemy.update();



        // detect the collision between enemy and projectile
        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        if (dist - enemy.r - player.r < 1) {
            cancelAnimationFrame(animationId);


        }

        projectileArr.forEach((projectile, projectileindex) => {

            // detect the collision between enemy and projectile
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);

            if (dist - enemy.r - projectile.r < 1) {

                if (enemy.r > 15) {
                    enemy.r = 10
                } else {
                    enemyArr.splice(index, 1);
                }
                projectileArr.splice(projectileindex, 1);
            }


        })
    })

}
animate();