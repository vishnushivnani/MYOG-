class Ninja{
    constructor(x,y){
        this.x = x
        this.y = y
        NinjaRobo = createSprite(this.x,this.y,10,10);
        NinjaRobo.scale = 0.3
        NinjaRobo.addAnimation("Idle",NinjaRobo_Idle);
        NinjaRobo.addAnimation("Throw",NinjaRobo_Throw);
        NinjaRobo.addAnimation("Attack",NinjaRobo_Attack);
        NinjaRobo.addAnimation("Jump",NinjaRobo_Jump);
        NinjaRobo.addAnimation("JumpThrow",NinjaRobo_JumpThrow)
        NinjaRobo.addAnimation("Glide",NinjaRobo_Glide);
        NinjaRobo.addAnimation("Climb",NinjaRobo_Climb);
       // NinjaRobo.addAnimation("Dead",NinjaRobo_Dead);
        
    }
    Idle(){
        NinjaRobo.changeAnimation("Idle",NinjaRobo_Idle);
    }
    ThrowKunai(){
        NinjaRobo.changeAnimation("Throw",NinjaRobo_Throw);

    }
    Attack(){
        NinjaRobo.changeAnimation("Attack",NinjaRobo_Attack);
    }
    Jump(){
        NinjaRobo.changeAnimation("Jump",NinjaRobo_Jump);
    }
    Jumpnthrow(){
        NinjaRobo.changeAnimation("JumpThrow",NinjaRobo_JumpThrow);
    }
    Glide(){
        NinjaRobo.changeAnimation("Glide",NinjaRobo_Glide);
        NinjaRobo.velocityX=1
        NinjaRobo.velocityY = -5
     
    }
    Climb(){
        NinjaRobo.changeAnimation("Climb",NinjaRobo_Climb);
    }
    Dead(){
        NinjaRobo.changeAnimation("Dead",NinjaRobo_Dead);
    }
    
}