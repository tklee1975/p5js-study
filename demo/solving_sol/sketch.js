// Reference:
//      https://p5js.org/reference/#/p5/vertex
gx = 0;
gy = 0;
vx = 1;
vy = 1.5;
rad = 50;
deltaRad = 0.1;

const gridWidth = 16;

var gridH, gridW, halfGridW, halfGridH;

function setup() {
    createCanvas(700, 700);
    background('black');

    gridH = Math.ceil(width / gridWidth);
    gridW = Math.ceil(width / gridWidth);

    halfGridW = (int)(gridW / 2);
    halfGridH = (int)(gridH / 2);

    console.log("Grid: " + gridH + "x" + gridW 
                + " halfGrid: " + halfGridW + "x" + halfGridH);
}


function drawFullVerticalLines(color) {
    stroke(color);
    strokeWeight(1);
    
    // console.log("vertline spacing=" + spacing);

    // Pair of lines 
    beginShape(LINES);
    
    let numGrids = gridW - 1;
    let x = gridWidth;
    for(i=0; i<numGrids; i++) {
        vertex(x, 0);
        vertex(x, height);
        x += gridWidth;
    }
    
    endShape();
}

function drawFullHorizontalLines(color) {
    stroke(color);
    strokeWeight(1);
 

    // Pair of lines 
    beginShape(LINES);
    let numGrids = gridH - 1;
    let y = gridWidth;
    for(i=0; i<numGrids; i++) {
        vertex(0, y);
        vertex(width, y);
        y += gridWidth;
    }
    
    endShape();
}

// function drawFullHorizontalLines(numLines, spacing, color) {
//     stroke(color);
//     strokeWeight(1);

//     // Pair of lines 
//     beginShape(LINES);
//     let y = spacing;
//     for(i=0; i<numLines; i++) {
//         vertex(0, y);
//         vertex(width, y);
//         y += spacing;
//     }
    
//     endShape();
// }

function drawSlopes(startPoint, endPoint, numLines,
     spacing, color, drawFn) {
    stroke(color);
    strokeWeight(1);
 
    // Pair of lines 
    beginShape(LINES);
    let x = startPoint[0];
    let y = startPoint[1];
    for(i=0; i<Math.ceil(numLines); i++) {
        drawFn(x, y)
        // vertex(x, 0);
        // vertex(0, x);
        x += spacing;
    }
    
    endShape();
}

function drawPattern1(numLines, spacing, color) {
    let halfLines = Math.ceil(numLines / 2);
    let startY = (halfLines + 1) * spacing;
    let endY = (numLines + 1) * spacing;
    let startX = 0;
    let endX = (halfLines + 1) * spacing;
    let startPoint = [startX, startY];
    let endPoint = [endX, endY];
    let nLines = halfLines + 1;

    drawSlopes(startPoint, endPoint, nLines, 
                spacing, color, function(x, y) {
                    vertex(x, startY);
                    vertex(0, x + startY);
                    vertex(endX - x, endY);
                    vertex(endX, endY - x);
                });
}




function drawPattern2(numLines, spacing, color) {
    let halfLines = Math.floor(numLines / 2);
    let startY = (halfLines) * spacing;
    let startX = (halfLines+1) * spacing;
    let endX = (numLines + 1) * spacing;
    let endY = (numLines + 1) * spacing;

    let startPoint = [startX, startY];
    let endPoint = [endX, endY];
    
    let nLines = halfLines + 1;

    drawSlopes(startPoint, endPoint, nLines, 
                spacing, color, function(x, y) {
                    vertex(startX + x, startY);
                    vertex(startX, x + startY);
                    // vertex(endX - x, endY);
                    // vertex(endX, endY - x);
                });
}

/***
 * Style1 
 * 
 * 
 *      [a1]      = x, startY
 *  [a2]          = startX, startY - (x - startX) 
 *      [b2]      = endX, endY - (x - startX)
 *  [b1]          = x, endY
 * 
 * ----
 * Style2 
 * 
 * 
 *  [a1]      = x, startY
 *      [a2]  = endX, endY - (x - startX) 
 *  [b2]      = startX, end - (x - startX) 
 *      [b1]  = x, endY 
 */
function drawHalfDiagonal(quarter, color, style) {
    let startGPos, endGPos;

    if(quarter == 0) {
        startGPos = [0, 0];
        endGPos = [halfGridW, halfGridH];
    } else if(quarter == 1) {
        startGPos = [halfGridW, 0];
        endGPos = [gridW, halfGridH];
    } else if(quarter == 2) {
        startGPos = [0, halfGridH];
        endGPos = [halfGridW, gridH];
    } else {
        startGPos = [halfGridW, halfGridH];
        endGPos = [gridW, gridH];
    }
 
    var drawFn;

    if(style == 0) {
        drawFn = function(pos, start, end) {
            vertex(pos[0], start[1]);
            vertex(end[0], end[1] - (pos[0] - start[0]));
    
            vertex(pos[0], end[1]);
            vertex(start[0], end[1] - (pos[0] - start[0]));            
        };
    } else {
        drawFn = function(pos, start, end) {
            vertex(pos[0], start[1]);
            vertex(start[0], start[1] + (pos[0] - start[0]));
    
            vertex(pos[0], end[1]);
            vertex(end[0], start[1] + (pos[0] - start[0]));            
        };
    }

    drawDiagonalWithFn(startGPos, endGPos, color, drawFn);
}

function drawDiagonalWithFn(startGrid, endGrid, color, drawFnX) {
   stroke(color);
   strokeWeight(1);

   // Pair of lines 
   beginShape(LINES);
   let startX = startGrid[0] * gridWidth;
   let startY = startGrid[1] * gridWidth;
   let endX = endGrid[0] * gridWidth;
   let endY = endGrid[1] * gridWidth;
   
   let start = [startX, startY];
   let end = [endX, endY];

   for(x = startX; x<=endX; x+= gridWidth){
       drawFnX([x, startY], start, end);
       // vertex(x, 0);
       // vertex(0, x);
       //x += spacing;
   }
   
   endShape();
}

// function drawPattern2(numLines, spacing, color) {
//     let nLines = Math.ceil((numLines - 1) * 0.5);
//     let startPoint = [0, spacing * nLines];
//     let endPoint = [width/2, height];
    

//     drawSlopes(startPoint, endPoint,  nLines, 
//                 spacing, color, function(x, y) {
//                     vertex(x, 0);
//                     vertex(0, x);
//                 });

// }

function draw() {
    background('white');
    
    // Pattern 1
    // drawFullVerticalLines('#fff');
    // drawFullHorizontalLines('#fff');
    // drawHalfDiagonal(0, '#fff', 0);
    // drawHalfDiagonal(0, '#fff', 1);
    // drawHalfDiagonal(2, '#fff', 1);
    // drawHalfDiagonal(3, '#fff', 0);

    // drawFullVerticalLines('#ff0');
    // drawFullHorizontalLines('#0ff');
    // drawHalfDiagonal(0, '#f00', 0);
    // drawHalfDiagonal(1, '#ff0', 1);
    // drawHalfDiagonal(2, '#0f0', 1);
    // drawHalfDiagonal(3, '#00f', 0);

    drawFullVerticalLines('#0f0');
    drawFullHorizontalLines('#ff0');
    // drawHalfDiagonal(0, '#f00', 0);
    // drawHalfDiagonal(1, '#ff0', 1);
    drawHalfDiagonal(2, '#f00', 1);
    drawHalfDiagonal(3, '#00f', 0);
    drawHalfDiagonal(3, '#f00', 1);

}
