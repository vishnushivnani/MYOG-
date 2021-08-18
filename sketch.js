var player;var playerAttack,playerAttack2,playerAttack3,playerAttack4,playerAttack5,playerAttack6,playerRun;
var playerFly;
//const canvas = document.getElementById("canvas");
var FlyBar,FlyHealth;
var canvas;
var frame;
var FlyBarStatus = "NotFull";
var rectangle;
var Enemy;var EnemyAttack1;
var SPA = "notDone";
var SPA2 = "notDone"
var  aestriod,aestroidImage,aestriod2
var Finder = "Yes";
var earth,Rearth;
var Mangnifier
var robo,RoboImg;
var Tankdamaged,Playerdamaged;
var StartButton
var SERVE1 = 1
var SERVE2 = 1.5
var PLAY1  = 2;
var PLAY2 = 2.1;
var PLAY3 = 2.2;
var PLAY4 = 2.3;
var PLAY5 = 2.4;
var visibled = false;
var END = 3
var gameState =SERVE1;
var Games;
var rand;
var AlienRobot,IdleRobot,DeadRobot,JumpRobot,SlideRobot,JumpSword,JumpShoot,RunRobot,RunShoot,Shoot,Sword;
var C1 = 1
var Exp = 0;
var BlueFire
var startScreen
var SpaceImg,bg;
var stage1Button_Icon
var UpArrow,DownArrow,LeftArrow,RightArrow;
var tankState;
var playerDown;
var map,MapImage;
var Stage1_Img
var stage2Button_Icon,stage3Button_Icon,stage4Button_Icon,stage5Button_Icon,stages;
var stage2_Img1,stage2_Img2,stage3_Img1,stage3_Img2,stage4_Img1,stage4_Img2,stage5_Img1,stage5_Img2;

var LockedButton_Img,PassedButton_Img,UnlockedButton_Img;
var StageScreen,StageScreen_Img;
var StageButton1,StageButton2,StageButton3,StageButton4,StageButton5;

var CancelButton_Icon,CancelButton_Img;
var CancelButton;

var Enemy_img,Tank_Img,NinjaRobo_Img,YellowRobo_Img,BloodMan_Img;

var playerState,Throw;

var Stage1Screen;var Ground
var FireClawThrow_Img;

var tank,FireInAir_Img1,Bullet_Img,Bullet_Img2,TankFire,destroy_Img,tanks;

var Bullet,Bullet_Img2;
var RoboAlien
var StageButton2
var b = 1

var Stage2Screen,Stage2_Img;

// thesewill be the health for tank and player 
let tankHealth = 150,playerHealth = 200;
let zombieMHealth = 125,zombieWHealth = 130
//let playerHealth2 = playerHealth+25

var ZombieM_Img,ZombieM_Attack,ZombieM_Dead,ZombieM_Walk,ZombieW_Img,ZombieW_Attack,ZombieW_Dead,ZombieW_Walk;

var WinScreen,HomeButton,WinScreen_Img;

var WinGreetings,WinGreetings_Img,WinGreetings_Img2,WinGreetings_Img3,Stars_Img;


var attackButton1,attackButton2,

playerInfected;
var Stage3Screen_Img;
var Magnifier_img;
var ZombieM,zombieM,launchTime,zombieW;
var frame;
var ButtonState = 1

