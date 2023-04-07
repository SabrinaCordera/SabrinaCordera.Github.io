

  class bunny {
  
    
    constructor( tempC,  tempXpos,  tempYpos,  oa) {
      
      this.c = tempC;
      this.xpos = tempXpos;
      this.ypos = tempYpos;
      this.orifice =  "The Bun demands" + oa;
      this.xspeed = random(-.1,.1);
      this.yspeed = random(-.1,.1);
  
    }
  
    
     display() {
      noStroke();
    fill(this.c);

    push();
    translate(this.xpos, this.ypos);
    ellipse(0, 0, 100, 100); //head
    ellipse(-30, -60, 40, 100); // left ear
    ellipse(30, -60, 40, 100); // right ear
    fill(255);
    ellipse(-20, 0, 20, 30); //left eye
    ellipse(20, 0, 20, 30); //right eye
    this.pupil1(color(153, 204, 255), random(3), -3); //eye color
    pop();

    push();
    fill(this.c);
    text(this.orifice, this.xpos + 50, this.ypos - 15);
    pop();
  }

  pupil1(c, lx, ly) {
    push();
    translate(lx, ly);
    fill(c);
    ellipse(-20, 0, 10, 10); //left pupil
    ellipse(20, 0, 10, 10); //right pupil
    pop();
  }



     
  
  
     update() {
  
      this.xpos += this.xspeed;
      this.ypos += this.yspeed;
      this.xpos += random(-1,1);
      this.ypos += random(-1,1);
  
      if (this.xpos > width) {
        this.xpos = 0;
      }
  
      if (this.xpos < 0) {
        this.xpos = width;
      }
  
      if (this.ypos > height) {
        this.ypos = 0;
      }
  
      if (this.ypos < 0) {
        this.ypos = height;
      }
    }
  
     newDirection() {
      this.xspeed = random(-3,3);
      this.yspeed = random(-3,3);
      this.c = color(random(150,255),random(150,255),random(150,255));
    
  
  }
  

  }
