//aliases for pixi container
var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(512, 512),
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    resources = PIXI.loader.resources;

function init(){

  document.body.appendChild(renderer.view);

  gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);

  //Render the stage
  renderer.render(stage);
}
