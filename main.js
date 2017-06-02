//aliases for pixi container
var stage;

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

  const e = new PIXI.Graphics();
  e.beginFill(0x7cea00);
  e.lineStyle(0);
  e.drawCircle(40,40,20);
  e.endFill();

  en = new dumbEnemy(e.generateCanvasTexture());

  stage.addChild(player);
  stage.addChild(en);
  en.x = stage.width/2;
  en.y = stage.height/2;
  document.body.appendChild(stage.renderer.view);

  gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);
  player.actuate(upKey,downKey,leftKey,rightKey);
  en.onUpdate();
  //Render the stage
  stage.renderer.render(stage);
}
