class Box{
    constructor(x,y,width,height){
        var options={
            //isStatic:false,
            restitution:0.8,
            density:0.04,
            friction:1.0
        }
        //this.x=x;
        //this.y=y;
        
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.height=height;
        this.width=width;
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        stroke("green");
        rectMode(CENTER)
        fill(255);
        rect(0,0,this.width,this.height)
        pop();
    }
}