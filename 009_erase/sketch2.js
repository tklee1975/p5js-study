// Reference:
//      https://p5js.org/reference/#/p5/erase
colorArray = ['red', 'blue', 'orange', 'yellow', 'green', 'purple', 'magenta'];

function setup() {
    createCanvas(500, 500);
    noLoop();
}

function drawRandomCircle() {
    let x = 0;
    let y = 0;
    let r = 0;

    noStroke();

    for (let i = 0; i < 30; i++) {
        x += random(100, 400);
        x = x % 500;
        y += random(100, 400);
        y = y % 500;
        r += random(50, 200);
        r = (r % 300) + 50;

        c = (int)(random(0, 6));
        color = colorArray[i % 6];
        
        
        fill(color);
        circle(x, y, r, r);
    }
}

function draw() {
    //background(0);


    drawRandomCircle();

    let x = 20;
    let y = 20;
    
    for(let level=20; level <= 255; level+=50) {
        erase(level, level); // erase fill, earse stroke
        //erase();
        rect(x, y, 200, 50);

        x += 60;
        y += 80;
        noErase();
    }
    
}
