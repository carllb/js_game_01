class Level extends PIXI.Container{


  constructor(){
    super();
    this.renderer = PIXI.autoDetectRenderer(512, 512);
    this.TextureCache = PIXI.utils.TextureCache;
    this.Sprite = PIXI.Sprite;
    this.resources = PIXI.loader.resources;
  }



}
