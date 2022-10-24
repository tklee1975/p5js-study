
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);

    
    let p1 = { x: 100, y: 100 };
    let p2 = { x: 200, y: 200 };

    point = []
    point[0] = {x: p1.x, y: p1.y};
    point[1] = {x: p2.x, y: p1.y};
    point[2] = {x: p2.x, y: p2.y};
    point[3] = {x: p1.x, y: p2.y};
    

    strokeWeight(2);
    stroke(255);
    for(i=0; i<4; i++) {
        p1 = point[i];
        p2 = point[(i+1) % 4];

        //line(p1.x, p1.y, p2.x, p2.y);
    }

    stroke(255, 0, 0);
    curve(
        point[0].x, point[0].y,
        point[0].x, point[0].y,
        point[1].x, point[1].y,
        point[2].x, point[2].y,
        //point[3].x, point[3].y,
    );
    
    noFill();
    
    //beginShape();
    
    strokeWeight(4);
    stroke(100, 200, 100, 200);
    point(200, 300);
    
    center = createVector(200, 200);
    vec = createVector(0,0);
    for(i=0; i<10; i++) {
        //p = p5.Vector.add(center, vec);
        p = center;

        // point(p.x, p.y);
        point(200, 300);

        // curveVertex(point.x, point.y);
        // vec.setMag(vec.mag + 30);
        // vec.rotate(0.01);

        // x += random(-30, 30);
        // y += random(-30, 30);
    }
    //endShape();
    
    // curveVertex(84, 91);
    // curveVertex(68, 19);
    // curveVertex(21, 17);
    // curveVertex(32, 91);
    // curveVertex(32, 91);
    // endShape();


    // let p2 = { x: 73, y: 24 };
    // let p3 = { x: 73, y: 61 };
    // let p4 = { x: 15, y: 65 };
    // noFill();
    // 

//     stroke(0);
// curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
// stroke(255, 102, 0);
// curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);
}
