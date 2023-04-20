var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["05563c24-fb47-4dd8-be0e-90842c1b5c88"],"propsByKey":{"05563c24-fb47-4dd8-be0e-90842c1b5c88":{"name":"volleyball2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life=0;

var parede1 = createSprite(190, 120,250,3);
var parede2 = createSprite(190,260,250,3);
var parede3 = createSprite(67,145,3,50);
var parede4 = createSprite(67,235,3,50);
var parede5 = createSprite(313,145,3,50);
var parede6 = createSprite(313,235,3,50);
var parede7 = createSprite(41,170,50,3);
var parede8 = createSprite(41,210,50,3);
var parede9 = createSprite(337,210,50,3);
var parede10 = createSprite(337,170,50,3);
var parede11 = createSprite(18,190,3,40);
var parede12 = createSprite(361,190,3,40);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
var parede13 = createSprite(396, 194,5,500);
var parede14 = createSprite(200,0,400,10);
var parede15 = createSprite(0,188,10,500);
var parede16 = createSprite(200,400,500,10);
 
parede1.shapeColor='green';
parede2.shapeColor='green';
parede3.shapeColor='green';
parede4.shapeColor='green';
parede5.shapeColor='green';
parede6.shapeColor='green';
parede7.shapeColor='green';
parede8.shapeColor='green';
parede9.shapeColor='green';
parede10.shapeColor='green';
parede11.shapeColor='green';
parede12.shapeColor='green';
parede13.shapeColor='green';
parede14.shapeColor='green';
parede15.shapeColor='green';
parede16.shapeColor='green';

var bloco=createSprite(40,190,13,13);
bloco.shapeColor="red";
  
var car1=createSprite(100,130,10,10);
car1.shapeColor="black";
car1.velocityY=+8;

var car2=createSprite(215,130,10,10);
car2.shapeColor="black";
car2.velocityY=+8;

var car3=createSprite(165,250,10,10);
car3.shapeColor="black";
car3.velocityY=-8;

var car4=createSprite(270,250,10,10);
car4.shapeColor="black";
car4.velocityY=-8;

var carros=createGroup();
carros.add(car1);
carros.add(car2);
carros.add(car3);
carros.add(car4);

function draw() {
  background("white");

carros.bounceOff(parede1);
carros.bounceOff(parede2);

if (keyDown("d")){
bloco.x+=3;
}

if (keyDown("a")){
bloco.x-=3;
}

if (bloco.isTouching(carros)){
  bloco.x=40;
  bloco.y=190;
  
  life+=1;
  
}

if (life>4){
  fill("red");
  textSize(20);
  textAlign(CENTER,TOP);
  stroke ("red");
  text ("Game Over",196,182);
  bloco.destroy();
  carros.destroyEach();
}

  stroke("darkred");
  fill("red");
  textSize(18);
  text("Mortes: "+life,200,100);
  
  
  fill("lightblue");
  rect(15,170,52,40);
  
  fill("yellow");
  rect(310,170,52,40);




   drawSprites();
    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
