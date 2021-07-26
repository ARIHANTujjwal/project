var sea;
var seaImg;

var ship;
var shipImg1;

var edge;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  edge = createEdgeSprites();
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.velocityX = 2
  sea.scale = 0.4;
  sea.x = sea.width;

  ship = createSprite(150,200,70,100);
  ship.addAnimation(shipImg1);
}

function draw() {
  background("blue");
  sea.velocityX = 2
  console.log(sea.x)
  if(sea.x < 400){
    sea.x = sea.width/2;
  }
  drawSprites();
}