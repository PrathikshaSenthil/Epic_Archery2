class PlayerArrow {
  constructor(x, y) {
    var options = {
      isStatic: true,
      restitution:0.8,
      friction:1.0,
      density:1.0
    };
   
    this.r=40;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image=loadImage("Raarrow.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,width-1370,height-575,130,120);
    pop();
  }

  shoot(angle){

    var velocity = p5.Vector.fromAngle(this.body.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
}

}
