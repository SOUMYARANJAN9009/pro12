var path,path_moving;
var jake,jake_running;
var  leftboundary,rightboundary;
var coinImg,coin,bomb,bombImg,drink,drinkImg;

function preload(){
 jake_running=loadAnimation("Runner-1.png","Runner-2.png");
 path_moving=loadImage("path.png");
 coinImg=loadImage("coin.png");
 bombImg=loadImage("bomb.png");
 drinkImg=loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);

  //creating path
  path=createSprite(200,200,150,200);
  path.addAnimation("moving",path_moving);
  path.scale=1.2;
  path.y=200;

  //creating jake
  jake=createSprite(200,330,25,40);
  jake.addAnimation("running",jake_running);
  jake.scale=0.08;

  // creating boundary
  leftboundary=createSprite(40,200,10,800);
  rightboundary=createSprite(360,200,10,800);
  leftboundary.visible=false;
  rightboundary.visible=false;

//adding bomb,coin and energyDrink
 
coin=createSprite(100,50,10,10);
coin.addImage(coinImg);
coin.scale=0.3;


coin=createSprite(100,150,10,10);
coin.addImage(coinImg);
coin.scale=0.3;


coin=createSprite(100,250,10,10);
coin.addImage(coinImg);
coin.scale=0.3;

bomb=createSprite(200,50,10,10);
bomb.addImage(bombImg);
bomb.scale=0.05;

bomb=createSprite(200,150,10,10);
bomb.addImage(bombImg);
bomb.scale=0.05;

bomb=createSprite(200,250,10,10);
bomb.addImage(bombImg);
bomb.scale=0.05;

drink=createSprite(300,50,10,10);
drink.addImage(drinkImg);
drink.scale=0.05;

drink=createSprite(300,150,10,10);
drink.addImage(drinkImg);
drink.scale=0.05;

drink=createSprite(300,250,10,10);
drink.addImage(drinkImg);
drink.scale=0.05;

 
}

function draw() {
  background("black");

  //moving jake 
  jake.x=World.mouseX;

  // colliding jake with the boundaries
  jake.collide(leftboundary);
  jake.collide(rightboundary);


// velocity of the road
  path.velocityY=4;
  console.log(path.y);
  
// creating infinite path
 if(path.y>400){
   path.y=height/2;
 }
 


  drawSprites();

}
