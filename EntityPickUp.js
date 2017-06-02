class EntityPickUp extends Entity {
  constructor(texture){
    super(texture);
  }

  onCollision(self,otherEntity){
    if (otherEntity instanceof Player){
      self.parent.removeChild(self);
    }
  }
}
