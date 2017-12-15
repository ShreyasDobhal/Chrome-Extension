
function setup() {
	canvas=createCanvas(windowWidth,windowHeight);
}


function draw() {
    background(85);
    rect(10,10,20,20);
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}