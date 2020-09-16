var rect1, rect2

function setup() {
  rect1 = createSprite (200,200,20,30)
  rect1.shapeColor = "green"
  rect2 = createSprite (350,100,20,30)
  rect2.shapeColor = "green"
}

function draw() {
  background(0)

  rect2.x = World.mouseX
  rect2.y = World.mouseY

  if (rect1.x - rect2.x < rect1.width/2 + rect2.width/2&& rect2.x - rect1.x < rect2.width/2 + rect1.width/2&& 
    rect1.y - rect2.y < rect1.height/2 + rect2.height/2&& rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
    
      rect1.shapeColor = "blue"
      rect2.shapeColor = "red"

  }

  else{
    rect1.shapeColor = "green"
    rect2.shapeColor = "green"
  }
  drawSprites();
}