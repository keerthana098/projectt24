class Dustbin{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            restitution:0.8,
            friction:1.0,
            density:0.04
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        this.dustbinImage = loadImage("images/dustbingreen.png")
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
image('this.dustbinImage',675,585,200,10);

var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(5);
stroke("white");
fill("white");
rect(0,0,this.width,this.height);
pop();
    }
}