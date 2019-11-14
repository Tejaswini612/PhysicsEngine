const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 var options={
   isStatic:true
 }
ground=Bodies.rectangle(200,390,400,20,options);
World.add(world,ground);
var ballOptions={
  restitution:2.0
}
ball=Bodies.circle(100,250,20,ballOptions);
World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}