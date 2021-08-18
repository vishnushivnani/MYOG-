class bloodMan{
    constructor(x,y){
        this.x = x
        this.y = y 
        BloodMan = createSprite(this.x,this.y,20,20)
        BloodMan.addAnimation("Idle",BloodMan_Img);
        BloodMan.addAnimation("BloodAxe",BloodAxe);
        BloodMan.addAnimation("BloodGun",Gun);
        BloodMan.addAnimation("Raged",RageShot);
        BloodMan.addAnimation("RunningClaw",RunningClaw)
        BloodMan.addAnimation("attack",ZombieM_Attack);
        BloodMan.addAnimation("Shoot",Shoot);
        BloodMan.addAnimation("Glide",NinjaRobo_Glide);
        BloodMan.scale=1
    }
    Idle(){
        BloodMan.changeAnimation("Idle",BloodMan_Img);
        BloodMan.scale=1
    }
    BloodAxe(){
        BloodMan.changeAnimation("BloodAxe",BloodAxe);
        BloodMan.scale=1
    }
    BloodGun(){
        BloodMan.changeAnimation("BloodGun",Gun);
        BloodMan.scale=1
    }
    RageShot(){
        BloodMan.changeAnimation("Raged",RageShot);
        BloodMan.scale=1
    }
    RunningClaw(){
        BloodMan.changeAnimation("RunningClaw",RunningClaw);
        BloodMan.scale=1
    }
    InfectionAttack(){
        BloodMan.changeAnimation("attack",ZombieM_Attack);
        BloodMan.scale = 0.3
    }
    RoboBullet(){
       BloodMan.changeAnimation("Shoot",Shoot);
       BloodMan.scale = 0.3
    }
    Glide(){
        BloodMan.changeAnimation("Glide",NinjaRobo_Glide);
        BloodMan.velocityX=1
        BloodMan.velocityY = -5
    }
    RePosition(){
       BloodMan.x = BloodMan1.x
       BloodMan.y = BloodMan1.y
       BloodMan.velocityX = 0
    }
    Idle2(){
        BloodMan.changeAnimation("Idle",BloodMan_Img);
        BloodMan.scale=0.3
    }

}