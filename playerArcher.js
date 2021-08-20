class playerArcher {
    constructor(x, y) {
      var options = {
        isStatic: true,
        restitution:0.8,
        friction:1.0,
        density:1.0
      };
     
      this.r=40;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image=loadImage("Rarrow.png");
      World.add(world, this.body);
    }
    display() {

     if (keyIsDown(UP_ARROW) && player.body.angle < 1.77) {
        this.angle = 0.1;
        }
          else{
              this.angle =-0.1;
          }
    
          if (keyIsDown(DOWN_ARROW)  && playerAr.body.angle < 1.47) {
            this.angle =-0.1;
           }
             else{
                  this.angle =0.1;
             }

      var pos = this.body.position;
      var angle = this.body.angle;
      Matter.Body.setAngle(this.body);
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,width-1370,height-570,130,120);
      pop();
    }

   
  }
  