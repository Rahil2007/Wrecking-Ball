const Engine = Matter.Engine
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world;
var ground;
var roof;
var ball;
var chain;
var blocks = [];
var mouse;
var mConstraint;
var canvas;

function setup() {
  canvas = createCanvas(800,800);
  mouse = Mouse.create(canvas.elt);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    mouse : mouse,
  }
  
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  ground = new Ground(400,790,800,20);
  roof = new Ground(300,300,200,30);
  ball = new Bob(300,350,80);
  chain = new Rope(roof.ground, ball.body,0,0);

  
  for(j = 760; j>=300; j-= 30){
    //makes one row
    for(i = 500; i <= 700; i += 30){
      blocks.push(new Block(i,j,30,30));
    }
  }
  Engine.run(engine);
}

function draw() {
  background(150);  

  ground.display();
  roof.display();
  ball.display();
  chain.display();

  for(i = 0; i<blocks.length ; i++){
    blocks[i].display();
  }
}