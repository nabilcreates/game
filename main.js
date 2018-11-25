let enemy;

function setup() {
    createCanvas(500, 500)

    enemy = {
        x: 20,
        y: 50,
        s: 20,
        health: 100,
    }

    console.log(enemy.x, enemy.y)
}

function draw() {
    ellipseMode(CENTER)
    background(0)

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