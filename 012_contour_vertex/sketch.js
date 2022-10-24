// Reference:
//      https://p5js.org/reference/#/p5/vertex
gx = 0;
gy = 0;
vx = 1;
vy = 1.5;
rad = 50;
deltaRad = 0.1;

startY = -100;

function setup() {
    createCanvas(500, 500);
}


function drawContour() {
    stroke('white');
    strokeWeight(3);

    translate(250, 250);
    stroke(255, 0, 0);
    beginShape();
    // Exterior part of shape, clockwise winding
    vertex(-140, -40);
    vertex(40, -140);
    vertex(40, 140);
    vertex(-40, 40);
    // Interior part of shape, counter-clockwise winding
    beginContour();
    vertex(-80, -20);
    vertex(-20, 40);
    vertex(20, 20);
    vertex(mouseX-250, mouseY-250);
    endContour();
    endShape(CLOSE);
}



function draw() {
    background(0);

    drawContour();
}
