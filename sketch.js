
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
 backImg=loadImage("Plucking mangoes/bg.png");
 treeImg= loadImage("plucking mangoes/tree.png");
 boyImg=loadImage("plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	
	

	//Create the Bodies Here.
	
	
	tree = new Tree(550,390,450,450);

	stone= new Stone(50,520,20);

	mango1 =new Mango(430,330,20);
	mango2 =new Mango(510,240,20);
	mango3 =new Mango(610,345,20);
	mango4 =new Mango(625,260,20);
	mango5 =new Mango(530,320,20);
	mango6 =new Mango(700,340,20);

	//creating the boy
	boy = createSprite(200,540,10,10);
	boy.addImage(boyImg);
	boy.scale=0.1;
 
	ground = new Ground(400,600,800,20);

    slingShot=new SlingShot(stone.body,{x:150,y:480})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);
  Engine.update(engine);

  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  slingShot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  
  
  
  
  drawSprites();

  textSize(15);
  fill("brown");
  text("Press space bar to try again",300,50);

  
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 150, y:480});
		slingShot.Attach(stone.body);
    }
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position;
 stoneBodyPosition=lstone.body.position;

 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
 if(distance<=lmango.radius+lstone.radius){
    Matter.Body.setStatic(lmango.body,false);
 }

}



