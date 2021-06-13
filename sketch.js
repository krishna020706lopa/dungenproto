var horrer;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;
var wall1,wall2,wall3,wall4,Wgroup;
var hero;
var ghost;
var trex,Imposter,angeryBirds,pog,car;
var trexImage,birdImage,ImposterImage,carImage;
var piano,tv;
var ob1,ob2;
var left,right,stoop;
var bigHero6;
var pianoSound;
var tvSound;
var knifeImage,carImage,enemyImage,pigImage,spaceShipImage,horrerSound;
var win,sp;

function preload(){
 horrer=loadImage("Images/Haunted house.jpg");
 trexImage=loadImage("Images/trex1.png");
 birdImage=loadImage("Images/bird.png");
 ImposterImage=loadImage("Images/Redright.png");
 carImage=loadImage("Images/car4.png");
 left=loadAnimation("Images/mLL.png","Images/mRL.png");
 right=loadAnimation("Images/mLR.png","Images/mRR.png");
 stoop=loadImage("Images/main.png");
pianoSound=loadSound("piano.wav");
tvSound=loadSound("tv.mp3");
knifeImage=loadImage("Images/knife.png");
enemyImage=loadImage("Images/car2.png");
cactusImage=loadImage("Images/obstacle1.png");
pigImage=loadImage("Images/enemy.png");
spaceShipImage=loadImage("Images/escape pod.png");
horrerSound=loadSound("Come-Play-with-Me.mp3");
win=loadImage("Images/escaped.jpg");
}
function setup() {
  createCanvas(600,600);
  wall1=createSprite(50,400,10,620);
  wall2=createSprite(300,380,8,80);
  horrerSound.play();
  sp=createSprite(1000,390,20,20);
  sp.addImage(spaceShipImage);
  wall3=createSprite(550,250,10,200);
  wall4=createSprite(220,430,10,180);
  wall5=createSprite(215,340,70,8);
  wall6=createSprite(410,530,160,10);
  wall7=createSprite(80,340,70,8);
  wall8=createSprite(300,340,70,8);
  wall9=createSprite(520,340,50,8);
  wall10=createSprite(385,340,60,8);
  wall11=createSprite(60,530,50,8);
  wall12=createSprite(490,340,120,8);
  wall13=createSprite(140,280,5,120);
  wall14=createSprite(325,475,10,120);
  wall15=createSprite(495,440,10,190);
  wall16=createSprite(313,415,35,10);
  wall17=createSprite(270,492,100,10);
  wall18=createSprite(90,105,90,10);
  wall19=createSprite(190,30,115,10);
  wall20=createSprite(190,155,110,10);
  wall21=createSprite(130,90,10,130);
  wall22=createSprite(250,132,8,50);
  wall23=createSprite(250,55,8,60);
  wall24=createSprite(305,64,110,8);
  wall25=createSprite(360,145,8,170);
  wall26=createSprite(360,300,8,90);
  wall27=createSprite(165,265,10,100);
  wall28=createSprite(80,152,60,8);
  wall29=createSprite(310,152,90,8);
  wall30=createSprite(370,142,20,8);
  wall31=createSprite(535,145,40,8);
  wall32=createSprite(80,222,70,8);
  wall33=createSprite(95,188,30,8);
  wall34=createSprite(450,102,130,8);
  wall35=createSprite(280,112,55,8);
  wall36=createSprite(135,572,110,8);
  wall37=createSprite(165,170,8,40);
  wall38=createSprite(165,340,8,18);
  wall39=createSprite(80,550,8,50);
  wall40=createSprite(190,550,8,50);
  wall41=createSprite(384,122,8,47);
  wall42=createSprite(512,122,8,47);
  wall43=createSprite(220,530,50,8);
  trex=createSprite(70,390,20,20);
  trex.addImage(trexImage);
  trex.scale=0.2;
  angeryBirds=createSprite(220,140,20,20);
  angeryBirds.addImage(birdImage);
  angeryBirds.scale=0.5;
  car=createSprite(520,320,20,20);
  car.addImage(carImage);
  car.scale=0.3;
  Imposter=createSprite(470,440,20,20);
  Imposter.addImage(ImposterImage);
  Imposter.scale=0.2;
  pog=createSprite(300,300,40,5);
  piano=createSprite(395,205,45,45);
  tv=createSprite(60,430,20,50);
  ob1=createSprite(135,430,77,50);
  ob2=createSprite(135,505,60,30);
  ob3=createSprite(530,245,45,45);
  ob4=createSprite(450,240,40,40);
  ob5=createSprite(450,140,60,20);
  ob6=createSprite(250,240,40,40);
  ob7=createSprite(190,42,100,10);
  ob8=createSprite(60,280,30,120);
  bigHero6=createSprite(200,200,10,10);
  bigHero6.addImage("new",stoop);
  bigHero6.addAnimation("old",left);
  bigHero6.addAnimation("brud",right);
  bigHero6.scale=0.05;
  knife=createSprite(1000,140,20,20);
  knife.addImage(knifeImage);
  knife.scale=0.1;
  pig=createSprite(1000,140,20,20);
  pig.addImage(pigImage);
  pig.scale=0.3;
  ball=createSprite(1000,150,10,10);
  cactus=createSprite(1000,480,20,20);
  cactus.addImage(cactusImage);
  cactus.scale=0.3;
  enemy=createSprite(1000,480,20,20);
  enemy.addImage(enemyImage);
  enemy.scale=0.3;
  escapePod=createSprite(1000,430,20,20);
  escapePod.addImage(spaceShipImage);
  escapePod.scale=0.1;
}

