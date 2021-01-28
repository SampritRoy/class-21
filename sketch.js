var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  squariad= createSprite(500,300,70,20);
  squardix=createSprite(600,400,80,30);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (samprit(movingRect,squardix)){
  movingRect.shapeColor="blue";
  squardix.shapeColor="yellow";
  }
   else{
    movingRect.shapeColor="violet";
    squardix.shapeColor="red"; 
   } 
  drawSprites();
}
