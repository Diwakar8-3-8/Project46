const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world, engine;
//Declare all the variable
var Bluro2;
var ast1, ast2, ast3, ast4;
var bomb1, bomb2, bomb3, bomb4, bomb5, bomb6;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12;
var border;

function setup() {
  createCanvas(displayWidth*1.333,displayHeight*1.13);
  engine = Engine.create();
  world = engine.world;
//White border
  var options={
    isStatic:true
}

border = Bodies.rectangle(displayWidth/1.5,displayHeight*0.56,displayWidth/4,displayHeight/4,options);
World.add(world,border);



  ast1 = new Ast(200,150,displayWidth/5.5,displayHeight/4);
  ast2 = new Ast(1500,150,displayWidth/5.5,displayHeight/4);
  ast3 = new Ast(200,650,displayWidth/5.5,displayHeight/4);
  ast4 = new Ast(1500,650,displayWidth/5.5,displayHeight/4);

  Bluro2 = new Bluro();
  Engine.run(engine);
}


function draw() {
  background(0,0,70);
  rectMode(CENTER);
  stroke("white");
  strokeWeight(10);
  noFill();
  rect(border.position.x, border.position.y,displayWidth*1.29,displayHeight*1.05);
  ast1.display();
  ast2.display();
  ast3.display();
  ast4.display();

  Bluro2.display();
  
}