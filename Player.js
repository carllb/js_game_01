class Player extends Sprite{
  constructor(texture){
    super(texture);
    this.speed = 0.5;
  }

  getInput(up,down,left,right){
      if(up.isDown){
        this.y -= this.speed;
      }
      if(down.isDown){
        this.y += this.speed;
      }
      if(left.isDown){
        this.x -= this.speed;
      }
      if(right.isDown){
        this.x += this.speed;
      }
    }
}
