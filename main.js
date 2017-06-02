//aliases for pixi container
var stage;
var renderer = PIXI.autoDetectRenderer(512, 512),
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    resources = PIXI.loader.resources;

var upKey = keyboard(87);
var downKey = keyboard(83);
var leftKey = keyboard(65);
var rightKey = keyboard(68);

var player;
var en;

function init(){
  stage = new Level();
  const p = new PIXI.Graphics();
  p.beginFill(0x9bea00);
  p.lineStyle(0);
  p.drawCircle(30,30,10);
  p.endFill();
  player = new Player(p.generateCanvasTexture());

  const e2 = new PIXI.Graphics();
  e2.beginFill(0x7cea00);
  e2.lineStyle(0);
  e2.drawCircle(40,40,20);
  e2.endFill();

  en = new dumbEnemy(e2.generateCanvasTexture());

  stage.addChild(player);


  var e = new EntityPickUp(p.generateCanvasTexture());
  e.x = 100;
  e.y = 100;
  stage.addChild(e);

  stage.addChild(en);
  en.x = stage.width/2;
  en.y = stage.height/2;

  document.body.appendChild(renderer.view);

  gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);
  player.actuate(upKey,downKey,leftKey,rightKey);
  children = stage.children;
  for (var i=0; i < children.length; i++ ){
    child = children[i];
    if (child instanceof Entity) {
      child.onUpdate();
      checkCollisions(child,children,child.onCollision);
    }
  }
  //Render the stage
  stage.renderer.render(stage);
}
