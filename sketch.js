var tank;
var enemy;
var sight;
var ebullet;
var gameState=0;
var enemyi;
var bullet;
var ebulleti;

function preload(){
  enemyi=loadImage("tank.png")
  ebulleti=loadImage("bullet.png")
}

function setup() {
  createCanvas(600,400);
  sight=createSprite(300,200,500,10);
  ebullet=createSprite(500,200,20,5);
 
  // bullet=createSprite(100,100,20,5);
  tank=new Tank(100,100);
  
  enemy=new Tank(500,200);
  enemy.body.addImage(enemyi)
  enemy.body.scale=0.2;
  

 
  
}

function draw() {
  background(0,0,0); 
  sight.x=tank.body.x+100; 
  sight.y=tank.body.y;
  bullet.x=tank.body.x; 
  bullet.y=tank.body.y;

  sight.shapeColor="red";
  ebullet.shapeColor="green";
  bullet.shapeColor="green";
  ebullet.y=enemy.body.y;
  
  if(gameState===3){
    tank.body.destroy();
    enemy.body.destroy();
    sight.destroy();
    ebullet.destroy();
    textSize(50);
    fill("red");
    text("you are a loser",200,200);
  }
  if(keyDown("UP_ARROW")){
    tank.body.y-=1;
  }
  if(keyDown("DOWN_ARROW")){
    tank.body.y+=1;
  }
  if(keyDown("LEFT_ARROW")){
    tank.body.x-=1;
  }
  if(keyDown("RIGHT_ARROW")){
    tank.body.x+=1;
  }
  // if(keyDown('SPACE')){
  //   bullet.velocityX=5
  // }
  if(enemy.body.isTouching(sight)){
    ebullet.velocityX=-5;
  }
  if(ebullet.x<0){
    ebullet.velocityX=0;
    ebullet.x=500;
    ebullet.y=200;
  }
  // if(ebullet.isTouching(tank.body)){
  //   gameState=3;
  // }
  // if(bullet.isTouching(enemy.body)){
  //   gameState=3;
  // }
  if(keyDown('space') && frameCount%20===0){

    var x=createSprite(tank.body.x,tank.body.y,20,5);
    x.velocityX=5
  }
  drawSprites();
}

