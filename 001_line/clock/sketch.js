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
let gCenter;


const fps = 30;
const secondLength = 200;
const minuteLength = 150;

function setup() {
    createCanvas(500, 500);

            // https://p5js.org/reference/#/p5/frameRate
    // For later test 
    gVec = createVector(60, 0);
    frameRate(fps);                  // 
    gTheta = 0;

    
    gCenter = createVector(width/2, height/2);

    // Setting for second vector
    
    secondRotateRate = 2 * PI / fps / 60; 
}



function draw() {
    background(0);

   
    // Rotating Line 
    // 

    // Second 
    secondVec = createVector(0, -secondLength);
    secondVec.rotate(second() * 2 * PI / 60);  
    endVec = p5.Vector.add(gCenter, secondVec);
    strokeWeight(3);
    stroke(255, 100, 100, 200);
    line(gCenter.x, gCenter.y, endVec.x, endVec.y);
    
    // Minute 
    //minuteLength
    minuteVec = createVector(0, -minuteLength);
    minuteVec.rotate(minute() * 2 * PI / 60);  
    endVec = p5.Vector.add(gCenter, minuteVec);
    strokeWeight(4);
    stroke(100, 255, 100, 200);
    line(gCenter.x, gCenter.y, endVec.x, endVec.y);

    // Reset
    stroke(0);
    strokeWeight(1);  
}
