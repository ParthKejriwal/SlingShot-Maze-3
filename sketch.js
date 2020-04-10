const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var block1,block2,block3;
var ball,chain;
var count=0;

var engine,world;
//var planets=createGroup();
function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;
 block1=new Platform(650, 200, 200, 20);
 box1=new Target(590,175,30,30);
 box2=new Target(630,175,30,30);
 box3=new Target(670,175,30,30);
 box4=new Target(710,175,30,30);
 box5=new Target(610,145,30,30);
 box6=new Target(650,145,30,30);
 box7=new Target(690,145,30,30);
 box8=new Target(630,115,30,30);
 box9=new Target(670,115,30,30);
 box10=new Target(650,85,30,30);

block2=new Platform(650,300,200,20);
 box11=new Target(590,325,30,30);
 box12=new Target(630,325,30,30);
 box13=new Target(670,325,30,30);
 box14=new Target(710,325,30,30);
 box15=new Target(610,355,30,30);
 box16=new Target(650,355,30,30);
 box17=new Target(690,355,30,30);
 box18=new Target(630,385,30,30);
 box19=new Target(670,385,30,30);
 box20=new Target(650,415,30,30);

 block3=new Platform(650,445,450,20);
 block4=new Platform(425,455,20,70)
 block5=new Platform(775,405,20,70);

ball=new Box(170,420,25,25);
 slingshot = new SlingShot(ball.body,{x:170, y:420});
 
}

function draw() {
  background(255,0,113);  
  Engine.update(engine);
  if (frameCount%50===0) {
    count=count+1;
  }
  text("Score "+count,700,50);
  textFont(20)
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 fill(200,200,200);
 ball.display();

 slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
 slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(ball.body);
     ball.x=170;
     ball.y=420
  }
}