var PlayerhealthBarWidth = 200;
var PlayerhealthBarHeight = 30;
var healthBar;
var TankhealthBar
var tankHealthA = 150
var playerHealthA = 200
var ZombiehealthBar1,ZombiehealthBar2;
var Zombiedamaged,zombieMHealthA;
var Robohealth;
var RobohealthA;
var Robohealthbar,
Robodamaged;
var Bullet2;
var a=1;
var A3chances = 1;
var B1,B2,B3;
var attackButton3; 
var RoboState = "Idle"
var NinjaRobo,Ninjadamaged, NinjaRobot,NinjaRobo_Attack,NinjaRobo_Glide,NinjaRobo_Idle,NinjaRobo_Climb,NinjaRobo_JumpThrow,NinjaRobo_Jump,NinjaRobo_Throw,NinjaRobo_Dead,NinjaRobo_Jumpattack,NinjaHealthBar,NinjaHealth,NinjaHealthA;
var Stage4Screen_Img;
var Kunai,Kunai_img;
var NinjasState  = 'Idle';
var SpChances = "left";
var EnemyState = 1;
var Stage5Screen_img;
var Magnifier;
var BloodBullet_img,BloodBullet,BloodBullet2,BloodBullet3,BloodMan,BloodManHealthBar,BloodMan1,RunningClaw,Scratch,Gun,BloodAxe,RageShot,BloodManDamaged,BloodManHealth,BloodManHealthA;
function preload(){

  LockedButton_Img    = loadImage("Sprites/Images/Buttons/LockedButton.png");
  PassedButton_Img    = loadImage("Sprites/Images/Buttons/PassedButton.png");
  UnlockedButton_Img  = loadImage("Sprites/Images/Buttons/UnlockedButton.png");
  CancelButton_Img    = loadImage("Sprites/Images/Buttons/CancelButton.png");

  MapImage = loadImage("Map_img.jpg");


  FireClawThrow_Img = loadImage("Sprites/Images/CharacterFiles/FireClaw/FireClaw(Throw).png")

   playerAttack = loadAnimation("Sprites/Images/CharacterFiles/FireClaw/FireClaw(1).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(2).png"
  ,"Sprites/Images/CharacterFiles/FireClaw/FireClaw(3).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(4).png"
  ,"Sprites/Images/CharacterFiles/FireClaw/FireClaw(5).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(6).png",
  "Sprites/Images/CharacterFiles/FireClaw/FireClaw(6).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png",
 "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png",
  "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png", "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png");

  playerAttack2 = loadAnimation("Sprites/Images/CharacterFiles/Fly/Fly(1).png","Sprites/Images/CharacterFiles/Fly/Fly(2).png",
  "Sprites/Images/CharacterFiles/Fly/Fly(3).png","Sprites/Images/CharacterFiles/Fly/Fly(4).png",
  "Sprites/Images/CharacterFiles/Fly/Fly(5).png","Sprites/Images/CharacterFiles/Fly/Fly(6).png", 
  "Sprites/Images/CharacterFiles/Fly/Fly(7).png");
  playerFly = loadAnimation("Sprites/Images/CharacterFiles/Fly/Fly(1).png","Sprites/Images/CharacterFiles/Fly/Fly(2).png");
playerDown = loadAnimation( "Sprites/Images/CharacterFiles/Fly/Fly(3).png","Sprites/Images/CharacterFiles/Fly/Fly(4).png")
  playerAttack3  =loadAnimation("Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(1).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(2).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(2).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(3).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(4).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(5).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(6).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(7).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(8).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(9).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(10).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(11).png");

  playerAttack4  = loadAnimation("Sprites/Images/CharacterFiles/RollSword/RollSword(1).png","Sprites/Images/CharacterFiles/RollSword/RollSword(1).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(1).png","Sprites/Images/CharacterFiles/RollSword/RollSword(2).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(3).png","Sprites/Images/CharacterFiles/RollSword/RollSword(4).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(5).png","Sprites/Images/CharacterFiles/RollSword/RollSword(6).png");

  playerAttack5  = loadAnimation("Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(3).png","Sprites/Images/CharacterFiles/Walk/Walk(4).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(1).png","Sprites/Images/CharacterFiles/Roll/Roll(2).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(3).png","Sprites/Images/CharacterFiles/Roll/Roll(4).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(5).png","Sprites/Images/CharacterFiles/Roll/Roll(6).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(7).png","Sprites/Images/CharacterFiles/Roll/Roll(8).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(5).png","Sprites/Images/CharacterFiles/Roll/Roll(6).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(7).png","Sprites/Images/CharacterFiles/Roll/Roll(8).png", 
  "Sprites/Images/CharacterFiles/Roll/Roll(5).png","Sprites/Images/CharacterFiles/Roll/Roll(6).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(7).png","Sprites/Images/CharacterFiles/Roll/Roll(8).png", 
  "Sprites/Images/CharacterFiles/Roll/Roll(5).png","Sprites/Images/CharacterFiles/Roll/Roll(6).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(7).png","Sprites/Images/CharacterFiles/Roll/Roll(8).png");

  playerAttack6 = loadAnimation( "Sprites/Images/CharacterFiles/Walk/Walk(3).png","Sprites/Images/CharacterFiles/Walk/Walk(4).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Attack 1/Fire(1).png","Sprites/Images/CharacterFiles/Attack 1/Fire(1).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(2).png","Sprites/Images/CharacterFiles/Attack 1/Fire(2).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(3).png","Sprites/Images/CharacterFiles/Attack 1/Fire(3).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(4).png","Sprites/Images/CharacterFiles/Attack 1/Fire(4).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(5).png", "Sprites/Images/CharacterFiles/Attack 1/Fire(5).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(6).png","Sprites/Images/CharacterFiles/Attack 1/Fire(6).png");

  playerRun = loadAnimation("Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(3).png","Sprites/Images/CharacterFiles/Walk/Walk(4).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png"
  )

  playerInfected = loadAnimation("Sprites/Images/CharacterFiles/Infected/Infected(1).png","Sprites/Images/CharacterFiles/Infected/Infected(1).png",
  "Sprites/Images/CharacterFiles/Infected/Infected(1).png","Sprites/Images/CharacterFiles/Infected/Infected(2).png",
  "Sprites/Images/CharacterFiles/Infected/Infected(2).png","Sprites/Images/CharacterFiles/Infected/Infected(2).png",
  "Sprites/Images/CharacterFiles/Infected/Infected(3).png","Sprites/Images/CharacterFiles/Infected/Infected(3).png")

  EnemyAttack1 = loadAnimation("Sprites/Images/EnemySprites/BloodAxe/BloodAxe(1).png","Sprites/Images/EnemySprites/BloodAxe/BloodAxe(2).png",
                               "Sprites/Images/EnemySprites/BloodAxe/BloodAxe(3).png","Sprites/Images/EnemySprites/BloodAxe/BloodAxe(4).png",
                               "Sprites/Images/EnemySprites/BloodAxe/BloodAxe(5).png");

  EnemyAttack2 =  loadAnimation("Sprites/Images/EnemySprites/Scratch/RunningClaw(1).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(2).png",
  "Sprites/Images/EnemySprites/Scratch/RunningClaw(3).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(4).png",
  "Sprites/Images/EnemySprites/Scratch/RunningClaw(5).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(6).png")    
  
  EnemyAttack3   = loadAnimation("Sprites/Images/EnemySprites/SuperScratch/RunningClaw(1).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(2).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(3).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(4).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(5).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(6).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(7).png")

  DeathShot = loadAnimation("Sprites/Images/EnemySprites/RageShot/RageShot(1).png","Sprites/Images/EnemySprites/RageShot/RageShot(2).png",
  "Sprites/Images/EnemySprites/RageShot/RageShot(3).png")

  Death = loadAnimation("Sprites/Images/EnemySprites/Death/Death.png")
                               
  aestroidImage = loadImage("Asteriod.png")

  RoboImg = loadImage("R2.png");

  Rearth = loadAnimation("Sprites/Images/EarthFiles/E(1).png","Sprites/Images/EarthFiles/E(1).png",
  "Sprites/Images/EarthFiles/E(2).png","Sprites/Images/EarthFiles/E(2).png",
  "Sprites/Images/EarthFiles/E(3).png","Sprites/Images/EarthFiles/E(3).png",
  "Sprites/Images/EarthFiles/E(4).png"
  ,"Sprites/Images/EarthFiles/E(5).png","Sprites/Images/EarthFiles/E(6).png",
  "Sprites/Images/EarthFiles/E(7).png","Sprites/Images/EarthFiles/E(8).png",
  "Sprites/Images/EarthFiles/E(9).png","Sprites/Images/EarthFiles/E(10).png")

  SpaceImg = loadImage("Space.jpg");

  //stage1_Button_Icon = loadImage("Stage1.png")

 Magnifier_img = loadImage("finder.png")
  
  StageScreen_Img = loadImage("StageScreen.jpg");

  Tank_Img = loadAnimation("Sprites/Images/TankSprites/Idle/Idle(2).png");

  Stage1_Img = loadImage("Stage1-Battleground.jpg")

  Stage3Screen_Img = loadAnimation("Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(1).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(2).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(3).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(4).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(5).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(6).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(7).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(8).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(9).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(10).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(11).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(12).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(13).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(14).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(15).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(16).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(17).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(18).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(19).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(20).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(21).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(22).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(23).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(24).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(25).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(26).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(27).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(28).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(29).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(30).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(31).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(32).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(33).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(34).png",
  "Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(35).png","Sprites/Images/Screen_Imgs/Screen3/Bg/Bg3(36).png",
  )
 

  FireInAir_Img1= loadAnimation("Sprites/Images/TankSprites/FireInAir/FireInAir(1).png","Sprites/Images/TankSprites/FireInAir/FireInAir(2).png",
                                "Sprites/Images/TankSprites/FireInAir/FireInAir(3).png","Sprites/Images/TankSprites/FireInAir/FireInAir(4).png");
  Bullet_Img = loadImage("Sprites/Images/TankSprites/Fire/Bullet_Img.png")
  Bullet_Img2 = loadImage("Sprites/Images/TankSprites/FireInAir/bullet.png");
  TankFire  = loadAnimation("Sprites/Images/TankSprites/Fire/Fire(1).png","Sprites/Images/TankSprites/Fire/Fire(2).png"
  ,"Sprites/Images/TankSprites/Fire/Fire(2).png","Sprites/Images/TankSprites/Fire/Fire(2).png"
  ,"Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(3).png",
  "Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(4).png");
  destroy_Img = loadAnimation("Sprites/Images/TankSprites/Destroyed/Damaged(1).png","Sprites/Images/TankSprites/Destroyed/Damaged(2).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(3).png","Sprites/Images/TankSprites/Destroyed/Damaged(4).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(5).png","Sprites/Images/TankSprites/Destroyed/Damaged(6).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(7).png","Sprites/Images/TankSprites/Destroyed/Damaged(8).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(9).png","Sprites/Images/TankSprites/Destroyed/Damaged(10).png",)

  Idle = loadAnimation("Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(1).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(2).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png");

  ZombieM_Img = loadAnimation("Sprites/Images/zombiefiles/png/male/Idle/Idle (1).png","Sprites/Images/zombiefiles/png/male/Idle/Idle (2).png",
  "Sprites/Images/zombiefiles/png/male/Idle/Idle (3).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (4).png",
  "Sprites/Images/zombiefiles/png/male/Idle/Idle (5).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (6).png"
  , "Sprites/Images/zombiefiles/png/male/Idle/Idle (7).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (8).png"
  , "Sprites/Images/zombiefiles/png/male/Idle/Idle (9).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (10).png");

  ZombieM_Attack = loadAnimation("Sprites/Images/zombiefiles/png/male/walk/Walk (1).png","Sprites/Images/zombiefiles/png/male/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (3).png","Sprites/Images/zombiefiles/png/male/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (5).png","Sprites/Images/zombiefiles/png/male/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (7).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (1).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (2).png",
  "Sprites/Images/zombiefiles/png/male/Attack/Attack (3).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (4).png",
  "Sprites/Images/zombiefiles/png/male/Attack/Attack (5).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (6).png",
  "Sprites/Images/zombiefiles/png/male/Attack/Attack (7).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (8).png")


  ZombieM_Dead = loadAnimation("Sprites/Images/zombiefiles/png/male/Dead/Dead (1).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (2).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (3).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (4).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (5).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (6).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (7).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (8).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (9).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (10).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (11).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (12).png",)
 // WinGreetings_Img = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/WinGreetings.png");
WinScreen_Img = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/WinScreen.jpg")
Stars_Img = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/Star.png");
WinGreetings_Img2 = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/victoryGreetings_img1.png")
WinGreetings_Img3 = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/victoryGreetings_img6.png")
  ZombieM_Walk = loadAnimation("Sprites/Images/zombiefiles/png/male/walk/Walk (1).png","Sprites/Images/zombiefiles/png/male/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (3).png","Sprites/Images/zombiefiles/png/male/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (5).png","Sprites/Images/zombiefiles/png/male/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (7).png","Sprites/Images/zombiefiles/png/male/walk/Walk (8).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (9).png","Sprites/Images/zombiefiles/png/male/walk/Walk (10).png",)
  
  ZombieW_Img = loadAnimation("Sprites/Images/zombiefiles/png/female/Idle/Idle (1).png","Sprites/Images/zombiefiles/png/female/Idle/Idle (2).png",
    "Sprites/Images/zombiefiles/png/female/Idle/Idle (3).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (4).png",
    "Sprites/Images/zombiefiles/png/female/Idle/Idle (5).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (6).png"
  , "Sprites/Images/zombiefiles/png/female/Idle/Idle (7).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (8).png"
  , "Sprites/Images/zombiefiles/png/female/Idle/Idle (9).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (10).png");

  ZombieW_Attack = loadAnimation("Sprites/Images/zombiefiles/png/female/walk/Walk (1).png","Sprites/Images/zombiefiles/png/female/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (3).png","Sprites/Images/zombiefiles/png/female/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (5).png","Sprites/Images/zombiefiles/png/female/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (7).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (1).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (2).png",
  "Sprites/Images/zombiefiles/png/female/Attack/Attack (3).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (4).png",
  "Sprites/Images/zombiefiles/png/female/Attack/Attack (5).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (6).png",
  "Sprites/Images/zombiefiles/png/female/Attack/Attack (7).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (8).png")


  ZombieW_Dead = loadAnimation("Sprites/Images/zombiefiles/png/female/Dead/Dead (1).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (2).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (3).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (4).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (5).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (6).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (7).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (8).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (9).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (10).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (11).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (12).png",)
 

  ZombieW_Walk = loadAnimation("Sprites/Images/zombiefiles/png/female/walk/Walk (1).png","Sprites/Images/zombiefiles/png/female/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (3).png","Sprites/Images/zombiefiles/png/female/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (5).png","Sprites/Images/zombiefiles/png/female/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (7).png","Sprites/Images/zombiefiles/png/female/walk/Walk (8).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (9).png","Sprites/Images/zombiefiles/png/female/walk/Walk (10).png",)

  Stage2_Img = loadImage("Stage2-Battleground.jpg")

  IdleRobot = loadAnimation("Sprites/Images/robotfree/png/Idle (1).png","Sprites/Images/robotfree/png/Idle (2).png",
  "Sprites/Images/robotfree/png/Idle (3).png","Sprites/Images/robotfree/png/Idle (4).png",
  "Sprites/Images/robotfree/png/Idle (5).png","Sprites/Images/robotfree/png/Idle (6).png",
  "Sprites/Images/robotfree/png/Idle (7).png","Sprites/Images/robotfree/png/Idle (8).png",
  "Sprites/Images/robotfree/png/Idle (9).png","Sprites/Images/robotfree/png/Idle (10).png")

  RunRobot = loadAnimation("Sprites/Images/robotfree/png/Run (1).png","Sprites/Images/robotfree/png/Run (2).png",
  "Sprites/Images/robotfree/png/Run (3).png","Sprites/Images/robotfree/png/Run (4).png",
  "Sprites/Images/robotfree/png/Run (5).png","Sprites/Images/robotfree/png/Run (6).png",
  "Sprites/Images/robotfree/png/Run (7).png","Sprites/Images/robotfree/png/Run (8).png");


  DeadRobot = loadAnimation("Sprites/Images/robotfree/png/Dead (1).png","Sprites/Images/robotfree/png/Dead (2).png",
  "Sprites/Images/robotfree/png/Dead (3).png","Sprites/Images/robotfree/png/Dead (4).png",
  "Sprites/Images/robotfree/png/Dead (5).png","Sprites/Images/robotfree/png/Dead (6).png",
  "Sprites/Images/robotfree/png/Dead (7).png","Sprites/Images/robotfree/png/Dead (8).png",
  "Sprites/Images/robotfree/png/Dead (9).png","Sprites/Images/robotfree/png/Dead (10).png")

  JumpRobot = loadAnimation("Sprites/Images/robotfree/png/Jump (1).png","Sprites/Images/robotfree/png/Jump (2).png",
  "Sprites/Images/robotfree/png/Jump (3).png","Sprites/Images/robotfree/png/Jump (4).png",
  "Sprites/Images/robotfree/png/Jump (5).png","Sprites/Images/robotfree/png/Jump (6).png",
  "Sprites/Images/robotfree/png/Jump (7).png","Sprites/Images/robotfree/png/Jump (8).png",
  "Sprites/Images/robotfree/png/Jump (9).png","Sprites/Images/robotfree/png/Jump (10).png");

  JumpShoot = loadAnimation("Sprites/Images/robotfree/png/JumpShoot (1).png","Sprites/Images/robotfree/png/JumpShoot (2).png",
  "Sprites/Images/robotfree/png/JumpShoot (3).png","Sprites/Images/robotfree/png/JumpShoot (4).png",
  "Sprites/Images/robotfree/png/JumpShoot (5).png");

  Shoot = loadAnimation("Sprites/Images/robotfree/png/Shoot (1).png","Sprites/Images/robotfree/png/Shoot (2).png",
  "Sprites/Images/robotfree/png/Shoot (3).png","Sprites/Images/robotfree/png/Shoot (4).png")

  RunShoot = loadAnimation("Sprites/Images/robotfree/png/RunShoot (1).png","Sprites/Images/robotfree/png/RunShoot (2).png",
  "Sprites/Images/robotfree/png/RunShoot (3).png","Sprites/Images/robotfree/png/RunShoot (4).png",
  "Sprites/Images/robotfree/png/RunShoot (5).png","Sprites/Images/robotfree/png/RunShoot (6).png",
  "Sprites/Images/robotfree/png/RunShoot (7).png","Sprites/Images/robotfree/png/RunShoot (8).png",
  "Sprites/Images/robotfree/png/RunShoot (9).png");

  Sword = loadAnimation("Sprites/Images/robotfree/png/Melee (1).png","Sprites/Images/robotfree/png/Melee (2).png",
  "Sprites/Images/robotfree/png/Melee (3).png","Sprites/Images/robotfree/png/Melee (4).png",
  "Sprites/Images/robotfree/png/Melee (5).png","Sprites/Images/robotfree/png/Melee (6).png",
  "Sprites/Images/robotfree/png/Melee (7).png","Sprites/Images/robotfree/png/Melee (8).png");

  JumpSword = loadAnimation("Sprites/Images/robotfree/png/JumpMelee (1).png","Sprites/Images/robotfree/png/JumpMelee (2).png",
  "Sprites/Images/robotfree/png/JumpMelee (3).png","Sprites/Images/robotfree/png/JumpMelee (4).png",
  "Sprites/Images/robotfree/png/JumpMelee (5).png","Sprites/Images/robotfree/png/JumpMelee (6).png",
  "Sprites/Images/robotfree/png/JumpMelee (7).png","Sprites/Images/robotfree/png/JumpMelee (8).png",)

  SlideRobot = loadAnimation("Sprites/Images/robotfree/png/Slide (1).png","Sprites/Images/robotfree/png/Slide (2).png",
  "Sprites/Images/robotfree/png/Slide (3).png","Sprites/Images/robotfree/png/Slide (4).png",
  "Sprites/Images/robotfree/png/Slide (5).png","Sprites/Images/robotfree/png/Slide (6).png",
  "Sprites/Images/robotfree/png/Slide (7).png","Sprites/Images/robotfree/png/Slide (8).png",
  "Sprites/Images/robotfree/png/Slide (9).png","Sprites/Images/robotfree/png/Slide (10).png");

  NinjaRobo_Attack = loadAnimation("Sprites/Images/ninjaadventurenew/png/Attack__000.png","Sprites/Images/ninjaadventurenew/png/Attack__001.png",
  "Sprites/Images/ninjaadventurenew/png/Attack__002.png","Sprites/Images/ninjaadventurenew/png/Attack__003.png",
  "Sprites/Images/ninjaadventurenew/png/Attack__004.png","Sprites/Images/ninjaadventurenew/png/Attack__005.png",
  "Sprites/Images/ninjaadventurenew/png/Attack__006.png","Sprites/Images/ninjaadventurenew/png/Attack__007.png",
  "Sprites/Images/ninjaadventurenew/png/Attack__008.png","Sprites/Images/ninjaadventurenew/png/Attack__009.png");

  NinjaRobo_Climb = loadAnimation("Sprites/Images/ninjaadventurenew/png/Climb_000.png","Sprites/Images/ninjaadventurenew/png/Climb_001.png",
  "Sprites/Images/ninjaadventurenew/png/Climb_002.png","Sprites/Images/ninjaadventurenew/png/Climb_003.png"
 ,"Sprites/Images/ninjaadventurenew/png/Climb_004.png","Sprites/Images/ninjaadventurenew/png/Climb_005.png"
 ,"Sprites/Images/ninjaadventurenew/png/Climb_006.png","Sprites/Images/ninjaadventurenew/png/Climb_007.png",
  "Sprites/Images/ninjaadventurenew/png/Climb_008.png","Sprites/Images/ninjaadventurenew/png/Climb_009.png")

  NinjaRobo_Glide = loadAnimation("Sprites/Images/ninjaadventurenew/png/Glide_000.png","Sprites/Images/ninjaadventurenew/png/Glide_001.png",
  "Sprites/Images/ninjaadventurenew/png/Glide_002.png","Sprites/Images/ninjaadventurenew/png/Glide_003.png"
 ,"Sprites/Images/ninjaadventurenew/png/Glide_004.png","Sprites/Images/ninjaadventurenew/png/Glide_005.png"
 ,"Sprites/Images/ninjaadventurenew/png/Glide_006.png","Sprites/Images/ninjaadventurenew/png/Glide_007.png",
  "Sprites/Images/ninjaadventurenew/png/Glide_008.png","Sprites/Images/ninjaadventurenew/png/Glide_009.png")

  NinjaRobo_Idle = loadAnimation("Sprites/Images/ninjaadventurenew/png/Idle__000.png","Sprites/Images/ninjaadventurenew/png/Idle__001.png",
  "Sprites/Images/ninjaadventurenew/png/Idle__002.png","Sprites/Images/ninjaadventurenew/png/Idle__003.png"
 ,"Sprites/Images/ninjaadventurenew/png/Idle__004.png","Sprites/Images/ninjaadventurenew/png/Idle__005.png"
 ,"Sprites/Images/ninjaadventurenew/png/Idle__006.png","Sprites/Images/ninjaadventurenew/png/Idle__007.png",
  "Sprites/Images/ninjaadventurenew/png/Idle__008.png","Sprites/Images/ninjaadventurenew/png/Idle__009.png")

   NinjaRobo_Jump = loadAnimation("Sprites/Images/ninjaadventurenew/png/Jump__000.png","Sprites/Images/ninjaadventurenew/png/Jump__001.png",
   "Sprites/Images/ninjaadventurenew/png/Jump__002.png","Sprites/Images/ninjaadventurenew/png/Jump__003.png"
  ,"Sprites/Images/ninjaadventurenew/png/Jump__004.png","Sprites/Images/ninjaadventurenew/png/Jump__005.png"
  ,"Sprites/Images/ninjaadventurenew/png/Jump__006.png","Sprites/Images/ninjaadventurenew/png/Jump__007.png",
   "Sprites/Images/ninjaadventurenew/png/Jump__008.png","Sprites/Images/ninjaadventurenew/png/Jump__009.png");

   NinjaRobo_Throw = loadAnimation("Sprites/Images/ninjaadventurenew/png/Throw__000.png","Sprites/Images/ninjaadventurenew/png/Throw__001.png",
   "Sprites/Images/ninjaadventurenew/png/Throw__002.png","Sprites/Images/ninjaadventurenew/png/Throw__003.png"
  ,"Sprites/Images/ninjaadventurenew/png/Throw__004.png","Sprites/Images/ninjaadventurenew/png/Throw__005.png"
  ,"Sprites/Images/ninjaadventurenew/png/Throw__006.png","Sprites/Images/ninjaadventurenew/png/Throw__007.png",
   "Sprites/Images/ninjaadventurenew/png/Throw__008.png","Sprites/Images/ninjaadventurenew/png/Throw__009.png")

   NinjaRobo_Jumpattack = loadAnimation("Sprites/Images/ninjaadventurenew/png/Jump_Attack__000.png","Sprites/Images/ninjaadventurenew/png/Jump_Attack__001.png",
   "Sprites/Images/ninjaadventurenew/png/Jump_Attack__002.png","Sprites/Images/ninjaadventurenew/png/Jump_Attack__003.png"
  ,"Sprites/Images/ninjaadventurenew/png/Jump_Attack__004.png","Sprites/Images/ninjaadventurenew/png/Jump_Attack__005.png"
  ,"Sprites/Images/ninjaadventurenew/png/Jump_Attack__006.png","Sprites/Images/ninjaadventurenew/png/Jump_Attack__007.png",
   "Sprites/Images/ninjaadventurenew/png/Jump_Attack__008.png","Sprites/Images/ninjaadventurenew/png/Jump_Attack__009.png")
 
  NinjaRobo_JumpThrow = loadAnimation("Sprites/Images/ninjaadventurenew/png/Jump_Throw__000.png","Sprites/Images/ninjaadventurenew/png/Jump_Throw__001.png",
  "Sprites/Images/ninjaadventurenew/png/Jump_Throw__002.png","Sprites/Images/ninjaadventurenew/png/Jump_Throw__003.png"
 ,"Sprites/Images/ninjaadventurenew/png/Jump_Throw__004.png","Sprites/Images/ninjaadventurenew/png/Jump_Throw__005.png"
 ,"Sprites/Images/ninjaadventurenew/png/Jump_Throw__006.png","Sprites/Images/ninjaadventurenew/png/Jump_Throw__007.png",
  "Sprites/Images/ninjaadventurenew/png/Jump_Throw__008.png","Sprites/Images/ninjaadventurenew/png/Jump_Throw__009.png")

   Bullet_Img2 = loadImage("Sprites/Images/robotfree/png/Objects/Bullet_000.png")
   Stage4Screen_Img = loadImage("Stage4-Battleground(1).jpg");
   Kunai_img = loadImage("Sprites/Images/ninjaadventurenew/png/Kunai.png")
   Stage5Screen_img = loadImage("Stage5-Battleground.jpg")

  BloodAxe = loadAnimation("Sprites/Images/EnemySprites/BloodAxe/BloodAxe(1).png","Sprites/Images/EnemySprites/BloodAxe/BloodAxe(2).png",
                        "Sprites/Images/EnemySprites/BloodAxe/BloodAxe(3).png","Sprites/Images/EnemySprites/BloodAxe/BloodAxe(4).png"
                       ,"Sprites/Images/EnemySprites/BloodAxe/BloodAxe(5).png");

   Gun   = loadAnimation("Sprites/Images/EnemySprites/SuperScratch/RunningClaw(1).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(2).png",
   "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(3).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(4).png",
   "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(5).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(6).png"
   ,"Sprites/Images/EnemySprites/SuperScratch/RunningClaw(7).png");

   RageShot = loadAnimation("Sprites/Images/EnemySprites/RageShot/RageShot(1).png","Sprites/Images/EnemySprites/RageShot/RageShot(1).png","Sprites/Images/EnemySprites/RageShot/RageShot(1).png"
   ,"Sprites/Images/EnemySprites/RageShot/RageShot(2).png","Sprites/Images/EnemySprites/RageShot/RageShot(2).png","Sprites/Images/EnemySprites/RageShot/RageShot(2).png",
   "Sprites/Images/EnemySprites/RageShot/RageShot(3).png","Sprites/Images/EnemySprites/RageShot/RageShot(3).png","Sprites/Images/EnemySprites/RageShot/RageShot(2).png",
   "Sprites/Images/EnemySprites/RageShot/RageShot(3).png","Sprites/Images/EnemySprites/RageShot/RageShot(2).png","Sprites/Images/EnemySprites/RageShot/RageShot(3).png")
 
   RunningClaw = loadAnimation("Sprites/Images/EnemySprites/Scratch/RunningClaw(1).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(1).png",
   "Sprites/Images/EnemySprites/Scratch/RunningClaw(1).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(2).png",
   "Sprites/Images/EnemySprites/Scratch/RunningClaw(2).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(2).png",
   "Sprites/Images/EnemySprites/Scratch/RunningClaw(3).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(3).png",
   "Sprites/Images/EnemySprites/Scratch/RunningClaw(3).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(4).png",
   "Sprites/Images/EnemySprites/Scratch/RunningClaw(4).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(4).png",
   "Sprites/Images/EnemySprites/Scratch/RunningClaw(5).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(5).png",
   "Sprites/Images/EnemySprites/Scratch/RunningClaw(5).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(6).png",
   "Sprites/Images/EnemySprites/Scratch/RunningClaw(6).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(6).png",)
  // Stage3Screen_Img = loadImage("https://www.paulwheeler.us/files/EQ1QT.gif")
   BloodBullet_img = loadImage("Sprites/Images/EnemySprites/SuperScratch/BloodBullet.png")
   BloodMan_Img = loadAnimation("Sprites/Images/EnemySprites/SuperScratch/RunningClaw(1).png")
} 



