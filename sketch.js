var ship,shipruning,edges;
var seaImage,sea;



function preload(){
  seaImage = loadImage("sea.png");  
  shipruning = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}
function setup(){
  createCanvas(900,400); 
  
  sea=createSprite(200,200,400,200) 
  sea.addImage("moving",seaImage)
  sea.velocityX = -4;

  ship=createSprite(200,250,10,10) 
  ship.addAnimation("runing",shipruning)
  
  ship.scale = 0.4;
}
function draw() {
 
  drawSprites();

  if (sea.x < 0) {
    sea.x = 200;
  }
}