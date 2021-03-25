

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);

  translate(200,200);
  rotate(-90);
  let hr = hour();
  let sc = second();
  let mn = minute();

 
  strokeWeight(8);
  stroke(0,100,255);
  noFill();
  let scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  strokeWeight(8)
  stroke(150,255,105);
  let mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  strokeWeight(8);
  stroke(255,150,100);
  let hrAngle = map(hr % 12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(scAngle);
  strokeWeight(3);
  stroke(0,100,255);
  line(0,0,90,0);
  pop();

  push();
  rotate(mnAngle);
  strokeWeight(6);
  stroke(150,255,105);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  strokeWeight(9);
  stroke(255,150,100);
  line(0,0,50,0);
  pop(); 
}
