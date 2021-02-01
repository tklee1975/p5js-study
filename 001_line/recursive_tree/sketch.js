/**
 * Reference:
 * https://p5js.org/reference/#/p5/line
 * 
 * Examples: 
 * https://p5js.org/examples/form-points-and-lines.html
 * 
 */


gDelta = 0.5;

function setup() {
    createCanvas(500, 500);

            // https://p5js.org/reference/#/p5/frameRate
    // For later test 
    
}



function draw() {
    background(0);

    startPos = createVector(250, 500);
    branchVec = createVector(0, -80);
   
    drawBranch(startPos, branchVec, 8);
}

function drawBranch(startPos, branchVec, width) {
    if(width < 0.1 || branchVec.mag() < 0.1) {
        return;
    }

    //stroke(0, 255, 0);
    //colorMode(HSB, 100);
    stroke(0, 255, 0);
    //stroke(width * 100, 100, 100);
    strokeWeight(width);

    let endPoint = p5.Vector.add(startPos, branchVec);
    line(startPos.x, startPos.y, endPoint.x, endPoint.y);
    
    let newWidth = width * 0.5;

    branchVec = branchVec.mult(0.95);

    drawBranch(endPoint, branchVec, newWidth);

    let rightVec = branchVec.copy();
    rightVec.rotate(gDelta);
    drawBranch(endPoint, rightVec, newWidth);

    let leftVec = branchVec.copy();
    leftVec.rotate(-gDelta);
    drawBranch(endPoint, leftVec, newWidth);

    //leftVec = branchVec.rotate(gDelta);
    //drawBranch(endPoint, leftVec, width * 0.75);
}