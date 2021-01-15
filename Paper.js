class Paper{
    constructor(x,y,w,h,angle){
        var options={
            isStatic:false,
            resitution:0.3,
            friction:0.5,
            density:5
        }
        this.body=Bodies.rectangle(x,y,w,h,angle,options);
        this.width=w;
        this.height=h;
        this.paperImage = loadImage("images/paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(5);
        stroke("red");
        ellipse(0,0,this.width,this.height);
        imageMode(CENTER);
        image('this.paperImage',100,400,20,20);
        pop();
    }
}