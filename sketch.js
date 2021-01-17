var movingRect, fixedRect;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(800,400);

 rect1 = createSprite(250,400,30,80);
 rect2 = createSprite(450,200,40,40);
 rect3 = createSprite(300,50,20,20);
 rect4 = createSprite(100,250,40,40);
 rect1.shapeColor = "pink";
 rect2.shapeColor = "pink";
 rect3.shapeColor = "pink";
 rect4.shapeColor = "pink";
 rect1.debug = true;
 rect2.debug = true;
 rect3.debug = true;
 rect4.debug = true;
 rect3.velocityY = -5;
 rect4.velocityY = 5;
 



 
}

function draw() {
  background(0); 
   
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

 if(isTouching(rect1,rect2)) {
   rect1.shapeColor = "yellow";
   rect2.shapeColor = "yellow";
 
 }

else {
  rect1.shapeColor = "pink";
 rect2.shapeColor = "pink";
}

bounceOff(rect3,rect4);

  drawSprites();
  
}
