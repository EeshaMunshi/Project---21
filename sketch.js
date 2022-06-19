var ground;
var l, r;
var ball, ballOptions;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ballOptions = {isStatic : false, restitution:0.3, friction:0, density:1.2}
ball = Bodies.circle(260,100,20,ballOptions);
World.add(world, ball)
	//Create the Bodies Here.
ground = new Ground(width/2,670,width,20);
l= new Ground(1100,600,20,120)
r = new Ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 20)
  ground.display()
  l.display()
  r.display()
  
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x:0, y:0},{x:80 , y:-80})
ballisStatic : true
    }
}





