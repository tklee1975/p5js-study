// Reference
//  https://p5js.org/reference/
// 
function setup() {
    createCanvas(800, 400);
    noStroke();
}

function draw() {



    background(200);    // 100 grey


    strokeWeight(5);


    // Black stroke 
    strokeWeight(1);
    stroke(0);
    circle(100, 50, 60); // x, y, diamter

    // Thicker stroke 
    strokeWeight(5);
    stroke(0);
    circle(200, 50, 60); // x, y, diamter

    // Different stroke Color
    strokeWeight(5);
    stroke('#FA0');
    circle(300, 50, 60); // x, y, diamter


    // Fill with black
    strokeWeight(3);
    stroke('#FF0');
    fill(0);
    circle(100, 150, 60); // x, y, diamter

    // No Fill
    strokeWeight(3);
    stroke('#FF0');
    noFill();
    circle(200, 150, 60); // x, y, diamter

    // No Stroke 
    noStroke();
    fill(0);
    circle(300, 150, 60); // x, y, diamter

    // Fill using Gray and Alpha 
    noStroke();
    x = 100, y = 250, gray = 255, alpha = 200;
    for (i = 0; i < 5; i++) {
        fill(gray, alpha);
        circle(x, y, 50); // x, y, diamter
        x += 20;
        gray -= 50;
        alpha -= 20;
    }

    // Fill using Color Array
    noStroke();
    colorArray = [
        [255, 0, 0, 200],
        [255, 255, 0, 200],
        [0, 255, 0, 200],
        [0, 255, 255, 200],
        [0, 0, 255, 200],
    ]
    x = 280, y = 250, gray = 255, alpha = 200;
    colorArray.forEach(value => {
        fill(value);
        circle(x, y, 50); // x, y, diamter
        x += 30;
    });

  
    // Reset 
    fill(255);
    strokeWeight(1);
}
