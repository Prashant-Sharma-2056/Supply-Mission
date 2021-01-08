class Garbage{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill("lightblue");
        ellipse(pos.x,pos.y,this.radius);
    }
}