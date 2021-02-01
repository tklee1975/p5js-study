// Reference
//  https://p5js.org/reference/
//  https://p5js.org/examples/form-shape-primitives.html
// 
function setup() {
    createCanvas(800, 400);
    noStroke();
}

function draw() {
    
    background(200);    // 200 grey

    

    // Circle 
    circle(50, 50, 30); // x, y, diamter

    // Ellipse 
    ellipse(100, 50, 30); // x, y, w  , this same as circle 

    ellipse(150, 50, 30, 60); //x, y, w, h

    ellipse(200, 50, 40, 30); //x, y, w, h

    
    // Square 
    square(250, 25, 50);        // topLeft(x, y), w

    // Rect 
    rect(350, 25, 100, 50);     // topLeft(x, y), w, h

    // Round Rect 
    rect(500, 25, 100, 50, 20);     // topLeft(x, y), w, h, corner radius

    // Various Round Rect Corner
    rect(650, 25, 50, 50, 60, 10, 0, 0);     // topLeft(x, y), w, h, corner radius




    // Quard 1 
    quad(50, 100, 100, 140, 90, 200, 20, 220);

    // Quard 2 
    quad(150, 100, 200, 140, 120, 220, 190, 200);

    // Triangle 
    quad(250, 100, 300, 140, 250, 180);

    // 
    stroke(50);
    strokeWeight(3);

    arc(50, 300, 80, 80, 0, 2*PI*0.75); // center(x, y), width, height, start Angle, end Angle

    arc(150, 300, 60, 60, 2*PI*0.1, 2*PI*0.8); // center(x, y), width, height, start Angle, end Angle

    arc(250, 300, 60, 60, 2*PI*0.1, 2*PI*0.8, CHORD); // center(x, y), width, height, start Angle, end Angle

    arc(350, 300, 60, 60, 2*PI*0.1, 2*PI*0.8, OPEN);

    arc(450, 300, 60, 60, 2*PI*0.1, 2*PI*0.8, PIE);


    // 
    noStroke();

    // // Thicker 
    // strokeWeight(10);
    // circle(100, 50, 30); // x, y, diamter

    // // fill with black
    // fill(0);    //
    // circle(150, 50, 30); // x, y, diamter

    // // fill with black
    // noFill();    //
    // circle(200, 50, 30); // x, y, diamter

    // // fill with black
    // noFill();    //
    // circle(200, 50, 30); // x, y, diamter


    // // Reset 
    // fill(255); 
    // strokeWeight(1);
}
