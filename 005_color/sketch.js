// Reference:
//  https://p5js.org/reference/#/p5/color
//  
function setup() {
    createCanvas(500, 500);
    noStroke();
}

function drawColorRect(color, x, y, w=50, h=100) {
    fill(color);
    rect(x, y, w, h);
}

function draw() {
    background(200);

    // Different color create 
    // 
    colorArray = [
        color(50),  // Gray 
        color(239, 150, 30),
        color('magenta'),
        color('#af0'),      
        color('#567890'),      
        color('rgba(0%, 0%, 100%, 1)'),      
        color('hsla(160, 100%, 50%, 0.5)'),
    ];
    x = 40;
    y = 50;
    colorArray.forEach(color => {
        drawColorRect(color, x, y);
        x += 50;
    });


    // Using RGB (0-100 Range) Mode 
    x = 40, y = 200;
    colorMode(RGB, 100);
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
          stroke(i, j, 0);
          point(x + i, y +j);
        }
    }

    // Using HSB/HSV (0-100 Range) Mode 
    x = 150, y = 200;
    colorMode(HSB, 100);
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            stroke(i, j, 100);  // H, Saturation , brightness
            point(x + i, y +j);
        }
    }

    // Using HSB/HSV (0-100 Range) Mode 
    x = 260, y = 200;
    colorMode(HSB, 100);
    h = 10;
    for (let s = 0; s < 100; s++) {
        for (let b = 0; b < 100; b++) {
            stroke(h, s, b);  // H, Saturation , brightness
            point(x + s, y + 100 - b);  // 
        }
    }

    // Using LERP 
    noStroke();
    colorMode(HSB, 100);
    let fromColor = color(0, 100, 100);
    let toColor = color(99, 100, 100);

    x = 40, y = 330;
    
    for (let i=0; i<=5; i++) {
        let fillColor = lerpColor(fromColor, toColor, i * 0.2);
        drawColorRect(fillColor, x, y);
        x += 50;
    }

    // Using HSL (HSV) Mode 


    // Reset 
    noStroke();
    colorMode(RGB, 255);
}
