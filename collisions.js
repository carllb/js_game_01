function checkCollisions(sprite, otherSprites, collFun) {
  for (var i = 0; i < otherSprites.length; i++ ){
    oSpri = otherSprites[i];
    if (oSpri == sprite){
      continue;
    }
    b1 = sprite.getBounds();
    b2 = oSpri.getBounds();
  //  console.log("y1: " + b1.y + " y1 + h: " + (b1.y + b1.height) + " y2: " + b2.y + " y2 + h: " + (b2.y + b2.height));
    //console.log("y2: " + b2.y + " h2 " + b2.height);
    if (b2.x + b2.width > b1.x){
    //  console.log("collision1");
      if (b2.x < b1.x + b1.width) {
      //    console.log("collision2");
        if (b2.y + b2.height > b1.y) {
        //  console.log("collision3");
          if (b2.y < b1.y + b1.height) {
          //  console.log("collision");
            collFun(sprite,oSpri);
          }
        }
      }
    }
  }
}
