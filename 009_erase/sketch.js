// Reference:
//      https://p5js.org/reference/#/p5/erase
gx = 0;
gy = 0;
vx = 1;
vy = 1.5;
rad = 50;
deltaRad = 0.1;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);

    fill(100, 200, 100);
    rect(100, 100, 300, 300);

    erase();

    

    circle(gx, gy, rad, rad);

    noErase();

    gx += vx;
    gy += vy;

    if(gx < 0 || gx > 500) {
        vx = -vx;
        deltaRad = -deltaRad;
    }
    if(gy < 0 || gy > 500) {
        vy = -vy;
        deltaRad = -deltaRad;
    }
    rad += deltaRad;
}
