

var centerPos;
const drawDebug = true; 

function setup() {
    createCanvas(500, 500);

    centerPos = createVector(250, 250);
}


function drawPetal(tipPos, length, angle, petalAngle) 
{
    stroke(100);
    strokeWeight(3);

    halfPetalAngle = 0.5 * petalAngle;
    
    // line(tipPos.x, tipPos.y, tipPos.x, tipPos.y + length);

    vec = createVector(0, -length);
    vec.rotate(angle);
    leftVec = vec.copy(); 
    leftVec.rotate(halfPetalAngle);
    rightVec = vec.copy();
    rightVec.rotate(-halfPetalAngle);

    //console.log("leftVec=" + leftVec + " right=" + rightVec);
    


    c1 = p5.Vector.add(tipPos, leftVec);
    c2 = p5.Vector.add(tipPos, rightVec);


    drawBezier(tipPos, tipPos, c1, c2);
    //drawDebugBezier(tipPos, tipPos, c1, c2);
}


function drawBezier(p1, p2, c1, c2) {
    // Draw the Reference line
    

    strokeWeight(2);
    stroke(0, 200, 0);
    //fill(0, 200, 0);
    bezier(p1.x, p1.y, c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
}

function drawDebugBezier(p1, p2, c1, c2) {
    // Draw the Reference line
    strokeWeight(1);
    stroke(100);
    line(p1.x, p1.y, p2.x, p2.y);


    strokeWeight(2);
    stroke(0, 200, 0);
    //fill(0, 200, 0);
    bezier(p1.x, p1.y, c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);

    // Draw the control point
    strokeWeight(4);
    stroke(200, 0, 0);
    point(c1.x, c1.y);
    point(c2.x, c2.y);
}

gAngle = 0;
function draw() {
    background(0);

    noFill();
    petalCount = 25;
    petalLength = 300; 
    petalAngle = PI * 0.2;

    deltaAngle = TAU / petalCount;  // TAU is 2PI 

    angle = gAngle;
    for(i=0; i<petalCount; i++) {
        drawPetal(centerPos, petalLength, angle, petalAngle);

        angle += deltaAngle;
    }
    
    //gAngle += PI * 0.005;
//centerPos

    // p1 = {}, p2 = {}, c1 = {}, c2 = {};
    // p1.x = 100;
    // p1.y = 50;
    // p2.x = 100;
    // p2.y = 200;

    // // Draw the Reference line
    // strokeWeight(1);
    // stroke(200, 0, 0);
    // line(p1.x, p1.y, p2.x, p2.y);

    // // Draw the Curver 
    // c1.x = 10; c1.y = 50;
    // c2.x = 200; c2.y = 130;

    // strokeWeight(2);
    // stroke(0, 200, 0);
    // bezier(p1.x, p1.y, c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);

    // // Draw the control point
    // strokeWeight(4);
    // stroke(0, 0, 200);
    // point(c1.x, c1.y);
    // point(c2.x, c2.y);

    // //drawDebugBezier
    
    // p1 = createVector(400, 50);
    // p2 = createVector(400, 200);
    // c1 = p5.Vector.add(p1, v1);
    // c2 = p5.Vector.add(p2, v2);

    // drawDebugBezier(p1, p2, c1, c2);
    // v1.rotate(PI * 0.01);
    // v2.rotate(PI * 0.005);
}
