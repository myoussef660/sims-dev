var ballx = 200;
var bally = 0;
var ballz = 0;

var r = {mag: 200, dir: 0};
function setup(){
  createCanvas(710, 400, WEBGL);
  phiSlider = createSlider(-180, 180, 1);
  phiSlider.parent('sketch-holder');
  phiSlider.position(20, 30);
  phiSlider.style('width', '150px');
  phiSlider.class("sim-slider gray");
}

function draw(){
  background(255);
  pointLight(250, 250, 250, 100, 100, 0);
  ambientLight(100);
  //orbitControl();
  rotateX(.2);
  rotateY(-.2);

  camera(600,-400,1500);
  perspective(20 / 180 * PI, width/height, 0.1, 100);
  //generate coordinate axes
  axis();



    push();
    ambientMaterial('red');
    rotateZ(-PI/2);
    rotateX(Math.atan2(ballz,ballx));
    push();
    translate(0,-r.mag/2,0);
    cylinder(10,r.mag);
    pop();
    push();
    translate(0,-r.mag,0);
    cone(30,50);
    pop();
    pop();

    push();
    translate(0,0,0)
    rotateY((PI/180)*phiSlider.value());
    ambientMaterial('green');
    rotateZ(-PI/2);
    rotateX(Math.atan2(ballz,ballx));
    push();
    translate(0,-r.mag/2,0);
    cylinder(10,r.mag);
    pop();
    push();
    translate(0,-r.mag,0);
    cone(30,50);
    pop();
    pop();

    if(Math.abs(Math.sin((PI/180)*phiSlider.value()))>.001){
    push();
    translate(0,0,0)
    rotateZ(PI/2);
    ambientMaterial('blue');
    rotateZ(-PI/2);
    rotateX(Math.atan2(ballz,ballx));
    push();
    translate(0,(-r.mag*Math.sin((PI/180)*phiSlider.value()))/2,0);
    cylinder(10,-r.mag*Math.sin((PI/180)*phiSlider.value()));
    pop();
    push();
    translate(0,-r.mag*Math.sin((PI/180)*phiSlider.value()),0);
    if(Math.sin((PI/180)*phiSlider.value())<0){
      rotateX(PI);
    }
    cone(30,50);
    pop();
    pop();
    }


}

function axis(){
  push();
  rotateX(0);
  rotateY(0);
  rotateZ(0);
  ambientMaterial('gray');
  cylinder(3, 500);
  pop();

  push();
  rotateX(HALF_PI);
  //rotateY(90);
  //rotateZ(0);
  ambientMaterial('gray');
  cylinder(3, 1000);
  pop();

  push();
  rotateX(0);
  rotateY(0);
  rotateZ(HALF_PI);
  ambientMaterial('gray');
  cylinder(3, 500);
  pop();

}
