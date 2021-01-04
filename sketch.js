const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var ground;
var slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(100,250,10,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    ground1.display();
}