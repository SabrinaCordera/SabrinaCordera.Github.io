



class Banana {
  value;
  ch;
  c;
  posX;
  posY;

  
  constructor(tposX, tposY) {
    this.posX = tposX;
    this.posY = tposY;
  }

  seed(s) {
    this.value = s;
    this.ch = random(-1, 1);
  }

  display() { //banana design
    let x = 0;
    let y = 0;
    push();
    translate(this.posX, this.posY);
    scale(2);
    noStroke();

    stroke(255, 245, 100, 255); strokeWeight(5); //color
    curve(this.posX-50, this.posY-15, this.posX-20, this.posY-2, this.posX+17.5, this.posY-2,  this.posX+50, this.posY-30); //top line
    stroke(255, 240, 0, 255); strokeWeight(8); //color
    curve(this.posX-50, this.posY-50, this.posX-20, this.posY, this.posX+15, this.posY, this.posX+50, this.posY-50); //middle line
    stroke(240, 220, 0, 255); strokeWeight(6); 
    curve(this.posX-30, this.posY-70, this.posX-22.5, this.posY, this.posX+17.5, this.posY,  this.posX+30, this.posY-70); //bottom curve with white middle
    stroke(250, 230, 0, 255); strokeWeight(5);
    line(this.posX-23, this.posY-3, this.posX-30, this.posY-7); //stem
    stroke(150, 100, 0, 255);
    point(this.posX+18, this.posY-3); //brown tip
    pop();
    
  }

  update() { 
 
    if ((this.value < 0) || (this.value > 254)) {
      this.ch = -this.ch;
    }
    this.value += this.ch;
    
  }
}