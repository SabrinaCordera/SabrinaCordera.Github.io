
let bananaArr = Array(100);
let bsz = 45;
let isOn = true;
let bunnyArr = new Array(15);



function setup() {
  createCanvas(800, 800);
  background(255);
  colorMode(RGB);
  noStroke();

  // banana set up
  let gridCount = 0; 
  for (let i = 0.5; i < 20; i++) {
    for (let j = 0.3; j < 20; j++) {
      bananaArr[gridCount] = new Banana(i * bsz, j * bsz);
      bananaArr[gridCount].seed(gridCount);
      gridCount++;
    }
  }

  //bunny set up
  let col;
  for (let i = 0; i < bunnyArr.length; i++) {
      col = color(random(50, 100));
      bunnyArr[i] = new bunny(col, random(width), height / 2, " bananas");
  }


}

function draw() {
  background(255);
 
  
  for (let i = 0; i < bananaArr.length; i++) {
    bananaArr[i].display();
    bananaArr[i].update();
  
  }


  for (let i = 0; i < bunnyArr.length; i++) {
      
    bunnyArr[i].update();
    bunnyArr[i].display();
   
}
  crossMarks();


}


function mousePressed() {

  if (isOn) {
    isOn = false; // turn off the banana array
  } else {
    isOn = true; // turn on the banana array
  }


  for (let i = 0; i < bunnyArr.length; i++) {
    bunnyArr[i].newDirection();
  }

  
}


function crossMarks() {
  stroke(255);
  strokeWeight(3);

  push();
  translate(30, 30);
  line(0, 0, 20, 0);
  line(0, 0, 0, 20);
  pop();

  push();
  translate(width - 30, 30);
  rotate(radians(90));
  line(0, 0, 20, 0);
  line(0, 0, 0, 20);
  pop();


  push();
  translate(30, height - 30);
  rotate(radians(-90));
  line(0, 0, 20, 0);
  line(0, 0, 0, 20);
  pop();

  push();
  translate(width - 30, height - 30);
  rotate(radians(-180));
  line(0, 0, 20, 0);
  line(0, 0, 0, 20);
  pop();

}







