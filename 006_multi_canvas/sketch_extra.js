new p5(p => {
    const fontSize = 32;

    p.setup = function() {
        p.createCanvas(200, 200).parent(canvasA);
        p.background(200, 0, 0);
        p.textSize(fontSize);
    }

    p.draw = function() {
        p.text("A", 100, 100);
    }
});

new p5(p => {
    const fontSize = 32;

    p.setup = function() {
        p.createCanvas(200, 200).parent(canvasB);
        p.background(0, 200, 0);
        p.textSize(fontSize);
    }

    p.draw = function() {
        p.text("B", 100, 100);
    }
});