function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(62, 64, 66);
  smooth();
  angleMode(DEGREES);
  frameRate(20);
}


var b=100;
var x= 2;
var y=0;
var c1=255;
var c2= 0;
var c3= 238;
var c4= 0;
var counter=120;

function draw() {
strokeWeight(1);

// animazione centro
push();
scale(0.5, 0.5);
translate(width,height);
rotate(frameCount*8);
stroke(lerpColor(color('purple'), color('red'),frameCount/120));
noFill();
line(3*cos(frameCount*3)*150,3*sin(frameCount*3)*150, 200, 200);
if (frameCount==600) {
noLoop();
}
pop();

// animazione quadrato
push();
translate(width/2,height/2);
strokeWeight(0.5)
rotate(frameCount*x);
stroke(c1, c2, c3);
noFill();
rectMode(CENTER);
rect(0,0,450,450);
if  (frameCount/counter==1) {
  x= x-4;
  c3= 0;
  c4=238;
}
if (frameCount/counter==2) {
  counter=counter*3;
  x=x+4;
  c3= 238;
  c4=0;
}
pop();

// animazione destra
push();
translate(width-150, 100);
rotate(frameCount*0);
stroke(lerpColor(color(c1,c2,c3), color(c1, c2, c4),frameCount/120));
noFill();
line(b,y,cos(frameCount*3)*+b,sin(frameCount*3)*+b);
pop();

push();
translate(width-150, 400);
rotate(frameCount*0);
stroke(lerpColor(color(c1,c2,c3), color(c1, c2, c4),frameCount/120));
noFill();
line(0,0,cos(frameCount*9)*+100,sin(frameCount*3)*+200);
pop();

//animazione sinistra
push();
translate(150, height-100);
rotate(frameCount*0);
stroke(lerpColor(color(c1,c2,c4), color(c1, c2, c3),frameCount/120));
noFill();
line(-b,  y,-cos(frameCount*3)*+b,sin(frameCount*3)*+b);
pop();

push();
translate(150, 200);
rotate(frameCount*0);
stroke(lerpColor(color(c1,c2,c4), color(c1, c2, c3),frameCount/120));
noFill();
line(0,0,cos(frameCount*9)*+100,sin(frameCount*3)*+200);
pop();
//

}
