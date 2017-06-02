class Level extends PIXI.Container{

  constructor(){
    super();
    this.statics = new PIXI.Container();
    this.entities = new PIXI.Container();

    const p = new PIXI.Graphics();
    p.beginFill(0x9bea00);
    p.lineStyle(0);
    p.drawCircle(30,30,10);
    p.endFill();
    player = new Player(p.generateCanvasTexture());
    player.x = 100;
    player.y = 100;
    this.entities.addChild(player);

    const w = new PIXI.Graphics();
    w.beginFill(0x9bea00);
    w.lineStyle(0);
    w.drawRect(0,0,512, 10);
    w.drawRect(0,502,512, 10);
    w.drawRect(0,0,10, 512);
    w.drawRect(502, 0, 10, 512);
    w.endFill();
    var wall = new Wall(w.generateCanvasTexture());
    this.statics.addChild(wall);

    this.addChildAt(this.statics,0);
    this.addChildAt(this.entities,1);

  }


}
