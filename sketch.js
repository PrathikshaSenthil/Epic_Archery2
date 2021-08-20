const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1,base2, base2Img, base1Img,player1,player2,playerImg,playerImg;
var bg,bgImg;
var playerAr,playerArImg,playerArr,playerArrImg,compAr,compArImg,compArr,compArrImg;

function preload(){
  
  base2Img=loadImage("base2.png");
  base1Img=loadImage("base1.png");
 playerImg=loadImage("right.png");
   player2Img=loadImage("left.png");
   playerArrImg=loadImage("Raarrow.png");
   compArrImg=loadImage("laarrow.png");
  playerArImg=loadImage("larrow.png");
  compArImg=loadImage("Rarrow.png");
  bgImg=loadImage("bg.png");
  
  
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
// itialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   base1= new PlayerBase(30,30,10);
  base2 = new ComputerBase (30,30,10);
   player1= new Player1 (30,30,100);
  player2= new Player2 (30,30,10);
  playerAr = new playerArcher (90,90);
  compAr = new computerArcher  (90,90);
  playerArr = new PlayerArrow (90,90);
  compArr = new ComputerArrow (90,90);
  angle = -PI / 4;

 
   
  

 }

function draw() {

  background(bgImg,30,30);

  Engine.update(engine);

  // Title
  fill(" #FFD700");
  textAlign("center");
  textSize(40);
  textFont("algeria");
  stroke("#033006")
   strokeWeight("6")
  text("🅔🅟🅘🅒", width / 2, 100);
   text("🅐🅡🅒🅗🅔🅡🅨🏹", width / 2+20, 140);

   //Display P.diase and computer base 
base2.display();
base1.display();
  player1.display();
   player2.display();
   playerAr.display();
   compAr.display();
   playerArr.display();
  compArr.display();


   //display Player and computerplayer
  function keyReleased(){
   if(keyCode ===32){

    arrow.shoot(playerAr.body.angle);
    }
  
  }
  

}
