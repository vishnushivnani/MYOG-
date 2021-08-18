class Player{
    constructor(x,y){
      this.x = x
      this.y = y 
       Ground = createSprite(245,displayHeight-280,displayWidth*2,50)
       Ground.visible =false
        
        player = createSprite(this.x,this.y,50,50);
      //  player.velocityY += 0.8
        player.collide(Ground);
        player.scale  = 2
       
        
      
      /**using */  player.addAnimation("Idle",Idle)
      /**using */  player.addAnimation("Running",playerRun);
     /*using */   player.addAnimation("Move1",playerAttack);//FireClaw
     /*will be using in ninja */     player.addAnimation("Move2",playerAttack2);//fly
        player.addAnimation("Move3",playerAttack3);//FlyClaw
     /**using */   player.addAnimation("Move4",playerAttack4);//GroundBlade
    /*will be using in ninja */    player.addAnimation("Move5",playerAttack5);//fireRoll
     /**will be using in last level  */   player.addAnimation("Move6",playerAttack6);//FocusThrow
      /*using*/  player.addAnimation("infected",playerInfected);
      player.addAnimation("Fly",playerFly)
     player.addAnimation("Down",playerDown)
       

  
    }
    Run(){
     
      player.changeAnimation("Running",playerRun);
  }
   SpecialAttack(){
     player.velocityX= 5
     player.changeAnimation("Move6",playerAttack6);
  }
    Stop(){
      player.velocityX = 0
    }
   
    
    GroundFireSword(){
      player.changeAnimation("Move1",playerAttack);

     

      } 
    
    FireRoll(){
    //  player.debug = true;
      player.changeAnimation("Move5",playerAttack5);
    }
    FlyClaw(){
     // player.debug = true;
      player.changeAnimation("Move3",playerAttack3)
    }
    SkyAttack(){
     // player.debug = true;
      player.changeAnimation("Move2",playerAttack2);
    }
    IdlePlayer(){
    //  player.debug = true;
      player.changeAnimation("Idle",Idle)
    }
    GroundBlade(){
      
    //  player.debug = true;
      //player.setCollider("circle",200,200)
      player.changeAnimation("Move4",playerAttack4);
    }
    Play(){
    // player.debug = true;
      player.velocityX = 5
    }
    Reposition(){
   //   player.debug = true;
      player.x = this.x;
      player.y =this.y;
    }

   Infect(){
   // player.debug = true;
     player.changeAnimation("infected",playerInfected);
     playerState = "Infected"
     launchTime = createSprite(250,displayHeight-370,10,10);
   }
Fly(){
  player.y -= 50
  player.changeAnimation("Fly",playerFly);
}
 Down(){
   player.changeAnimation("Down",playerDown);
 }
}