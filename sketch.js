
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies.circles;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper= new Paper(100,600,10);
  ground= new Ground(400,650,20,100);
	leftSide= new Dustbin(550,620,2,100);
  bottom= new Dustbin(610,660,20,100);
  rightSide= new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();
  dustbin.display();
  
  
  drawSprites();
 
}

function KeyPressed(){
  if(KeyCode === UP_Arrow){
     Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85});
  }
}



