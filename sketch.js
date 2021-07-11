const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	var ball_options={
		restitution:0.8
	}
    ball1=Bodies.circle(320,380,20,ball_options)
	Engine.run(engine);

	con1 = Matter.Constraint.create({
		pointA:{x:320,y:100},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });
	World.add(world,ball1);
	World.add(world,con1);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);




  //call display() to show ropes here
  ellipse(ball1.position.x,ball1.position.y,20)
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
