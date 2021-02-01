/**
 * Reference:
 * https://p5js.org/reference/#/p5/point
 * 
 * Examples: 
 * https://p5js.org/examples/form-points-and-lines.html
 * 
 */


let gVec;
let gTheta;
let gRadius;


function setup() {
    createCanvas(600, 400);

    // For later test 
    gVec = createVector(60, 0);
    gTheta = 0;
    gRadius = 50;
}



function draw() {
    background(230);

    // Simple point 
    x = 20, y = 20;

    stroke(0);
    for (i = 0; i < 10; i++) {
        point(x, y);
        x += 5;
        y += 5;
    }

    // Point different strokeWeight
    x = 120, y = 20;

    stroke(0);
    for (i = 0; i < 10; i++) {
        strokeWeight(i + 1);
        point(x, y);
        x += 5;
        y += 5;
    }

    // Point different grey
    x = 180, y = 20;

    strokeWeight(3);
    for (i = 0; i < 10; i++) {
        stroke(i * 10 + 100);
        point(x, y);
        x += 5;
        y += 5;
    }

    // Using Vector
    let a = createVector(10, 150);

    stroke(50);
    strokeWeight(3);
    let moveVec = createVector(20, 20);
    for (i = 0; i < 10; i++) {
        point(a);

        a = p5.Vector.add(a, moveVec);
        moveVec.y = moveVec.y * -1;
    }

    // Play with different color 
    colors = ['#aa0000', '#00aa00', '#aaaa00', '#00aaaa', '#0000aa'];
    a = createVector(250, 150);
    strokeWeight(12);

    for (i = 0; i < 10; i++) {
        stroke(colors[i % 5]);
        point(a);

        a = p5.Vector.add(a, moveVec);
        moveVec.y = moveVec.y * -1;
    }

    // Draw Line using Points 
    // y = x + 10 
    strokeWeight(1);

    for (x = 10; x < 200; x++) {
        y = 0.3 * x + 200;
        point(x, y);
    }

    // Draw Square using Points 
    // y = x + 10 
    strokeWeight(3);
    sx = 300, sy = 200, ex = 400, ey = 300;
    spacing = 5;
    stroke('#aa0000');
    for (x = sx; x <= ex; x += spacing) {
        y = sy;

        for (y = sy; y <= ey; y += spacing) {
            point(x, y);
        }
    }


    // Moving point 
    // y = x + 10 
    strokeWeight(6);
    sx = 500, sy = 250;
    r = 50;
    x = r * Math.cos(gTheta) + sx;
    y = r * Math.sin(gTheta) + sy;
    gTheta += 0.05;
    stroke('#aa0000');
    point(x, y);

    // the center of the movement
    stroke('#00aa00');
    point(sx, sy);



    // Reset
    stroke(0);
    strokeWeight(1);
}
