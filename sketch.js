
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    tom1Img = loadAnimation("images/cat1.png");
    tom2Img = loadAnimation("images/cat2.png","images/cat3.png");
    tom4Img = loadAnimation("images/cat4.png");
    jerry1Img = loadAnimation("images/mouse1.png");
    jerry2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3Img = loadAnimation("images/mouse4.png");
  
    
}

function setup(){
    createCanvas(500,400);
    //create tom and jerry sprites here
    tom = createSprite(400,300,50,50);
    tom.addAnimation("tomSleeping",tom1Img);
    tom.scale = 0.08;

    jerry = createSprite(100,300,20,20);
    jerry.addAnimation("jerryStanding",jerry1Img);
    jerry.scale = 0.09;

}

function draw() {

    background(255);
    image(gardenImg,00,00,500,400)
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tom3Img);
        tom.x =150;
        tom.scale=0.08;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerry3Img);
        jerry.scale=0.09;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     tom.velocityX = -5;
     tom.addAnimation("tomRunnnig",tom2Img);
     tom.changeAnimation("tomRunning",tom2Img);
 }
 if(keyCode === RIGHT_ARROW){
     jerry.addAnimation("jerryTeasing",jerry2Img);
     jerry.frameDelay = 50;
     jerry.changeAnimation("jerryTeasing",jerry2Img);
 }

 

}
