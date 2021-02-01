
function setup() {
    createCanvas(800, 400);

    v1 = createVector(0, 100);
    v2 = createVector(0, -100);
}

function drawDebugBezier(p1, p2, c1, c2) {
    // Draw the Reference line
    strokeWeight(1);
    stroke(100);
    line(p1.x, p1.y, p2.x, p2.y);


    strokeWeight(2);
    stroke(0, 200, 0);
    bezier(p1.x, p1.y, c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);

    // Draw the control point
    strokeWeight(4);
    stroke(200, 0, 0);
    point(c1.x, c1.y);
    point(c2.x, c2.y);
}

function draw() {
    background(220);

    noFill();
    p1 = {}, p2 = {}, c1 = {}, c2 = {};
    p1.x = 100;
    p1.y = 50;
    p2.x = 100;
    p2.y = 200;

    // Draw the Reference line
    strokeWeight(1);
    stroke(200, 0, 0);
    line(p1.x, p1.y, p2.x, p2.y);

    // Draw the Curver 
    c1.x = 10; c1.y = 50;
    c2.x = 200; c2.y = 130;

    strokeWeight(2);
    stroke(0, 200, 0);
    bezier(p1.x, p1.y, c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);

    // Draw the control point
    strokeWeight(4);
    stroke(0, 0, 200);
    point(c1.x, c1.y);
    point(c2.x, c2.y);

    //drawDebugBezier
    
    p1 = createVector(400, 50);
    p2 = createVector(400, 200);
    c1 = p5.Vector.add(p1, v1);
    c2 = p5.Vector.add(p2, v2);

    drawDebugBezier(p1, p2, c1, c2);
    v1.rotate(PI * 0.01);
    v2.rotate(PI * 0.005);
}
