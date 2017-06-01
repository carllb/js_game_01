class Player extends PIXI.Sprite{
  constructor(texture){
    super(texture);
    this.speed = 1;
  }

  actuate(up,down,left,right){
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
