const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,side0,side1,side2;

function preload(){
	
}

function setup() {
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 400, 10);

	 ground = new Ground(400, 680, 800, 20);
	 
	 side0 = new dustbin(550,600,20,100)
	 side1 = new dustbin(660,660,200,20)
	 side2 = new dustbin(770,600,20,100)


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  side0.display()
  side1.display()
  side2.display()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode ===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}



