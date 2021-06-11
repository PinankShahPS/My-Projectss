class box {
constructor(x,y,w,h){
var options={
restitution:1,
friction:0.5,
density:1
}
this.body=Bodies.rectangle(x,y,w,h,options);
this.w=w;
this.h=h;
World.add(myWorld,this.body);
}
display(){
    rotate(this.body.angle);
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,this.w,this.h);
}


} 