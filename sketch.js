var ball;
function setup() {
  createCanvas(600,400);
  ball=createSprite(200,200,20,20);
  ball.shapeColor="yellow"

}

function draw() {
  background("black");  
  if(keyDown(UP_ARROW)){
    ball.y-=2;
  }
  if(keyDown(DOWN_ARROW)){
    ball.y+=2;
  }
  if(keyDown(LEFT_ARROW)){
    ball.x-=2;
  }
  if(keyDown(RIGHT_ARROW)){
    ball.x+=2;
  }
  drawSprites();
  
}