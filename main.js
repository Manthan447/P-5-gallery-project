function preload(){

}

function setup(){
     Canvas = createCanvas(1000 , 650)
    Canvas.position(200 , 150)
    Video = createCapture(VIDEO)
    Video.hide()
    Tint_colour = ""
}
function draw(){
fill("green");
stroke("green");
rect(85, 37, 850, 25);
fill("green");
stroke("green");
rect(41, 37, 25, 600);
fill("green");
stroke("green");
rect(85, 595, 850, 25);
fill("green");
stroke("green");
rect(932, 37, 25, 600);
fill("red");
stroke("red");
circle(55, 50, 70);
fill("red");
stroke("red");
circle(945, 50, 70);
fill("red");
stroke("red")
circle(55, 605, 70)
fill("red");
stroke("red");
circle(945, 605, 70);
image(Video, 200, 150, 400, 300)
}