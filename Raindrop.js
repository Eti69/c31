class Drop extends Baseclass{
constructor(x,y){
super(x,y,5,5)
this.drops=[]
this.maxDrops=100;
}
display(){
super.display();
if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x:random(0,900),y:random(0,10)});
}
}
}