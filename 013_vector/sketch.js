let centerVec;

function setup() {
    createCanvas(600, 600);
    background(20);
    centerVec = createVector(width / 2, height / 2);
}


function drawMouseVec() {
    background(20);
    stroke(255, 0, 255);
    line(centerVec.x, centerVec.y, mouseX, mouseY);
}

function drawRayFromMouse() {
    background(20);
    stroke(255, 0, 255, 100);
    strokeWeight(5);

    var vec = createVector(0, 100);
    var numRay = 100;
    var delta = TAU / numRay;    
    
    for(i=0; i<numRay; i++) {
        var drawVec = vec.copy();
        drawVec.add(mouseX, mouseY);
        // console.log("DEBUG: drawVec=" + drawVec);
        line(mouseX, mouseY, drawVec.x, drawVec.y);
        vec.rotate(delta);
    }
}

function drawArrow(base, vec, myColor, weight=2) {
    push();
    stroke(myColor);
    strokeWeight(weight);

    // line 
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);

    // Triangle 
    fill(myColor);    
    rotate(vec.heading());
    let arrowSize = 5;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);

    pop();
}

function testDrawArrow() {
    var base = createVector(100, 100);
    var vec = createVector(50, 80);

    drawArrow(base, vec, '#ffccaa');
}

function drawVectorAdd() {
    background(20);
    var base = createVector(0, 0);
    
    
    var a = createVector(mouseX, mouseY);
    var b = createVector(100, -100);
    var c = p5.Vector.add(a, b);

    // var vec = createVector(50, 80);

    drawArrow(base, a, 'red');
    drawArrow(a, b, 'green');
    drawArrow(base, c, 'blue');
}


function multVectors() {
    background(20);
    stroke(255, 0, 255, 100);
    strokeWeight(5);

    var center = createVector(width/2, height/2);

    var vec = createVector(0, 2);
    var numVec = 100;
    var delta = 2 * TAU / numVec;    
    
    for(i=0; i<numVec; i++) {
        var drawVec = vec.copy();
        drawVec.mult(i+1)
        drawVec.add(center);
        // console.log("DEBUG: drawVec=" + drawVec);
        line(center.x, center.y, drawVec.x, drawVec.y);
        vec.rotate(delta);
    }
}


function draw() {
    //drawMouseVec();
    //drawRayFromMouse();
    //testDrawArrow();
    // drawVectorAdd();
    multVectors();
}
