const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage;
var gameState = "launched";

function preload() {
//preload the images here
    backgroundImage = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(2000, 650);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
    ground = new Ground(0,350,1400,12);
    hero = new Hero(220,240,160,90);
    rope = new Rope(hero.body,{x:220, y:80});

    block1 = new Block(420,300,30,30);
    block2 = new Block(420,270,30,30);
    block3 = new Block(420,240,30,30);
    block4 = new Block(420,210,30,30);
    block5 = new Block(420,180,30,30);
    block6 = new Block(420,150,30,30);
    block7 = new Block(420,120,30,30);

    block8 = new Block(470,300,30,30);
    block9 = new Block(470,270,30,30);
    block10 = new Block(470,240,30,30);
    block11 = new Block(470,210,30,30);
    block12 = new Block(470,180,30,30);
    block13 = new Block(470,150,30,30);
    block14 = new Block(470,120,30,30);
    block15 = new Block(470,90,30,30);

    block16 = new Block(520,300,30,30);
    block17 = new Block(520,270,30,30);
    block18 = new Block(520,240,30,30);
    block19 = new Block(520,210,30,30);
    block20 = new Block(520,180,30,30);
    block21 = new Block(520,150,30,30);
    block22 = new Block(520,120,30,30);

    block23 = new Block(570,300,30,30);
    block24 = new Block(570,270,30,30);
    block25 = new Block(570,240,30,30);
    block26 = new Block(570,210,30,30);
    block27 = new Block(570,180,30,30);
    block28 = new Block(570,150,30,30);
    block29 = new Block(570,120,30,30);
    block30 = new Block(570,90,30,30);

    monster = new Monster(900,170,150,150);
}

function draw() {
  background(backgroundImage)
  
  Engine.update(engine);
  block1.display();
  ground.display();
  rope.display();
  hero.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  monster.display();
}

function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY});
  }
}

function mouseReleased(){
  rope.fly();
  gameState = "launched";
}