function draw() {
  if(gameState===PLAY){
    background(horrer); 
    console.log(score);
  if(keyIsDown(RIGHT_ARROW)){
    bigHero6.x+=5;
    bigHero6.changeAnimation("brud",right);
  }
  if(keyIsDown(LEFT_ARROW)){
    bigHero6.x=bigHero6.x-5;
    bigHero6.changeAnimation("old",left);
  }
  if(keyIsDown(DOWN_ARROW)){
    bigHero6.y+=5;
  }
  if(keyIsDown(UP_ARROW)){
    bigHero6.y=bigHero6.y-5;
  }
bigHero6.collide(wall1);
bigHero6.collide(wall2);
bigHero6.collide(wall3);
bigHero6.collide(wall4);
bigHero6.collide(wall5);
bigHero6.collide(wall6);
bigHero6.collide(wall7);
bigHero6.collide(wall8);
bigHero6.collide(wall9);
bigHero6.collide(wall10);
bigHero6.collide(wall11);
bigHero6.collide(wall12);
bigHero6.collide(wall13);
bigHero6.collide(wall14);
bigHero6.collide(wall15);
bigHero6.collide(wall16);
bigHero6.collide(wall17);
bigHero6.collide(wall18);
bigHero6.collide(wall19);
bigHero6.collide(wall20);
bigHero6.collide(wall21);
bigHero6.collide(wall22);
bigHero6.collide(wall23);
bigHero6.collide(wall24);
bigHero6.collide(wall25);
bigHero6.collide(wall26);
bigHero6.collide(wall27);
bigHero6.collide(wall28);
bigHero6.collide(wall29);
bigHero6.collide(wall30);
bigHero6.collide(wall31);
bigHero6.collide(wall32);
bigHero6.collide(wall33);
bigHero6.collide(wall34);
bigHero6.collide(wall35);
bigHero6.collide(wall36);
bigHero6.collide(wall37);
bigHero6.collide(wall38);
bigHero6.collide(wall39);
bigHero6.collide(wall40);
bigHero6.collide(wall41);
bigHero6.collide(wall42);
bigHero6.collide(ob1);
bigHero6.collide(ob2);
bigHero6.collide(ob3);
bigHero6.collide(ob4);
bigHero6.collide(ob5);
bigHero6.collide(ob6);
bigHero6.collide(ob7);
bigHero6.collide(ob8);
bigHero6.collide(Imposter);
bigHero6.collide(pog);
bigHero6.collide(angeryBirds);
bigHero6.collide(car);
bigHero6.collide(trex);
bigHero6.collide(enemy);
bigHero6.collide(cactus);
bigHero6.collide(pig);
bigHero6.collide(ball);
bigHero6.collide(knife);
bigHero6.collide(wall43);
if(bigHero6.collide(piano)&&keyDown("space")){
  pianoSound.play();
  horrerSound.pause();
}
if(bigHero6.isTouching(tv)&&keyDown("space")){
  bigHero6.collide(tv);
  tvSound.play();
  horrerSound.pause();
}

tv.visible=0;
 if(Imposter.isTouching(bigHero6)&&keyDown("space")){
   knife.x=150;
   text("The next clue is where angry leads your way",400,440);
 }
 if(angeryBirds.isTouching(bigHero6)&&keyDown("space")){
  pig.x=100;
  text("The next clue is where smell leads your way",220,140);
}
if(pog.isTouching(bigHero6)&&keyDown("space")){
  ball.x=400;
  text("The next clue is where music leads your way",300,300)
}
if(trex.isTouching(bigHero6)&&keyDown("space")){
  cactus.x=300;
  text("The next clue is where loneliness leads your way",70,390); 
}
if(car.isTouching(bigHero6)&&keyDown("space")){
  enemy.x=200;
 text("The next clue is where history leads your way",520,320);
}
if(bigHero6.isTouching(knife)&&keyDown("space")){
  score=score+1;
  knife.x=1000;
  Imposter.visible=0;
  Imposter.x=1000;
}
if(enemy.isTouching(bigHero6)&&keyDown("space")){
  score=score+1;
  enemy.x=1000;
  car.visible=0;
  car.x=1000;
}
if(cactus.isTouching(bigHero6)&&keyDown("space")){
  score=score+1;
  cactus.x=1000;
  trex.visible=0;
  trex.x=1000;
}
if(ball.isTouching(bigHero6)&&keyDown("space")){
  score=score+1;
  ball.x=1000;
  pog.visible=0;
  pog.x=1000;
}
if(pig.isTouching(bigHero6)&&keyDown("space")){
  score=score+1;
  pig.x=1000;
  angeryBirds.visible=0;
  angeryBirds.x=1000;
}
wall1.visible=0;
wall2.visible=0;
wall3.visible=0;
wall4.visible=0;
wall5.visible=0;
wall6.visible=0;
wall7.visible=0;
wall8.visible=0;
wall9.visible=0;
wall10.visible=0;
wall11.visible=0;
wall12.visible=0;
wall13.visible=0;
wall14.visible=0;
wall15.visible=0;
wall16.visible=0;
wall17.visible=0;
wall18.visible=0;
wall19.visible=0;
wall20.visible=0;
wall21.visible=0;
wall22.visible=0;
wall23.visible=0;
wall24.visible=0;
wall25.visible=0;
wall26.visible=0;
wall27.visible=0;
wall28.visible=0;
wall29.visible=0;
wall30.visible=0;
wall31.visible=0;
wall32.visible=0;
wall33.visible=0;
wall34.visible=0;
wall35.visible=0;
wall36.visible=0;
wall37.visible=0;
wall38.visible=0;
wall39.visible=0;
wall40.visible=0;
wall41.visible=0;
wall42.visible=0;
wall43.visible=0;
ob1.visible=0;
ob2.visible=0;
ob3.visible=0;
ob4.visible=0;
ob5.visible=0;
ob6.visible=0;
ob7.visible=0;
ob8.visible=0;
piano.visible=0;

 camera.position.x=0;
 camera.position.y=0;

  if(score>4){
    sp.x=300;
  }
  if(bigHero6.isTouching(sp)&&keyDown("space")){
    gameState=END;
  }
  drawSprites();
  }
  else if(gameState===END){
    background(win);
    text("ESCAPED",300,300);
    horrerSound.pause();
  }
}