// Reference:
//      https://p5js.org/reference/#/p5/vertex
gx = 0;
gy = 0;
vx = 1;
vy = 1.5;
rad = 50;
deltaRad = 0.1;

function setup() {
    createCanvas(500, 500);
}

function drawVertexPointDemo() {
    stroke('white');
    strokeWeight(3);

    beginShape(POINTS);
    vertex(30, 20);
    vertex(100, 20);
    vertex(200, 75);
    vertex(30, 100);
    endShape();
}

// Fill 
function drawVertexDemo() {
    stroke('white');
    strokeWeight(3);

    beginShape();
    vertex(30, 20);
    vertex(100, 20);
    vertex(200, 75);
    vertex(30, 100);
    endShape();
}

function drawVertexLineDemo() {
    stroke('white');
    strokeWeight(3);
    noFill()

    beginShape();
    vertex(30, 20);
    vertex(100, 20);
    vertex(200, 75);
    vertex(30, 100);
    vertex(40, 120);
    vertex(35, 90);
    endShape();
}

function drawShapeWithStroke() {
    stroke('white');
    strokeWeight(3);
    fill('red');

    beginShape();
    vertex(30, 20);
    vertex(100, 20);
    vertex(200, 75);
    vertex(30, 100);
    vertex(40, 120);
    vertex(35, 90);
    endShape();
}

function drawStar() {
    let pointArray = [];

    let starSize = 5;

    let centerPoint = [200, 200];

    let vec = createVector(0, 50);
    let angle = (TAU / starSize) * 2;

    for(i=0; i<starSize; i++) {
        x = vec.x + centerPoint[0];
        y = vec.y + centerPoint[1];
        pointArray.push([x, y]);
        vec.rotate(angle);
    }
    
    // a.rotate(PI/3);
    // b = p5.Vector.add(start, a);
    // Prepare the data 
    
    stroke('orange');
    strokeWeight(5);
    fill('white');

    

    beginShape();
    pointArray.forEach( v => {
        vertex(v[0], v[1]);
    });
    endShape(CLOSE);    // CLOSE to connect the last & first vertex
}


function drawShapeWithLines() {
    stroke('white');
    strokeWeight(3);
    fill('red');

    // Pair of lines 
    beginShape(LINES);
    vertex(30, 20);
    vertex(100, 20);
    
    vertex(200, 75);
    vertex(30, 100);

    vertex(40, 120);
    vertex(35, 90);
    endShape();
}

function drawShapeWithTriangle() {
    stroke('white');
    strokeWeight(3);
    fill('red');

    // Pair of lines 
    beginShape(TRIANGLES);
    vertex(30, 20);
    vertex(100, 20);
    
    vertex(200, 75);
    vertex(30, 100);

    vertex(40, 120);
    vertex(35, 90);
    endShape();
}

function drawShapeWithStripe() {
    stroke('white');
    strokeWeight(3);
    fill('red');

    // Pair of lines 
    beginShape(TRIANGLE_STRIP);
    vertex(30, 20);
    vertex(100, 20);
    
    vertex(200, 75);
    vertex(30, 100);

    
    endShape();
}



function drawShapeWithFan() {
    stroke('white');
    strokeWeight(3);
    fill('red');

    // Pair of lines 
    beginShape(TRIANGLE_FAN);
    vertex(30, 20);
    vertex(100, 20);
    
    vertex(200, 75);
    vertex(30, 100);

    endShape();
}
function draw() {
    background(0);

    //drawVertexDemo();
    //drawVertexLineDemo();
    // drawVertexPointDemo();
    // drawShapeWithStroke();
    //drawShapeWithLines();
    //drawShapeWithTriangle();
    drawShapeWithStripe();
    //drawShapeWithFan();
    // drawStar();
}
