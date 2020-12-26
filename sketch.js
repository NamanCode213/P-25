
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	P = new paper(100,610)
	D1= new ground(400,690,800,10)
	D2= new dustbin(600,690,130,10)
	D3= new dustbin(665,650,10,90)
	D4= new dustbin(535,650,10,90)
}


function draw() {
  rectMode(CENTER);
  background(0);
 D1.display();
 D2.display();
 D3.display();
 D4.display();
 P.display();
 keyPressed();
 drawSprites();
}
function keyPressed() {
   if (keyCode === UP_ARROW){
   Matter.Body.applyForce(P.body,P.body.position,{x:1,y:-1});
   }
}


