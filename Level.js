class Level extends PIXI.Container{

  constructor(){
    super();
    statics = new PIXI.Container();
    entities = new PIXI.Container();
    this.addChildAt(statics,0);
    this.addChildAt(entities,1);

  }

}
