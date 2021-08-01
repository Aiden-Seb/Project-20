function preload(){
  bg = loadImage("Images/iss.png")
  brush = loadAnimation("Images/brush.png")
  sleep = loadAnimation("Images/sleep.png")
  eat = loadAnimation("Images/eat1.png","Images/eat2.png")
  drink = loadAnimation("Images/drink1.png","Images/drink2.png")
  gym = loadAnimation("Images/gym1.png","Images/gym2.png","Images/gym11.png","Images/gym12.png")
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1
}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20)
  fill ("white")
  text("Instructions: ",20,35)
  textSize(15)
  text("Up arrow: brushing",20,55)
  text("Down arrow: gyming",20,70)
  text("Left arrow: eating",20,85)
  text("Right arrow: bathing",20,100)
  text("M key: moving",20,115)
  edges = createEdgeSprites()
  astronaut.bounceOff(edges)
  if(keyDown("up_arrow")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("left_arrow")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=350
    astronaut.x=150
    astronaut.velocityX=0.5
    astronaut.velocityY=0.5
   }

   if(keyDown("down_arrow")){
    astronaut.addAnimation("gym",gym)
    astronaut.changeAnimation("gyming")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
}
