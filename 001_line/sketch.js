/**
 * Reference:
 * https://p5js.org/reference/#/p5/line
 * 
 * Examples: 
 * https://p5js.org/examples/form-points-and-lines.html
 * 
 */


let gVec;
let gTheta;


function setup() {
    createCanvas(600, 300);

    // For later test 
    gVec = createVector(60, 0);
    gTheta = 0;
}



function draw() {
    background(130);

    // normal line 
    line(10, 10, 100, 100);

    // Different Thickness
    strokeWeight(4);
    line(110, 10, 200, 100);
    
    // Different Grey Level
    stroke(150);
    line(210, 10, 300, 100);
    stroke(200);
    line(220, 10, 310, 100);
    stroke(250);
    line(230, 10, 320, 100);

    // Different Color 
    x1 = 310; x2 = x1+90;
    stroke(250, 100, 100);
    line(x1, 10, x2, 100);
    x1 += 10; x2 += 10;
    
    stroke(100, 250, 200);
    line(x1, 10, x2, 100);
    x1 += 10; x2 += 10;
    
    stroke(250, 100, 250);
    line(x1, 10, x2, 100);

    // Different Alpha 
    strokeWeight(8);
    stroke(200, 50);
    line(450, 10, 550, 100);

    stroke(200, 100);
    line(550, 10, 450, 100);

    stroke(200, 0, 100, 230);
    line(500, 10, 500, 100);

    stroke(100, 200, 100, 120);
    line(450, 50, 550, 50);

    // Play with Vector
    start = createVector(50, 200);
    a = createVector(50, 50);
    b = p5.Vector.add(start, a);

    strokeWeight(2);
    stroke(255);
    line(start.x, start.y, b.x, b.y);

    stroke(255, 100, 100);
    a.rotate(PI/3);
    b = p5.Vector.add(start, a);
    line(start.x, start.y, b.x, b.y);

    // Rotating Line 
    // 
    startX = 200, startY = 230;
    stroke(255, 100, 100);
    gVec.rotate(0.01);  
    line(startX, startY, startX + gVec.x, startY+gVec.y);

    // stroke(200);
    // line(320, 10, 310, 100);
    // stroke(250);
    // line(330, 10, 320, 100);

    // Reset
    stroke(0);
    strokeWeight(1);  
}
