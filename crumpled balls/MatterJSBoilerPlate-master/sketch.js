
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);
	var cardboard21 = createSprite(350,650,150,20);
	cardboard21.shapeColor = "red";
	
	var cardboard22 = createSprite(410,590,20,100);
	cardboard22.shapeColor = "red";
	
	var cardboard7 = createSprite(290,590,20,100);
	cardboard7.shapeColor = "red";

	 var paper = createSprite(596,650,20,20);

	 ground = Bodies.rectangle(width/2,400,width,10)
		
	  {
			isStatic:true
		}
		World.add(World,ground)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  

}

function keyPressed(paper) {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
	   
   
	   
	 }
   }



