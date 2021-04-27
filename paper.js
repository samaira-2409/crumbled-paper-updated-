class Paper {
    constructor(x,y,r){
    var options = {
        'restitution':0.3,
        'friction':0,
        'density':1.2,
        'isStatic':false
    }
    this.body = Bodies.circle(x,y,r/2,options);
    //this.x=x;
    //this.y=y;
    this.r=r/2;
    this.image = loadImage("paper.png");
    //this.image.scale = 0.2
    World.add(world,this.body);
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    //rotate(this.x,this.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r,this.r);
    pop();
}
}