const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;


function setup() {
  createCanvas(1200,600);3

  engine = Engine.create();
  world = engine.world;

 stand1=new Ground(600,400,250,20);
 ground=new Ground(600,600,1200,10);
 b1=new Box(600,450,20,5);
}

function draw() {
  background("white");  
  Engine.update(engine);

  stand1.display();
  ground.display();
  b1.display();

  drawSprites();
}