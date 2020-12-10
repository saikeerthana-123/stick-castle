const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var tower1,tower2,tower3,tower4,tower5,pillar1,pillar2;
var ground;
var top1,top2,top3;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,400,400,10);

  tower1 = new Rectangle(80,350,60,300,"#FFFFFF");
  tower2 = new Rectangle(280,350,60,300,"#FFFFFF");
  tower3 = new Rectangle(132,370,40,255,"#FFFFFF");
  tower4 = new Rectangle(228,370,40,255,"#FFFFFF");
  tower5 = new Rectangle(180,385,53,170,"#FFFFFF");
  pillar1 = new Rectangle(40,330,20,400,"#FFFFFF");
  pillar2 = new Rectangle(320,330,20,400,"#FFFFFF");

  lamp1 = new Circle(39,116,8);
  lamp2 = new Circle(320,116,8);
  
  top1 = new Triangle(283,160,3,30,"lavender");
  top2 = new Triangle(89,180,3,30,"lavender");
  top3 = new Triangle(300,200,3,30,"lavender");
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  tower1.display();
  tower2.display();
  tower3.display();
  tower4.display();
  tower5.display();
  pillar1.display();
  pillar2.display();
  lamp1.display();
  lamp2.display();
  ground.display();
  top1.display();
  top2.display();
  top3.display();
 
}
