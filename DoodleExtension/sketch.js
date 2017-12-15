console.log("Running");

var s= function (sketch) {
    var x=100;
    var y=100;
    
    sketch.setup=function () {
        document.body.style['userSelect']='none';
        let h=document.body.clientHeight;
        let c=sketch.createCanvas(sketch.windowWidth,h); 
        console.log("setup");
        c.position(0,0);
        c.style('pointer_events','none');
        sketch.clear();
    };
    
    sketch.draw=function() {
        sketch.stroke(0);
        sketch.strokeWeight(4);
        if (sketch.mouseIsPressed)
            sketch.line(sketch.mouseX,sketch.mouseY,sketch.pmouseX,sketch.pmouseY);
    };
};

var myp5 = new p5(s);