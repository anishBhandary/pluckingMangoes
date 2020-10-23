const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var fly, BaseClass;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    Baseclass = new BaseClass(150, 305, 300, 170);
    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    
    Baseclass.display();
  //  log6.display();
    fly.display();    
}

function mouseDragged(){
   Matter.Body.setPosition(bird.body,{x: mouseX , y: mouseY });


}

function mouseReleased(){
  slingshot.fly();

}
