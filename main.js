//aliases for pixi container
var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(512, 512),
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    resources = PIXI.loader.resources;

var upKey = keyboard(87);
var downKey = keyboard(83);
var leftKey = keyboard(65);
var rightKey = keyboard(68);

var player;

function init(){
  const p = new PIXI.Graphics();
  p.beginFill(0x9bea00);
  p.lineStyle(0);
  p.drawCircle(30,30,10);
  p.endFill();
  player = new Player(p.generateCanvasTexture());
  stage.addChild(player);
  document.body.appendChild(renderer.view);

  gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);
  player.actuate(upKey,downKey,leftKey,rightKey);
  //Render the stage
  renderer.render(stage);
}
