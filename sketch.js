const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body

var world;
var engine;
var x;
var y;
var maxDrops=100;
var drops=[];

function preload(){
    
}

function setup(){
var canvas=createCanvas(1000,500)
engine=Engine.create();
world=engine.world;

x=new Drop(random(0,400),random(0,400));
y=new Person(300,400);


}

function draw(){
background("darkblue")
Engine.update(engine)
x.display();
if(frameCount%60===0){
drops.push(new Drop(random(0,400),random(0,400)))
}

for(var i=0;i<drops.length;i++){
drops[i].display();
    
y.display();
}
}

