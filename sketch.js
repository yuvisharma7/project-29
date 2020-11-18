function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  block1= new Block(330,235,30,40);
  block2= new Block(360,235,30,40);
  block3= new Block(390,235,30,40);
  block4= new Block(420,235,30,40);
  block5= new Block(450,235,30,40);
  
  block6= new Block(330,195,30,40);
  block7= new Block(330,195,30,40);
  block8= new Block(330,1955,30,40);
  
  block9= new Block(330,155,30,40);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  slingshot.display();

  ground.display();
 
  function mouseDragged(){
    Matter.Body.setPosition( {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
}