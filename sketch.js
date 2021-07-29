//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;

//var engine,world;

//the background
var backgroundI;
var bg;
//np or npc
var player;
var playerF1,playerF2;
var playerB1,playerB2;
var playerR1,playerR2;
var playerL1,playerL2;

//player fishing var
//var playerFishingT1;

var water1,water1Img;


function preload(){
    //the background image
    backgroundI = loadImage("images/background.png");

   //the players images facing forward
  playerF1  = loadAnimation("images/stanstill_torwards.png");
  playerF2  = loadAnimation("images/walking_torwards.png","images/torwards_player.png","images/walkings_torwards.png");

  //the player going backswards facing
  playerB1  = loadAnimation("images/backwards_manacin.png");
  playerB2  = loadAnimation("images/walking_backwards.png","images/backwards_standstill.png","images/backwards_walking.png");

  //the player is going to the right
  playerR1  = loadAnimation("images/right_manacin.png");
  playerR2  = loadAnimation("images/right_walking.png","images/right_stanstill.png","images/right_walkings.png");

  //the player is going to the left
  playerL1  = loadAnimation("images/left_manacin.png");
  playerL2  = loadAnimation("images/left_walking.png","images/left_standstill.png","images/left_walkings.png");

  //the player is fishing
  //playerFishingT1 = loadAnimation("gifs/torwards_fishingRod_1.png","gifs/torwards_FishingRod_2.png","gifs/torwards_FishingRod_3.png");


  water1Img = loadAnimation("gifs/MovingWater.gif");


}


function setup() {
  createCanvas(1000,600);
  //engine = Engine.create();
  //world = engine.world;
  //Engine.run(engine);

    

  bg = createSprite(500,325,1000,650);
  bg.addImage("it's the background for proto",backgroundI);
  bg.scale = 15;

   water1 = createSprite(500,400,400,150);
   water1.addAnimation("blahblah it's nice",water1Img);
   //water1.shapeColor = "blue"
   //water1.scale = 2;
   
    player = createSprite(400,200,20,20);
    
    Inventory = new Inventory();
    
    //facing torwards the screen animation
    player.addAnimation("facing forward standstill",playerF1);
    player.addAnimation("moving",playerF2);

    //facing the opposite of original text
    player.addAnimation("facing backwards standstill",playerB1);
    player.addAnimation("backwords moving",playerB2);

    //player facing to the right
    player.addAnimation("facing right standstill",playerR1);
    player.addAnimation("right moving",playerR2);

    //player facing to the left
    player.addAnimation("facing left standstill",playerL1);
    player.addAnimation("left moving",playerL2);

    //player animation when press key to fish
    //player.addAnimation("facing forward fishing",playerFishingT1);

    
  
}

function draw() {
  background(0);
  imageMode(CENTER);
  //Engine.update(engine);


    //water1.display();
    player.bounceOff(water1);
    
  //keyFunctions();
 
    if(keyIsDown(87)){
      //camera.position.y -=3;
      player.y -=3;
      player.changeAnimation("backwords moving",playerB2);
      
    }


  if(keyIsDown(83)){
      //camera.position.y +=3;
      player.y +=3;
      player.changeAnimation("moving",playerF2);
    }



  if(keyIsDown(68)){
      //camera.position.x +=3;
      player.x +=3;
      player.changeAnimation("right moving",playerR2);
    }


  if(keyIsDown(65)){
      //camera.position.x -=3;
      player.x -=3;
      player.changeAnimation("left moving",playerL2);
    }
        //when the space is pressed
    /*if(keyCode === 32){

      player.changeAnimation("facing forward fishing",playerFishingT1);
      }
    */     
    
      Inventory.display();
      Inventory.hide();
     
       drawSprites();



  if(keyIsDown(69)){
    Inventory.show();
    rect(displayWidth/2 - 35, 10,210,250);
    tint(128,128,128);
    rect(displayWidth/2 - 35, 50,210,250);
    }


}


/*function keyFunctions(){
  //var IDK = Math.round(1,4);
   //switch (IDK)  {
    //going torwards oposite of you going up
    //case 1: 
    upMoving();
    //break;
    //going torwards you!! going down
    //case 2: 
    downMoving();
    //break;
    //going torwards the right
    //case 3: 
    rightMoving();
    // break;
      //going torwards left
    //case 4:
    leftMoving();
    //break;
    //default: break;
   // }
}
*/





