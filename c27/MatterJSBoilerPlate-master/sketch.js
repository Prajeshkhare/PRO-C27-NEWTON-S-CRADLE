
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	rope1 = new rope1 (bobObject1.body,roofObject.body,-bobDimaeter*2,0)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rope1.display();
 

}



