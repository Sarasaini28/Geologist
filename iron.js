
class iron{
	constructor(x,y)
	{
	
	var options={
		restitution:0.8,
		friction:3,
		density:30
	}
	
		this.x=x;
		this.y=y;
        this.height=height
        this.width=width
		
		this.body=Bodies.rectanglw(this.x, this.y, options)
		World.add(world, this.body);
        Matter.Body.setAngle(this.body,angle);
}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill('grey');
    rect(0, 0, this.width, this.height);
    pop(); 
}
}