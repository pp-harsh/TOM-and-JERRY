var bg, bgImg ;
var cat, catIMG ;
var mouse ;

var gameState = "PLAY";

function preload() {
  bgImg = loadImage("images/garden.png")
  catImg1= loadAnimation("images/cat1.png");
  catImg2=loadAnimation("images/cat2.png","images/cat3.png");
  catImg3= loadAnimation("images/cat4.png");
  mouseImg1=loadAnimation("images/mouse1.png");
  mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImg3=loadAnimation("images/mouse4.png");

}
function setup() {
  createCanvas(800,800);
  bg = createSprite(400,250, 50, 50);
  bg.addImage(bgImg);
  bg.scale = 1.2 ;

  cat = createSprite(600,500,1,1);
  cat.addAnimation(catImg1);
  cat.scale = 0.2 ;

  mouse = createSprite(200,500,10,10);
  mouse.addAnimation( mouseImg1);
  mouse.scale = 0.15 ;
}
 
function draw() {
  
  
  if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX= 0;
        cat.addAnimation("tomImage", catImg3);
        cat.x = 300;
        cat.scale= 0.2;
        cat.changeAnimation("tomImage");
        mouse.addAnimation("jerryImage", mouseImg3);
        mouse.scale= 0.15 ;
        mouse.changeAnimation("jerryImage");
    }  

    drawSprites();
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5; 
      cat.addAnimation("kitten", catImg2);
      cat.changeAnimation("kitten");
      
      mouse.addAnimation("mousie", mouseImg2);
      mouse.changeAnimation("mousie");
  }
}
