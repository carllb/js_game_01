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
  renderer.render(stage);
}
