
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(750,690,1500,40);
	ball=new Garbage(200,500,50);
	right=new Dustbin(800,620,20,100);
	left=new Dustbin(1000,620,20,100);
	bottom=new Dustbin(900,660,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  ball.display();
  bottom.display();
  right.display();
  left.display();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.29,y:-0.5});
	}
}