function setup(){
  createCanvas(displayWidth,displayHeight);
  
  

 
 Games = new Game();

  

 
 if(gameState ==="Interface"){
   //Interfaced.display();
   //player.display();
   Games.serve();
 }
 if(gameState === "ShowMap"){
   Games.showMapandStory();
   
 }
 
 if(gameState === PLAY1){
   
  

 
 }
 if(gameState === "Stage1"){
  
   Games.winS1();
  
  

 }
 
  
 

 if(gameState === SERVE1){
  Games.serve()
// Games.stage2(); 
 gameState = "1"

}
//healthBar.display();
//frame() 

}

function draw(){
 
//Stage3Screen_Img.hide()
background("white");
  //console.log(ButtonState)
 //image(Stage4Screen_Img,50,50,500,500)
  if(gameState === SERVE2){
    Games.showMapandStory();
    gameState = "2"
    }
   /* if(gameState===PLAY1||gameState === PLAY2||gameState === PLAY3||gameState === PLAY4||gameState === PLAY5){
      UpArrow = createSprite(150,height/2-200,10,10)
      DownArrow = createSprite(150,height/2-300,11,10)
      LeftArrow = createSprite(100,height/2-100,10,10)
      RightArrow = createSprite(200,height/2-100,10,10)
    }
*/
    if(gameState === PLAY1){
      Games.stage1();
      tankHealth = 150
      playerHealth = 200
      FlyHealth = 200
      healthBar = new HealthBar(150, height/2-300, playerHealth, PlayerhealthBarHeight, playerHealth, "green");
      TankhealthBar = new HealthBar(displayWidth/2+300, height/2-300,tankHealth,30,tankHealth,"red");
      FlyBar = new HealthBar(150,height/2-250,FlyHealth,30,FlyHealth,"blue")
     // frame();
        UpArrow = createButton('up')
        UpArrow.position(150,height/2-200)
      DownArrow = createButton("down")
      DownArrow.position(150,height/2+200)
      LeftArrow = createButton('left')
      LeftArrow.position(100,height/2+100)
     RightArrow = createButton('right')
     RightArrow.position(200,height/2+100)
      gameState = "3"
     }
     if(gameState === PLAY2){
       Games.stage2();
       playerHealth = 220
       zombieMHealth = 125
       zombieMHealthA = 125
       FlyHealth = 200
       ZombiehealthBar1 = new HealthBar(displayWidth/2+300, height/2-300,zombieMHealth,30,zombieMHealth,"red");
       ZombiehealthBar2 =  new HealthBar(displayWidth/2+300, height/2-200,zombieWHealth,30,zombieWHealth,"red");
       FlyBar = new HealthBar(150,height/2-250,FlyHealth,30,FlyHealth,"blue")
     UpArrow = createButton('up')
       UpArrow.position(150,height/2-200)
     DownArrow = createButton("down")
     DownArrow.position(150,height/2+200)
     LeftArrow = createButton('left')
     LeftArrow.position(100,height/2+100)
    RightArrow = createButton('right')
    RightArrow.position(200,height/2+100)
       healthBar = new HealthBar(150, height/2-300, playerHealth, PlayerhealthBarHeight, playerHealth, "green");
       gameState = "stage2"

     }

     if(gameState === PLAY3){
       Games.stage3();
       playerHealth  = 235
       playerHealthA = 235
       Robohealth = 200
       FlyHealth = 200
       RobohealthA = 200
       FlyBar = new HealthBar(150,height/2-250,FlyHealth,30,FlyHealth,"blue")
      UpArrow = createButton('up')
        UpArrow.position(150,height/2-200)
      DownArrow = createButton("down")
      DownArrow.position(150,height/2+200)
      LeftArrow = createButton('left')
      LeftArrow.position(100,height/2+100)
     RightArrow = createButton('right')
     RightArrow.position(200,height/2+100)
       healthBar = new HealthBar(150, height/2-300, playerHealth, PlayerhealthBarHeight, playerHealth, "green");
       Robohealthbar = new HealthBar(displayWidth/2+300, height/2-300,Robohealth,30,Robohealth,"red");
       gameState = "Stage3"
     }
     if(gameState === PLAY4){
       Games.stage4();
       playerHealth = 250;
       playerHealthA = 250;
       A3chances = 2
       FlyHealth = 200
       FlyBar = new HealthBar(150,height/2-250,FlyHealth,30,FlyHealth,"blue")
       UpArrow = createButton('up')
      UpArrow.position(150,height/2-200)
     DownArrow = createButton("down")
     DownArrow.position(150,height/2+200)
     LeftArrow = createButton('left')
     LeftArrow.position(100,height/2+100)
    RightArrow = createButton('right')
    RightArrow.position(200,height/2+100)
       NinjaHealth = 225;
       NinjaHealthA = 225;
       healthBar = new HealthBar(150, height/2-300, playerHealth, PlayerhealthBarHeight, playerHealth, "green");
      NinjaHealthBar = new HealthBar(displayWidth/2+300, height/2-300,NinjaHealth,30,NinjaHealth,"red");
     gameState = "Stage4"
    }
    if(gameState === PLAY5){
      Games.stage5();
      playerHealth    = 300;
      playerHealthA   = 300;
      BloodManHealth  = 270;
      BloodManHealthA = 270;
      A3chances = 3
      FlyHealth = 200
      FlyBar = new HealthBar(150,height/2-250,FlyHealth,30,FlyHealth,"blue")
     UpArrow = createButton('up')
      UpArrow.position(150,height/2-200)
    DownArrow = createButton("down")
    DownArrow.position(150,height/2+200)
    LeftArrow = createButton('left')
    LeftArrow.position(100,height/2+100)
   RightArrow = createButton('right')
   RightArrow.position(200,height/2+100)
      BloodManHealthBar = new HealthBar(displayWidth/2+300, height/2-300,BloodManHealth,30,BloodManHealth,"red");
      gameState = "Stage5"
      healthBar = new HealthBar(150, height/2-300, playerHealth, PlayerhealthBarHeight, playerHealth, "green");
    }
     if(gameState === "3"||gameState === "stage2"||gameState === "Stage3"||gameState==="Stage4"||gameState==="Stage5"){
      attackButton1.show();
      attackButton2.show();
      if(FlyHealth!==200&&FlyBarStatus !== "Full"){
        FlyHealth+=1
        FlyBar.updateHealth(FlyHealth)
       // console.log(FlyHealth)
        if(FlyHealth>=200){
          FlyBarStatus = "Full"
        }
      }
      if(FlyHealth<=0){
        FlyBarStatus = "NotFull"
      }
      if(FlyHealth<0){
        FlyHealth = 0
      }
      if(FlyHealth<=0&&player.y<BlueFire.y){
        player.y+=5
        BlueFire.Down()
        if(player.y === BlueFire.y ){
          player.y = BlueFire.y
          BlueFire.IdlePlayer()
          playerState = "Fildle"
        }
      }

     UpArrow.mouseClicked(()=>{
       console.log()
     
       if(FlyHealth!==0){
       BlueFire.Fly()}
     })
     if(player.y<BlueFire.y){
      FlyHealth-=2
   console.log("updating")
     FlyBar.updateHealth(FlyHealth)}
     LeftArrow.mouseClicked(()=>{
       if(player.x<=10){
         BlueFire.RePosition();
         playerState = "Filde"
       }
       player.x-=50
     })
     RightArrow.mouseClicked(()=>{
       if(player.x>displayWidth/2+300){
         BlueFire.Reposition();
         playerHealth-=3
         playerState = "Fidle"
    Playerdamaged = playerHealthA - playerHealth
    playerHealthA = playerHealth
       }
       player.x+=50
       if(player.y === BlueFire.y){
       BlueFire.Run()}
       if(player.y<=BlueFire.x){

       }
     })

     DownArrow.mouseClicked(()=>{
       if(player.y>BlueFire.y){
console.log(1)
BlueFire.IdlePlayer()
       }
       if(player.y<BlueFire.y){
           player.y+=50
        BlueFire.Down()
       }
     })

    }

  

  

  // for attack 1
  if(playerState === "Played@S1"){
    BlueFire.x +=0.1;
    attackButton1.hide();
    attackButton2.hide();
 
  
    if(Throw.x>=tanks.x){  
     tankState = "Fire" 
     BlueFire.IdlePlayer();
     if(tankState==="Fire"){

    var rand = Math.round(random(1,2))
    switch(rand){
      
            case 1:tanks.Fire();
            Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
            Bullet.addImage(Bullet_Img);
            Bullet.velocityX = -Throw.velocityX
           // Bullet.x-=50
            Bullet.scale = 0.3
            break;
            case 2:tanks.Fire();
            Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
            Bullet.addImage(Bullet_Img);
            Bullet.velocityX = -Throw.velocityX
           // Bullet.x-=50
            Bullet.scale = 0.3
            break;
            default:break;
        
        
    }
    tankState= "Idle2"
  }
    
      tankHealth -= Math.round(random(10,20));
      Tankdamaged  = tankHealthA - tankHealth;
      tankHealthA = tankHealth

     TankhealthBar.updateHealth(tankHealth)

       Throw.x = 330
      Throw.velocityX = 0
      Throw.visible = false

    }

    if(tankState==="Idle2"){

      if(Bullet.x<=BlueFire.x){
        playerHealth -=Math.round(random(8,14));
        Playerdamaged = playerHealthA - playerHealth
        playerHealthA = playerHealth;
        healthBar.updateHealth(playerHealth);    
     playerState = "Idle@S1"
      }

    }
 }
  //console.log(tankHealth,playerHealth)}
// for attack 1
  if(playerState === "Idle@S1"){
    BlueFire.IdlePlayer();
    Throw.x = 330
    Throw.velocityX = 0;
    Throw.visible = false;
    Bullet.visible = false;
    Bullet.x= tanks.x;
    Bullet.velocityX = 0;
    tanks.IdleTank();
    BlueFire.x=250;
  playerState = "FIdle"
    
  }

 // for attack 2
  if(playerState === "Played2@S1"){
    attackButton1.hide();
    attackButton2.hide();
    BlueFire.x += 6
  //  BlueFire.Play();


 
    if(BlueFire.x >= tanks.x){
     // playerState = "Idle2@S1"
     tankState = "Fire" 
     BlueFire.IdlePlayer();
     if(tankState==="Fire"){

    var rand = Math.round(random(1,2))
    switch(rand){
            case 1:tanks.Fire();
            Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
            Bullet.addImage(Bullet_Img);
            Bullet.velocityX = -15
           // Bullet.x-=50
            Bullet.scale = 0.3
            break;
            case 2:tanks.Fire();
            Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
            Bullet.addImage(Bullet_Img);
            Bullet.velocityX = -12
           // Bullet.x-=50
            Bullet.scale = 0.3
            break;
            default:break;
        
        
    }
    tankState= "Idle2"
  }
    
      tankHealth -= Math.round(random(10,20));
      Tankdamaged  = tankHealthA - tankHealth;
      tankHealthA = tankHealth

     TankhealthBar.updateHealth(tankHealth)

     
          
    }
    if(tankState==="Idle2"){

      if(Bullet.x<=BlueFire.x){
        playerHealth -=Math.round(random(20,28));
        Playerdamaged = playerHealthA - playerHealth
        playerHealthA = playerHealth;

        healthBar.updateHealth(playerHealth);
      
     playerState = "Idle2@S1"
      }

    }

   }

   if(tankHealth<=0){
    gameState = END
    Games.winS1();
    tankHealth = 10
  }
   // for attack 2 
    if(playerState === "Idle2@S1"){
     
      BlueFire.x = 255
      BlueFire.IdlePlayer();
      BlueFire.Stop();
      BlueFire.Reposition();
      Bullet.visible = false;
      Bullet.x= tanks.x;
      Bullet.velocityX = 0;
      tanks.IdleTank();
      playerState = "FIdle"
}

// For the stage 2 attacks and all the properties

  if(playerState === "Played@S2"){
    BlueFire.x +=0.1;
    attackButton1.hide();
    attackButton2.hide();

    ZombieM.attack();
    ZombieM.run();
   
 
    if(Throw.x>=zombieM.x&&zombieM.x>=displayWidth/2+300){
     playerState = "Idle@S2"
     zombieMHealth -= Math.round(random(15,24));
     Zombiedamaged =  (zombieMHealthA - zombieMHealth)*2
     zombieMHealthA = zombieMHealth;
     ZombiehealthBar1.updateHealth(zombieMHealth);
     ZombiehealthBar2.updateHealth(zombieMHealth);
    }
    if(Throw.x>=zombieM.x){
      Throw.visible = false
      zombieMHealth -=Math.round(random(15,25));
      Zombiedamaged = (zombieMHealthA - zombieMHealth)*2
      zombieMHealthA = zombieMHealth
      ZombiehealthBar1.updateHealth(zombieMHealth);
      ZombiehealthBar2.updateHealth(zombieMHealth);
      Throw.x = 130
      Throw.velocityX = 0
    }
    if(zombieM.x<=player.x){
        BlueFire.Infect()
    }
 if(/*Throw.x===ZombieM.x||*/Throw.x===zombieM.x){
      zombieMHealth -=Math.round(random(30,35));
      Zombiedamaged =  (zombieMHealthA - zombieMHealth)*2
      zombieMHealthA = zombieMHealth
      ZombiehealthBar1.updateHealth(zombieMHealth);
      ZombiehealthBar2.updateHealth(zombieMHealth);
  }
  }
  if(playerState === "Idle@S2"){
    ZombieM.resetPosition();
   // BlueFire.IdlePlayer();
    BlueFire.IdlePlayer();
   BlueFire.x = 225
    Throw.x = 230
    Throw.velocityX = 0;
    Throw.visible = false;
playerState = "Filde"
  }
  if(gameState === "stage2" ){
  if(playerState==="Infected"){
    attackButton1.hide();
    attackButton2.hide();
    ZombieM.resetPosition();
    ZombieM.idle();
    playerHealth-=0.2
    Playerdamaged = playerHealthA - playerHealth
    playerHealthA = playerHealth
    healthBar.updateHealth(playerHealth)
    launchTime.velocityX = 5
    launchTime.visible = false
    if(launchTime.x>=displayWidth/2+300){
      launchTime.velocityX = 0
      playerState = "Idle@S2"
    }
  }
}
  if(playerState === "Played2@S2"){
  
   // BlueFire.Play();
    attackButton1.hide();
    attackButton2.hide();
    //BlueFire.x+=6
  //  console.log(zombieW.x)
    //console.log(zombieM.x,BlueFire.x)

 if(player.x>=zombieM.x){
  
   playerState = "Idle2@S2"
   playerHealth -= Math.round(random(20,25));
   Playerdamaged = playerHealthA - playerHealth
   playerHealthA = playerHealth
   zombieMHealth -= Math.round(random(15,21));
   Zombiedamaged = zombieMHealthA - zombieMHealth
   zombieMHealthA = zombieMHealth
   healthBar.updateHealth(playerHealth)
   ZombiehealthBar1.updateHealth(zombieMHealth)
   ZombiehealthBar2.updateHealth(zombieMHealth)

  
 }
 
  }
  if(playerState === "Idle2@S2"){
    ZombieM.resetPosition();
    ZombieM.idle();
    BlueFire.IdlePlayer();
    BlueFire.Reposition();
    ZombieM.StopZombie();
    zombieW.x = displayWidth/2+300+50
    zombieW.y = displayHeight-370+150
    BlueFire.Stop();
    BlueFire.x= 225
    playerState = "Filde"
  //  console.log(BlueFire.x,zombieM.x,zombieW.x)
  }
 // console.log(playerHealth2,zombieMHealth)
if(zombieMHealth<=0){
  Games.winS2();
  zombieMHealth = 1

}

// attacks for stage 3

if(playerState === "Played@S3"){
  console.log("hidinghereP1")
  attackButton2.hide();
  attackButton1.hide();
  attackButton3.hide();

 //   console.log(caseState)
  rand = Math.round(random(1,2));
  switch(rand){
  case 1: RoboAlien.Shoot();
  Bullet2 = createSprite(RoboAlien.x+10,RoboAlien.y,10,10)
  Bullet2.addImage(Bullet_Img2)
  Bullet2.scale = 0.5
  Bullet2.velocityX = -Throw.velocityX
   if(Bullet2.x<= 583){
  Bullet2.velocityY = -2
}
  if(Bullet2.x>= 583){
    Bullet2.velocityY = 2
  }
  AlienRobot.velocityY = 0
 
  playerState= "Played"
 // console.log(rand)
  break;
  case 2:RoboAlien.Jump();
  AlienRobot.velocityY = -2
  console.log(rand,"mixing")
  playerState= "Played"
  break;
  default:break;
  
 // caseState = "2"
 // console.log(caseState)
 }
 
 
 



 }
 if(playerState === "Played"){
 // console.log(RoboAlien.y,AlienRobot.y)
 //console.log(attackButton1.x,attackButton2.x)
 console.log("hidinghereP")
  attackButton2.hide();
  attackButton1.hide();
  attackButton3.hide();

  if(Throw.x>=AlienRobot.x&&AlienRobot.y>=displayHeight-370){
    playerState = "Idle@S3(1)"
    console.log("touching")
    playerHealth -= Math.round(random(15,20))
    healthBar.updateHealth(playerHealth)
    Playerdamaged = playerHealthA-playerHealth
    playerHealthA = playerHealth
    Robohealth -= Math.round(random(15,18))
    Robohealthbar.updateHealth(Robohealth)
    Robodamaged = RobohealthA-Robohealth
    RobohealthA = Robohealth

  }
  
    if(Throw.x>=RoboAlien.x&&AlienRobot.y<displayHeight-370){
    playerState = 'Idle@S3(2)';
    }
  
}


if(playerState === "Idle@S3(1)"){
  //  console.log(1);
   Bullet2.x = RoboAlien.x
   Bullet2.velocityX = 0
   Bullet2.velocityY = 0
   Bullet2.visible = false
   RoboAlien.Idle();
   BlueFire.IdlePlayer();
   Throw.x = 230
   Throw.velocityX =0 
   Throw.visible = false
   playerState = "Filde"
}
if(playerState === "Idle@S3(2)"){
  //console.log(AlienRobot.y,RoboAlien.y)
  BlueFire.IdlePlayer();
if(AlienRobot.y>=displayHeight-370){
  AlienRobot.velocityY = 0
  RoboAlien.Idle()
}
  if(RoboAlien.y>AlienRobot.y){
  RoboAlien.Stop();
 // RoboAlien.Idle();
}
playerState = "Filde"
  }
  if(playerState === "Played2@S3"){
  // BlueFire.x+=6
  console.log("hidinghereP2")
   attackButton1.hide();
    attackButton2.hide();
    attackButton3.hide();
   // console.log(player.x)
    if(player.x>=RoboAlien.x-100){
      RoboAlien.Sword()
     
    }
    if(player.x>=RoboAlien.x){
      playerState = "Idle2@S3"
      playerHealth -= Math.round(random(25,30))
      healthBar.updateHealth(playerHealth)
      Playerdamaged = playerHealthA-playerHealth
      playerHealthA = playerHealth
      Robohealth -= Math.round(random(25,31))
      Robohealthbar.updateHealth(Robohealth)
      Robodamaged = RobohealthA-Robohealth
      RobohealthA = Robohealth
      
    }
  }
  if(playerState === "Idle2@S3"){
    BlueFire.IdlePlayer();
    BlueFire.Reposition();
    BlueFire.Stop();
    RoboAlien.Idle();
    playerState = "Filde"}
 
    var damage = "notGiven"
  if(gameState === "Stage3"&&Robohealth<=100&&a === 1){
//attackButton3.hide();
RoboState ="powerPlayed"
if(RoboState === "powerPlayed"){
attackButton2.hide();
attackButton1.hide();
console.log("powerplaying")
}
    RoboAlien.JumpnShoot();
  //  Robohealthbar.updateHealth(Robohealth)

 // B1.visible = false;
 if(b === 1 ){
 B1 = createSprite(RoboAlien.x-50,RoboAlien.y+50,10,10)
 B1.addImage(Bullet_Img2)
 B1.scale = 0.3
 // B1.visible = false
 B2 = createSprite(RoboAlien.x-50,RoboAlien.y,10,10)
 B2.addImage(Bullet_Img2)
 B2.scale = 0.3
// B2.visible = false
 B3 = createSprite(RoboAlien.x-50,RoboAlien.y-50,10,10)
 B3.addImage(Bullet_Img2)
 B3.scale = 0.3
// B3.visible = false
 // B2.visible = false
 b = 2
 }if(b===2){
 
 
   
 B1.visible = true
 B1.velocityX = -3;


  
   B2.visible = true;
   B2.velocityX = -2
   RoboAlien.Idle();


   B3.visible = true;
  B3.velocityX = -3
   b = 3
 

/*  B1.x = RoboAlien.x;
   B1.velocityX = 0
   B1.lifetime = 1
   B1.visible = false*/
  }
  if(b===3){
    if(B1.x<=player.x){
      playerHealth -= Math.round(random(25,30))
      healthBar.updateHealth(playerHealth)
      Playerdamaged = playerHealthA-playerHealth
      playerHealthA = playerHealth
      B1.x = RoboAlien.x;
      B1.velocityX = 0
      B1.lifetime = 1
      B1.visible = false
      console.log(damage)
    }
  if(B2.x<=player.x){
    playerHealth -= Math.round(random(25,30))
    healthBar.updateHealth(playerHealth)
    Playerdamaged = playerHealthA-playerHealth
    playerHealthA = playerHealth
    damage = "given"
   B2.x = RoboAlien.x;
   B2.velocityX = 0
   B2.lifetime = 1
   B2.visible = false
   console.log(damage)
  }
  if(B3.x<=player.x){
    playerHealth -= Math.round(random(25,30))
    healthBar.updateHealth(playerHealth)
    Playerdamaged = playerHealthA-playerHealth
    playerHealthA = playerHealth
    B3.x = RoboAlien.x
    B3.velocityX = 0
    B3.lifetime = 1
    B3.visible = false
  }
    console.log(a)
    if(damage==="given"){
      RoboState = "Idle3"
      playerState = "Idle3@S3"
      a = 2
    }
  }
  //  b = 1
   // playerSta
  
  }
 /* if(a===2){
   
    attackButton1.hide();
    attackButton2.hide();
   // attackButton3.hide();
  //  console.log("bullets")
  console.log("hidinghereA2")
  

   // RoboState = "Idle2"
 
  b=3
 
  
  }
  if(b === 3 ){
    a = 3
  }
 
  if(a===3){
   
    attackButton1.hide();
   attackButton2.hide();
   }*/
   // RoboState = "Idle"
  
   if(RoboState==="Idle3"){
     playerState = "Idle3@S3"
     }
  if(playerState === "Played3@S3"){
    console.log("hidinghereP3")
  attackButton3.hide();
  attackButton2.hide();
  attackButton1.hide();
  UpArrow.hide();
DownArrow.hide();
LeftArrow.hide();
RightArrow.hide();
    if(player.x>=RoboAlien.x){
      A3chances -=1
      playerState = "Idle3@S3"
      Robohealth-=Math.round(random(50,55))
      Robohealthbar.updateHealth(Robohealth)

    }
  }
  if(playerState === "Played3@S3(2)"){
  //  attackButton1.show();
    //attackButton2.show();
  }
  if(playerState === "Idle3@S3"){
    //attackButton3.show();
  //  attackButton2.show();
    //attackButton1.show();
    BlueFire.IdlePlayer();
    BlueFire.Reposition();
    BlueFire.Stop();
    RoboState = "Idle"
    playerState = "Filde"
  }
  if(gameState === "Stage3"){
if(A3chances>0&&playerHealth<=200&&playerState!=="Played3@S3"&&playerState!=="Played@S3"&&playerState!=="Played2@S3"&&playerState!=="Played"&&a!==2&&b!==2){
  attackButton3.show();
  UpArrow.show();
DownArrow.show();
LeftArrow.show();
RightArrow.show();
}
else{attackButton3.hide();}
if(A3chances<=0){
  attackButton3.hide();
}}
if(Robohealth<=0){
  gameState = "Win@S3"
  Games.winS3();
  Robohealth = 1

}
//Stage 4 
if(playerState === "Played@S4"){
  attackButton1.hide();
  attackButton2.hide();
 visibled = false
 if( NinjasState === "Idle"){
  Kunai = createSprite(NinjaRobo.x,NinjaRobo.y,10,10);
  Kunai.rotationSpeed = -10
  Kunai.velocityX = -5
  Kunai.scale = 0.5
  if(NinjaHealth<=100){
    Kunai.velocityY = 1
    Kunai.velocityX =-5
  }
  NinjaRobot.ThrowKunai()
  NinjasState = "Played"
  Kunai.addImage(Kunai_img)
 }
 if(Kunai.x<=player.x&&Kunai.y===player.y&&NinjasState==="Played"){
  Kunai.destroy();
  playerHealth -=Math.round(random(20,30))
  healthBar.updateHealth(playerHealth)
   Playerdamaged = playerHealthA-playerHealth
                   playerHealthA = playerHealth

               }
 if(Kunai.x<=BlueFire.x&&NinjasState==="Played"){
    Kunai.x= NinjaRobo.x
    NinjaRobot.Idle()
    NinjasState = "Played2"
  }
  if(NinjasState==="Played2"){
 
   BlueFire.GroundFireSword();
   Throw = createSprite(BlueFire.x+80,BlueFire.y-20,20,20);
   Throw.addImage(FireClawThrow_Img)
   Throw.velocityX = 12
   
   NinjasState = 'Idle2'
   
   
  }
  if(NinjasState==="Idle2"){
   
    if(Throw.x>=NinjaRobo.x&&Throw.y <= NinjaRobo.y){
      playerState = "Idle@S4"
      Throw.destroy();
      NinjaHealth -= Math.round(random(30,35))
      NinjaHealthBar.updateHealth(NinjaHealth)
      Ninjadamaged = NinjaHealthA-NinjaHealth
      NinjaHealthA = NinjaHealth
      playerHealth -=Math.round(Ninjadamaged/4)
      healthBar.updateHealth(playerHealth)
      Playerdamaged = playerHealthA-playerHealth
      playerHealthA = playerHealth
   
  }
  if(Throw.x>=NinjaRobo.x+50){
    playerState = "Idle@S4"
  }
  }
}
if(playerState === "Idle@S4"){
  NinjasState = "Idle"
  BlueFire.IdlePlayer();
  NinjaRobot.Idle();
  visibled = true
  playerState = "Filde"
}
if(playerState === "Played2@S4"){
  attackButton1.hide();
  attackButton2.hide();
  visibled = false
  if(player.x>=NinjaRobo.x-100&&player.y<=NinjaRobo.y){
    NinjaRobot.Attack()

  }
   if(player.x>=NinjaRobo.x+50){
    playerState = "Idle2@S4"
   }
  if(player.x>=NinjaRobo.x&&player.y>=NinjaRobo.y){
    playerState = "Idle2@S4"
    NinjaHealth -= Math.round(random(25,35))
    NinjaHealthBar.updateHealth(NinjaHealth)
    Ninjadamaged = NinjaHealthA-NinjaHealth
    NinjaHealthA = NinjaHealth
    playerHealth -=Math.round(random(35,45))
    healthBar.updateHealth(playerHealth)
   Playerdamaged = playerHealthA-playerHealth
   playerHealthA = playerHealth

  }
}
if(playerState === "Idle2@S4"){
    BlueFire.Stop()
    BlueFire.Reposition()
    BlueFire.IdlePlayer()
    NinjaRobot.Idle()
    visibled = true
    playerState = "Filde"
}

if(playerState ==="Played3@S4"){
attackButton2.hide()
attackButton1.hide()
visibled = false
UpArrow.hide();
DownArrow.hide();
LeftArrow.hide();
RightArrow.hide();
SpChances = "used1"
if(player.x>=NinjaRobo.x&&player.y<=NinjaRobo.y){
  playerState = "Idle3@S4"
  NinjaHealth -= Math.round(random(55,65))
  NinjaHealthBar.updateHealth(NinjaHealth)
  Ninjadamaged = NinjaHealthA-NinjaHealth
  NinjaHealthA = NinjaHealth
  playerHealth -=Math.round(Ninjadamaged/4)
  healthBar.updateHealth(playerHealth)
 Playerdamaged = playerHealthA-playerHealth
 playerHealthA = playerHealth
 A3chances-=1
 NinjaRobot.Attack();

}
if(player.x>=NinjaRobo.x+50){
  playerState = "Idle3@S4"
}
}
if(playerState === "Idle3@S4"){
  BlueFire.Reposition();
  BlueFire.Stop();
  BlueFire.IdlePlayer();
  SpChances = "left"
  NinjaRobot.Idle()
  visibled = true
  playerState = "Filde"
  UpArrow.show();
DownArrow.show();
LeftArrow.show();
RightArrow.show();
   //console.log(visibled)
}
if(gameState === "Stage4"){
if(playerHealth>=200){
  SpChances = "notShown"
}
if(playerHealth<=200&&visibled === true){
  SpChances = "left"
 //console.log("visiblinhgf")
}
if(visibled === false){
   SpChances = "wait"
}
if(A3chances<=0){
  SpChances = "notLeft"
}
if(SpChances === "left"&&visibled === true){
   attackButton3.show();
  
}

if(SpChances !== "left"){
  attackButton3.hide()
}
if(NinjaHealth<=100){
 NinjaRobot.Glide()
 //console.log(NinjaRobot.y-100,NinjaRobo.y)
}
if(NinjaRobo.y<=NinjaRobot.y-200){
  NinjaRobo.velocityX=0
  NinjaRobo.velocityY = 0
}
}
// Stage 5 
if(gameState === "Stage5") {
  if(playerState === "Played@S5"){
    visibled = false
    attackButton1.hide();
    attackButton2.hide();
  
    if(player.x!==BlueFire.x+1){
    Throw = createSprite(BlueFire.x+80,BlueFire.y,20,20);
    Throw.addImage(FireClawThrow_Img)
    Throw.velocityX = 12
     player.x = BlueFire.x+1
     BloodBullet = createSprite(BloodMan.x,BloodMan.y,20,20);
     BloodBullet.addImage(BloodBullet_img);
     BloodBullet.velocityX = -12
     BloodBullet2 = createSprite(BloodMan.x-50,BloodMan.y+50,20,20);
     BloodBullet2.addImage(BloodBullet_img);
     BloodBullet2.velocityX = -12
     BloodBullet3 = createSprite(BloodMan.x-50,BloodMan.y-50,20,20);
     BloodBullet3.addImage(BloodBullet_img);
     BloodBullet3.velocityX = -12
     }
    if(Throw.x>=BloodMan.x&&Throw.y>=BloodMan.y){
      
      console.log("thow")
       BloodManHealth -= Math.round(random(15,20));
       BloodManHealthBar.updateHealth(BloodManHealth)
       BloodManDamaged = BloodManHealthA - BloodManHealth
       BloodManHealthA = BloodManHealth
       Throw.x = player.x
       Throw.destroy();
      
      
       }
       if(BloodBullet.x<=player.x&&BloodBullet.y>=player.y){
        BloodBullet.destroy();
        BloodBullet2.destroy();
        BloodBullet3.destroy();
        playerHealth-= Math.round(random(15,20));
        healthBar.updateHealth(playerHealth)
        Playerdamaged = playerHealthA - playerHealth
        playerState = "Idle@S5"
        playerHealthA = playerHealth
       }

       if(Throw.x>=BloodMan.x&&Throw.y!==BloodMan.y){
       
        Throw.destroy();
        if(BloodBullet.x<=player.x&&BloodBullet.y>=player.y){
          playerHealth-= Math.round(random(15,20));
          healthBar.updateHealth(playerHealth)
          Playerdamaged = playerHealthA - playerHealth
          playerHealthA = playerHealth
          BloodManHealth -= Math.round(random(20,25));
          BloodManHealthBar.updateHealth(BloodManHealth)
          BloodManDamaged = BloodManHealthA - BloodManHealth
          BloodManHealthA = BloodManHealth
        }
       
         playerState = "Idle@S5"
         console.log("thow2")
       }
    
  }
  if(playerState === "Idle@S5"){
    BlueFire.Reposition();
    BlueFire.IdlePlayer();
    BloodMan1.Idle()
    visibled = true
    playerState = "Filde"
  }
  if(playerState === "Played2@S5"){
    visibled = false
    attackButton1.hide();
    attackButton2.hide()
    if(player.x>BloodMan.x-200){
    BloodMan1.BloodAxe()
    }
    if(player.x>=BloodMan.x){
    playerState = "Idle2@S5"
    playerHealth-= Math.round(random(25,30));
    healthBar.updateHealth(playerHealth)
    Playerdamaged = playerHealthA - playerHealth
    playerHealthA = playerHealth
    BloodManHealth -= Math.round(random(15,20));
    BloodManHealthBar.updateHealth(BloodManHealth)
    BloodManDamaged = BloodManHealthA - BloodManHealth
    BloodManHealthA = BloodManHealth
    }
  }
  if(playerState === "Idle2@S5"){
    BlueFire.Reposition();
    BlueFire.Stop();
    BlueFire.IdlePlayer();
    BloodMan1.Idle();
    playerState = "Filde"
    visibled = true
  }
  if(playerState === "Played3@S5"){
    visibled = false
    attackButton1.hide();
    attackButton2.hide();
    UpArrow.hide();
    DownArrow.hide();
    LeftArrow.hide();
    RightArrow.hide();
    if(player.x>=BloodMan.x&&player.y>=BloodMan.y){
      BlueFire.Reposition();
      BlueFire.Stop();
      BlueFire.IdlePlayer();
      EnemyState = 2
    
      A3chances -=1
      EnemyState = 2
      console.log("S1")
    }
    if(player.x>=BloodMan.x+100){
      playerState = "Idle3@S5"
      A3chances -=1
    }
    if(EnemyState === 2){
  var  rand =  Math.round(random(1,2))
     switch(rand){
       case 1 :BloodMan1.InfectionAttack()
       EnemyState = "3P(1)";
       console.log("S2")
       break;
       case 2:BloodMan1.RoboBullet()
      EnemyState = "3P(2)";
      Bullet2 = createSprite(BloodMan.x+10,BloodMan.y,10,10)
      Bullet2.addImage(Bullet_Img2)
      Bullet2.scale = 0.5
     console.log("s")
    // console.time("placeHolder")
       break;
       default:break;
     }
    }
    if(EnemyState === "3P(1)"){
      BloodMan.velocityX = -10
      if(BloodMan.x<=player.x&&BloodMan.y>=player.y){
        BlueFire.Infect()
        BloodMan1.RePosition()
        console.log("S5")
      }
    }
    if(EnemyState === "3P(2)"){
      console.log("S6")
      Bullet2.velocityX = -12
      if(Bullet2.x<= 583){
     Bullet2.velocityY = -2
   }
     if(Bullet2.x>= 583){
       Bullet2.velocityY = 2
     }
     if(Bullet2.x<=player.x&&Bullet2.y>=player.y){
       playerState = "Idle3@S5"
     }
    }
  }
  if(playerState==="Infected"){
    attackButton1.hide();
    attackButton2.hide();
    console.log("S7")
   BloodMan1.RePosition();
   BloodMan1.Idle()
    playerHealth-=0.2
    Playerdamaged = playerHealthA - playerHealth
    playerHealthA = playerHealth
    healthBar.updateHealth(playerHealth)
    launchTime.velocityX = 5
    launchTime.visible = false
    if(launchTime.x>=displayWidth/2+300){
      launchTime.velocityX = 0
      playerState = "Idle3@S5"
    }}
  if(playerState === "Idle3@S5"){
    BlueFire.Reposition();
    console.log("S8")
    BlueFire.Stop();
    BlueFire.IdlePlayer();
    BloodMan1.Idle()
    visibled = true
    playerState = "Filde"
    EnemyState = 1
    UpArrow.show();
  DownArrow.show();
  LeftArrow.show();
    RightArrow.show();
  }
  if(playerHealth>=220){
  SpChances = "notShown"
}
if(playerHealth<=200&&visibled === true){
  SpChances = "left"
 //console.log("visiblinhgf")
}
if(BloodManHealth<=2000&&Finder === "Yes"){
  BloodMan1.Idle2();
  BloodMan.y = random(height-100,height/2-200)
  Finder ="Wait"
  BloodMan.x = random(width/2-200,BlueFire.x-20)
  BloodMan.visible = false 
 
}
if(Finder === "Wait"){
  var Dialogue = createGroup()
  
  if(C1 ===1){
 Magnifier = createSprite(mouseX,mouseY,50,50);
 Magnifier.addImage(Magnifier_img);
 Magnifier.scale = 0.5
 Magnifier.debug = true
 C1 = 2 
 
  }
  if(C1===2){
    Magnifier.x = mouseX
    Magnifier.y = mouseY
   Finder = "Find"
  }
}

if(visibled === false){
   SpChances = "wait"
}
if(A3chances<=0){
  SpChances = "notLeft"
}
if(SpChances === "left"&&visibled === true){
   attackButton3.show();
  
}
if(SpChances !== "left"){
  attackButton3.hide()
}
if(playerHealth<=50&&SPA === "notDone"){
 playerState = "SpecialAttack"
 SPA= "Done"
}
if(playerState === "SpecialAttack"){
  attackButton1.hide()
  attackButton2.hide();
  visibled = false
  BlueFire.SpecialAttack()
  if(player.x>=BloodMan.x&&player.y>=BloodMan.y){
    playerState = "IdleS"
    BloodManHealth -= Math.round(random(20,25));
    BloodManHealthBar.updateHealth(BloodManHealth)
    BloodManDamaged = BloodManHealthA - BloodManHealth
    BloodManHealthA = BloodManHealth
  }
if(BloodManHealth<=30&&SPA2 === "notDone"){
   EnemyState = "SpecialAttack"
   SPA2 === "Done"
}
if(EnemyState === "SpecialAttack"){
  BloodMan1.RageShot();
 
}
}
if(playerState === "IdleS"){
  BlueFire.IdlePlayer();
  BlueFire.Reposition();
  BlueFire.Stop();
  playerState = "Filde"
}
if(BloodManHealth<=BloodManHealth/2+10){
  console.log("strange")
}
}               
if(playerState === "Filde"){
  BlueFire.IdlePlayer()
}
  drawSprites();
  if(gameState==="3"){
    
  healthBar.display();
  TankhealthBar.display();
  FlyBar.display()
  fill("black");
  text(tankHealth,displayWidth/2+300,height/2-300)
  text(playerHealth,150,height/2-300)
  fill("white")
 if(Tankdamaged!==undefined){
   text("-"+Tankdamaged,displayWidth/2+220,height/2)
   if(Playerdamaged!==undefined){
   text("-"+Playerdamaged,350,height/2)}
 }
  }
  if(gameState === "stage2"){
    healthBar.display();
    FlyBar.display()
    ZombiehealthBar1.display();
    ZombiehealthBar2.display();
    fill("black");
    text(zombieMHealth,displayWidth/2+300,height/2-200)
    text(zombieMHealth,displayWidth/2+300,height/2-300)
    text(Math.round(playerHealth),150,height/2-300)
    if(Zombiedamaged!==undefined){
      text("-"+Zombiedamaged,displayWidth/2+220,height/2)
      if(Playerdamaged!==undefined){
      text("-"+Math.round(Playerdamaged+1),350,height/2)}
    }
  }
  if(gameState=== "Stage3"){
    healthBar.display();
    FlyBar.display()
    Robohealthbar.display();
    fill("black");
    text(Robohealth,displayWidth/2+300,height/2-300)
    text(playerHealth,150,height/2-300)
    if(Robodamaged!==undefined){
      text("-"+Robodamaged,displayWidth/2+220,height/2)
      if(Playerdamaged!==undefined){
      text("-"+Math.round(Playerdamaged+1),350,height/2)}

    }
    if(A3chances>0&&playerHealth<=200&&playerState!=="Played3@S3"){
    text("Chances left:-"+A3chances,attackButton3.x,attackButton3.y)
  }
else{}}
if(gameState === "Stage4"){
  healthBar.display();
  FlyBar.display();
  NinjaHealthBar.display();
  fill("black");
  text(NinjaHealth,displayWidth/2+300,height/2-300)
  text(playerHealth,150,height/2-300)
  if(Ninjadamaged!==undefined){
    text("-"+Ninjadamaged,displayWidth/2+220,height/2)
    if(Playerdamaged!==undefined){
    text("-"+Math.round(Playerdamaged+1),350,height/2)}

 }
  if(A3chances>0&&playerHealth<=200&&playerState!=="Played3@S3"){
  text("Chances left:-"+A3chances,attackButton3.x,attackButton3.y)
}
else{}
}
if(gameState === "Stage5"){
  healthBar.display();
  BloodManHealthBar.display();
  FlyBar.display()
  fill("black");
  text(BloodManHealth,displayWidth/2+300,height/2-300)
  text(playerHealth,150,height/2-300)
  fill("white")
  if(BloodManDamaged!==undefined){
    text("-"+BloodManDamaged,displayWidth/2+220,height/2)
    if(Playerdamaged!==undefined){
    text("-"+Math.round(Playerdamaged+1),350,height/2)}

 }
  if(A3chances>0&&playerHealth<=200&&playerState!=="Played3@S3"){
  text("Chances left:-"+A3chances,attackButton3.x,attackButton3.y)
}
noFill()
stroke(0)
strokeWeight(5)
Magnifier = ellipse(mouseX,mouseY,20)
}
//  healthBar.updateHealth(playerHealth)
}
