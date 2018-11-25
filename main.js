let enemy, bullet, player, cnv;
let healthminus = 1;
let score = 0;

function setup() {
    cnv = createCanvas(500, 500)

    enemy = {
        x: random(width),
        y: random(height),
        s: 20,
        health: 100,
        dead: false,
        hit: false,
    }


    bullet = {
        x: mouseX,
        y: mouseY,
    }


    console.log(enemy.x, enemy.y)
}

function draw() {

    player = {
        x: mouseX,
        y: mouseY,
    }

    ellipseMode(CENTER)
    background(0)

    // DRAW ENEMIES
    drawEnemies()

    // PLAYER
    ellipse(player.x, player.y, 20)

    // BULLET
    // ellipse(bullet.x, bullet.y, 10)

    // USED FOR SHOOTING LATER!
    cnv.mousePressed(function () {
        console.log("hey")
    })

    // COLLIDE BETWEEN PLAYER AND ENEMY
    let collider = collideCircleCircle(player.x, player.y, 20, enemy.x, enemy.y, enemy.s)

    if (collider) {
        // IF COLLIDE, MINUS HEALTH BY ONE
        enemy.health -= healthminus

    }
    
    // CHECK IF ENEMY IS DEAD
    if (enemy.health == 0) {
        enemy.dead = true;
        spawn()
        
        // INCREMENT THE SCORE
        score ++;
    }

    // IF DEAD THEN HEALTH = 0
    if (enemy.dead) {
        enemy.health = 0;
    }

    console.log(enemy.hit)
}

function drawEnemies() {
    // MAP THE ENEMY.HEALTH TO THE WIDTH OF THE HEALTHBAR
    let maphealth = map(enemy.health, 0, 100, 0, 40)

    // DRAW HEALTH AND ENEMY
    push()
    fill(255, 0, 0)
    rect(enemy.x, enemy.y - 30, maphealth, 10)
    pop()
    push()
    fill(255)
    ellipse(enemy.x, enemy.y, enemy.s)
    pop()
}

function spawn() {
    enemy.dead = false;
    enemy.health = 100;
    enemy.x = random(width);
    enemy.y = random(height);
}