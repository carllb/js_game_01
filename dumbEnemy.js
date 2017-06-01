var stepCount = 0;
var left = false;

class dumbEnemy extends Entity{

  constructor(texture){
    super(texture);
  }



  onUpdate(){
    if(!left){
      this.x += 3;
      stepCount++;
      if(stepCount == 20){left = !left;}
    }
    else{
      this.x -= 3;
      stepCount--;
      if(stepCount == 0){left = !left;}
    }

  }

  onCollision(otherEntity){

  }

}
