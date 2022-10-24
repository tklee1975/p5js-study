
function setup() {
    createCanvas(400, 400);
}

function drawText() {
    textSize(32);
    text('word', 10, 30);
    fill(0, 102, 153);
    text('word', 10, 60);
    fill(0, 102, 153, 51);
    text('word', 10, 90);
}

function drawAtoZ() {
    textSize(20);

    var x = 5;
    var y = 20;
    for(ch=65; ch<(65+26); ch++) {
        var str = String.fromCharCode(ch);
        text(str, x, y);
        y += 15;
        x += 15;
    }
    // for(ch='A'; ch <'')
    // text('word', 10, 30);
    // fill(0, 102, 153);
    // text('word', 10, 60);
    // fill(0, 102, 153, 51);
    // text('word', 10, 90);
}


function draw() {
    background(220);
    //drawText();
    drawAtoZ();
}
