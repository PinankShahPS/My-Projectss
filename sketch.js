var myWorld,myEngine,ball;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var smallbox;
var largebox;
var ground;

function setup() {
  createCanvas(800,400);
  
  myEngine=Engine.create();
  myWorld=myEngine.world;
  var ball_options={
    restitution:0.8
  }
  ball=Bodies.circle(400,200,10,ball_options);
  World.add(myWorld,ball);

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,350,800,10,options);
  World.add(myWorld,ground);

  smallbox=new box(100,100,20,20);
  largebox=new box(100,10,50,70);
}

function draw() {
  background("skyblue");  
  
  Engine.update(myEngine);
  circle(ball.position.x,ball.position.y,10);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);


  smallbox.display();
  largebox.display();
}