var fruit,alien,sword,gameover,enemy,enemyGroup;
var alienImage,fruit1Image,fruit2image,fruit3Image,fruit4Image;
var swordImage,gameoverImage;
var PLAY=1;
var END=0;
var gameState=1;
var score=0;
var fruitGroup;

function preload(){
  alienImage = loadAnimation("alien1.png","alien2.png");
  fruit1Image= loadImage("fruit1.png");
  fruit2Image= loadImage("fruit2.png");
  fruit3Image= loadImage("fruit3.png");
  fruit4Image= loadImage("fruit4.png");
  swordImage =loadImage("sword.png");
  gameoverImage= loadImage("gameover.png");
 
}

function setup(){
 
  createCanvas(400,400);
  
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;

  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
}

function draw(){
 background(180);
  text("Score: "+ score, 250,50);
  
  if(gameState===PLAY){
    sword.x=World.mouseX;
    sword.y=World.mouseY;
    
  }
  
  if(gameState===END){
    
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.SetvelocityY=0;
    fruitGroup.SetvelocityX=0;
    
    enemyGroup.SetvelocityY=0;
    enemyGroup.SetvelocityX=0;
    
    sword.addImage(gameoverImage);
    sword.x=200;
    sword.y=200;
  }
  
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2;
  }
  if(enemyGroup.isTouching(sword)){
    sword.addImage(gameoverImage);
    sword.x=200;
    sword.y=200;
  }
  
  enemy();
  fruits();
  
  
  drawSprites();
}
function enemy(){
  if(World.frameCount%200===0){
    
    monster = createSprite(400,200,20,20);
    monster.addAnimation("moving",alienImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.SetLifetime=50;
    
    enemyGroup.add(monster);
     
    
  }
}

function fruits(){
  if(World.frameCount%80===0){
    
    fruit = createSprite(400,200,20,20);
    fruit.scale=0.2;
    
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1Image);
    }else if(r==2){
      fruit.addImage(fruit2Image);
    }else if(r==3){
      fruit.addImage(fruit3Image);
    }else {fruit.addImage(fruit4Image);}
    
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7;
    fruit.SetLifetime=100;
    
    fruitGroup.add(fruit);
 
  }
}