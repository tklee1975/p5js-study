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


function drawOneBezier() {
    stroke('white');
    strokeWeight(3);

    noFill();
    beginShape();
    vertex(50, 50); // starting 
    vertex(100, 100); // starting 
    vertex(50, 150); // starting 
    //bezierVertex(mouseX, mouseY, mouseX, mouseY, 90, 80);    // 1st control, 2nd control, anchor 
    endShape();


    beginShape();
    vertex(250, 50); // starting 
    bezierVertex(300, 100, 300, 100, 250, 150);
    endShape();

    endShape();
}

function drawMoreBezier() {
    stroke('white');
    strokeWeight(3);

    noFill();
    beginShape();
    vertex(50, 50); // starting 
    vertex(100, 100); // starting 
    vertex(50, 150); // starting 
    vertex(100, 200); // starting 
    //bezierVertex(mouseX, mouseY, mouseX, mouseY, 90, 80);    // 1st control, 2nd control, anchor 
    endShape();


    beginShape();
    vertex(250, 50); // starting 
    bezierVertex(300, 100, 300, 100, 250, 150);
    bezierVertex(300, 200, 300, 200, 250, 250);
    endShape();

    
}

function drawSmoothBezier() {
    stroke('white');
    strokeWeight(3);

    noFill();
    beginShape();
    vertex(250, 50); // starting 
    vertex(250, 100); // starting 
    vertex(250, 150); // starting 
    vertex(250, 150); // starting 
    //vertex(100, 200); // starting 
    //bezierVertex(mouseX, mouseY, mouseX, mouseY, 90, 80);    // 1st control, 2nd control, anchor 
    endShape();

    // beginShape();
    // vertex(250, 50); // starting 
    // bezierVertex(300, 100, 300, 100, 250, 150);
    // bezierVertex(300, 200, 300, 200, 250, 250);
    // endShape();

    stroke('green');
    beginShape();
    vertex(250, 50); // starting 
    bezierVertex(300, 60, 300, 80, 250, 100); // starting 
    bezierVertex(200, 120, 200, 140, 250, 150); // starting 
    //bezierVertex(50, 150); // starting 
    //vertex(100, 200); // starting 
    //bezierVertex(mouseX, mouseY, mouseX, mouseY, 90, 80);    // 1st control, 2nd control, anchor 
    endShape();


    //endShape();
}


function drawLoopBezier() {
    stroke('white');
    strokeWeight(3);

    noFill();
    
    var start = 0;
    var end = 500;
    var step = 50;

    stroke('#0f0');
    beginShape();
    var y = start;
    vertex(250, y); // starting 
    while(y<=end) {
        
        bezierVertex(300, y+step*0.4, 300, y+step*0.6, 250, y+step);
        y+=step;

        bezierVertex(200, y+step*0.4, 200, y+step*0.6, 250, y+step);
        y+=step;
    }

    
    // vertex(250, 50); // starting 
    // bezierVertex(300, 60, 300, 80, 250, 100); // starting 
    // bezierVertex(200, 120, 200, 140, 250, 150); // starting 
    // //bezierVertex(50, 150); // starting 
    // //vertex(100, 200); // starting 
    // //bezierVertex(mouseX, mouseY, mouseX, mouseY, 90, 80);    // 1st control, 2nd control, anchor 
    endShape();


    //endShape();
}


function drawRunningBezier() {
    stroke('white');
    strokeWeight(3);

    noFill();
    
    var start = startY;
    var end = 600;
    var step = 50;

    stroke('#0f0');
    beginShape();
    var y = start;
    vertex(250, y); // starting 
    while(y<=end) {
        
        bezierVertex(300, y+step*0.4, 300, y+step*0.6, 250, y+step);
        y+=step;

        bezierVertex(200, y+step*0.4, 200, y+step*0.6, 250, y+step);
        y+=step;
    }

    startY++;
    if(startY >= 0) {
        startY = -100;
    }
    
    // vertex(250, 50); // starting 
    // bezierVertex(300, 60, 300, 80, 250, 100); // starting 
    // bezierVertex(200, 120, 200, 140, 250, 150); // starting 
    // //bezierVertex(50, 150); // starting 
    // //vertex(100, 200); // starting 
    // //bezierVertex(mouseX, mouseY, mouseX, mouseY, 90, 80);    // 1st control, 2nd control, anchor 
    endShape();


    //endShape();
}



function draw() {
    background(0);

    
    //drawOneBezier();
    //drawMoreBezier();
    //drawSmoothBezier();
    //drawLoopBezier();
    drawRunningBezier();
}
