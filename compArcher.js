class computerArcher {
    constructor(x, y) {
      var options = {
        isStatic: true,
        restitution:0.8,
        friction:1.0,
        density:1.0
      };
     
      this.r=40;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image=loadImage("larrow.png");
      World.add(world, this.body);
    }
    display() {
      Matter.Body.setAngle(this.body);
      var pos = this.body.position;
      var angle = this.body.angle;
     
     /* if (keyIsDown(UP_ARROW) && compAr.body.angle < 1.77) {
       this.angle = 0.1;
       }
         else{
             this.angle =-0.1;
         }
   
         if (keyIsDown(DOWN_ARROW)  && compAr.body.angle < 1.47) {
           this.angle =-0.1;
          }
            else{
                 this.angle =0.1;
            }
            */

           
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,width-180,height-570,130,120);
      pop();
    }

    shoot(){

        var velocity = p5.Vector.fromAngle(this.body.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }

  }
  