
let FrameRate = 10;
let x = 100;
let y = 100;
let rotationAngle = 0;
let dist1;
let dist2;
let dist3;
let dist4;
let dist5;
let dist6;
let dist7;
let dist8;
let dist9;
let dist10;
let dist11;
let dist12;
let dist13;


function setup() {
  createCanvas(1920, 600);
  background(244, 248, 252);
  frameRate(10);

 gridSize = 1080;
 imgSize = 1920;
 img1 = loadImage("/assets/map.png");

}

function draw() {
  background(50);
  frameRate(25);
  shipmovement();

  let shipCenterX = x + 300; // Assuming the center of Ship1 is at (x + 300, y + 100)
  let shipCenterY = y + 100; // Assuming the center of Ship1 is at (x + 300, y + 100)
  
  let capricornCenterX = 150; 
  let capricornCenterY = 250;  
  let aquariusCenterX = 60; 
  let aquariusCenterY = 100;  
  let sagittariusCenterX = 300; 
  let sagittariusCenterY = 350;  
  let scorpiusCenterX = 500; 
  let scorpiusCenterY = 300;  
  let libraCenterX = 650; 
  let libraCenterY = 300;  
  let virgoCenterX = 750; 
  let virgoCenterY = 300;  
  let leoCenterX = 950; 
  let leoCenterY = 200;  
  let cancerCenterX = 1150; 
  let cancerCenterY = 150;  
  let geminiCenterX = 1250; 
  let geminiCenterY = 100; 
  let taurusCenterX = 1450; 
  let taurusCenterY = 150;  
  let ariesCenterX = 1700; 
  let ariesCenterY = 150;  
  let piscesCenterX = 1730; 
  let piscesCenterY = 300;  
  let ophiuchusCenterX = 450; 
  let ophiuchusCenterY = 200;  
  

  let dist1 = dist(shipCenterX, shipCenterY, capricornCenterX, capricornCenterY);
  let dist2 = dist(shipCenterX, shipCenterY, aquariusCenterX, aquariusCenterY);
  let dist3 = dist(shipCenterX, shipCenterY, sagittariusCenterX, sagittariusCenterY);
  let dist4 = dist(shipCenterX, shipCenterY, scorpiusCenterX, scorpiusCenterY);
  let dist5 = dist(shipCenterX, shipCenterY, libraCenterX, libraCenterY);
  let dist6 = dist(shipCenterX, shipCenterY, virgoCenterX, virgoCenterY);
  let dist7 = dist(shipCenterX, shipCenterY, leoCenterX, leoCenterY);
  let dist8 = dist(shipCenterX, shipCenterY, cancerCenterX, cancerCenterY);
  let dist9 = dist(shipCenterX, shipCenterY, geminiCenterX, geminiCenterY);
  let dist10 = dist(shipCenterX, shipCenterY, taurusCenterX, taurusCenterY);
  let dist11 = dist(shipCenterX, shipCenterY, ariesCenterX, ariesCenterY);
  let dist12 = dist(shipCenterX, shipCenterY, piscesCenterX, piscesCenterY);
  let dist13 = dist(shipCenterX, shipCenterY, ophiuchusCenterX, ophiuchusCenterY);



  if (dist1 < 40) { // You may need to adjust the threshold (30 in this example)
    capriWord1(1020, 0, 0, 1);
    capriLine(150, 250, 0, 0.2);
  }
  if (dist2 < 40) { // You may need to adjust the threshold (30 in this example)
    aquaWord(1020,0,0,1); 
    aquaLine (60,100,0,0.2);
  }
  if (dist3 < 40) { // You may need to adjust the threshold (30 in this example)
    sagiWord(1020,0,0,1);
    sagiLine (250,300,0,0.2);
  }
  if (dist4 < 40) { // You may need to adjust the threshold (30 in this example)
    scorpiWord(1020,0,0,1); 
    scorpiLine (500,400,0,0.2); 
   }
  if (dist5 < 40) { // You may need to adjust the threshold (30 in this example)
    libword(1020,0,0,1);
    libLine (650,300,0,0.2);
  }
  if (dist6 < 40) { // You may need to adjust the threshold (30 in this example)
    virword(1020,0,0,1); 
    virline (750,300,0,0.2);
  }
  if (dist7 < 40) { // You may need to adjust the threshold (30 in this example)
    leoWord(1020,0,0,1);
    leoline (950,200,0,0.2); 
  }
  if (dist8 < 40) { // You may need to adjust the threshold (30 in this example)
    canword(1020,0,0,1);
    canline(1150,150,0,0.2);
  }
  if (dist9 < 40) { // You may need to adjust the threshold (30 in this example)
    gemiword(1020,0,0,1);
    gemiLine (1250,100,0,0.2); 
  }
  if (dist10 < 40) { // You may need to adjust the threshold (30 in this example)
    taurword(-500,0,0,1); 
    taurline (1450,150,0,0.2); 
  }
  if (dist11 < 40) { // You may need to adjust the threshold (30 in this example)
    ariWord(-500,0,0,1); 
    ariLine (1700,150,0,0.2);
  }
  if (dist12 < 40) { // You may need to adjust the threshold (30 in this example)
    pisceWord(-500,0,0,1); 
    pisceLine (1730,300,0,0.2);
  }
  if (dist13 < 40) { // You may need to adjust the threshold (30 in this example)
    ophword(1020,0,0,1);
    ophline (450,200,0,0.2);
  }



  Ship1(shipCenterX, shipCenterY, 0, 0.5);


  aquarius (60,100,0.3,0.2); 
  capricorn(150,250, 0, 0.2); 
  sagittarius(250,300,0,0.2); 
  scorpius (500,400,0,0.2); 
  libra(650,300,0,0.2); 
  virgo(750,300,0,0.2); 
  leo (950,200,0,0.2); 
  cancer(1150,150,0,0.2); 
  gemini (1250,100,0,0.2); 
  taurus(1450,150,0,0.2); 
  aries (1700,150,0,0.2);
  pisces (1730,300,0,0.2);
  ophiuchus(450,200,0,0.2);
 

}




function Ship1 (lx,ly,r,s){
  push(); 

  translate (lx,ly);
  rotate(r);
  scale(s);

  noStroke();

  fill(255); //white
  rect(100, 100, 20, 50); //body

  fill(255,0,0); //red
  triangle(100, 120, 100, 150, 80, 160); //left wing
  triangle(120, 120, 120, 150, 140, 160); //right wing
  triangle(110, 75, 100, 100, 120, 100); //nose

  triangle(105, 150, 115, 150, 110, 170);
  fill(255, 137, 0);
  triangle(105, 150, 115, 150, 110, 160);
  fill(255, 247, 0);
  triangle(105, 150, 115, 150, 110, 155);

  fill(0, 230, 255);
  circle(110, 110, 10); //window

  pop();
  
  console.log("ship1");

}

function shipmovement(){

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
    rotationAngle -= 0.1;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
    rotationAngle += 0.1;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
    rotationAngle -= 0.1;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
    rotationAngle += 0.1;
  }




  describe(`50-by-50 spaceship moves left, right, up, and down with arrow presses.`);

}


function capricorn(lx,ly,r,s) {
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

//stars
fill(255);
stroke(255);
ellipse(100, 100, 10, 10); // 1
ellipse(150, 110, 10, 10); // 2
ellipse(250, 90, 10, 10); // 3
ellipse(370, 100, 10, 10); // 4
ellipse(600, 50, 10, 10); // 5
ellipse(610, 0, 10, 10); // 6
ellipse(500, 380, 10, 10); // 7
ellipse(550, 310, 10, 10); // 8
ellipse(380, 300, 10, 10); // 9
ellipse(170, 200, 10, 10); // 10
ellipse(240, 250, 10, 10); // 11
ellipse(260, 265, 10, 10); // 12


pop();
}

function capriLine(lx,ly,r,s){

  push();

  translate(lx, ly);
  rotate(r);
  scale(s);


  fill(255);
  stroke(255);
  strokeWeight(2);
  line(110, 104, 140, 110);
  line(160, 110, 238, 93);
  line(260, 90, 360, 100);
  line(260, 90, 360, 100);
  line(380, 100, 590, 53);
  line(603, 40, 609, 10);
  line(600, 60, 552, 300);
  line(507, 370, 545, 320);
  line(490, 375, 390, 305);
  line(270, 268, 370, 298);
  line(246, 257, 252, 262);
  line(177, 207, 233, 244);
  line(105, 110, 165, 193);

//star names
textSize(30);
fill(255);
  text('Nashira', 150, 145);
  text('Dorsum', 350, 70);
  text('Castra', 250, 250);
  text('Marakk', 300, 350);
  text('Baten algeidi', 510, 400);
  text('Dabih', 620, 60);
  text('Deneb Algedi', 0, 70);
  text('Algedi', 550, -30);

  pop();

}


function capriWord1(lx,ly,r,s){
push();
  translate(lx, ly);
  rotate(r);
  scale(s);


  fill(179, 179, 179);
  rect(500, 0, 400, 600);
  fill(0);
  textSize(30);
  text('Capricornus', 510, 35);
  textSize(20);
  text('Stars Named in Constellation:', 510, 65);
  text('Deneb algedi (Scheddi)', 510, 95);
  text('Nashira', 510, 125);
  text('Dorsum', 510, 155);
  text('Castra', 510, 185);
  text('Marakk', 510, 215);
  text('Baten algeidi', 510, 245);
  text('Dabih', 510, 275);
  text('Deneb Algedi', 510, 305);
  text('Algedi', 510, 335);

  text("Can be seen at an -8.4 to 27.69 degrees", 510, 400);
  text("declination in the southern sky", 510, 430);
  text("Can be seen at an +60 to -90 degrees", 510, 480);
  text("declination in the northern sky", 510, 510);
  text("The best time to see Capricornus is during", 510, 550);
  text("September", 510, 580);

pop();
}


function scorpius (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
stroke(255);
ellipse(150, 100, 10, 10); //shaula
ellipse(170, 105, 8, 8); // lesath
ellipse(120, 160, 10, 10); //
ellipse(100, 195, 10, 10);
ellipse(140, 260, 10, 10);
ellipse(240, 260, 10, 10);
ellipse(300, 240, 10, 10);
ellipse(320, 110, 10, 10);
ellipse(340, 20, 10, 10);
ellipse(420, -90, 10, 10);
ellipse(450, -130, 10, 10); //antares
ellipse(470, -120, 10, 10); //m4
ellipse(490, -140, 10, 10);
ellipse(600, -200, 10, 10);
ellipse(580, -260, 10, 10);
ellipse(550, -280, 10, 10);
ellipse(590, -120, 10, 10);
ellipse(600, -50, 10, 10);

  pop();

}

function scorpiLine(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(150, 104, 165, 100);
  line(145, 110, 125, 150);
  line(115, 170, 105, 190);
  line(100, 205, 130, 250);
  line(150, 260, 230, 260);
  line(240, 260, 290, 240);
  line(305, 230, 320, 120);
  line(320, 100, 335, 30);
  line(345, 10, 415, -80);
  line(425, -100, 450, -130);
  line(455, -135, 480, -140);
  line(500, -145, 590, -195);
  line(600, -185, 593, -135);
  line(600, -60, 590, -110);
  line(600, -210, 585, -250);
  line(575, -265, 560, -275);

//star names
textSize(30);
fill(255);
text("Antares", 350, -150);
text("Shaula", 100, 80);
text("Sargas",100,300);
text("Larawag",350,50);
text("Dschubba",620,-200);
text("Alniyat",480,-150);
text("Jabbah",510,-300);
text("Graffias",600,-260);
text("M4",480,-100);



  pop();

}

function scorpiWord(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400, 600);
  fill(0);
  textSize(30);
  text('Scorpius', 510, 35);
  textSize(20);
  text("Stars in Constellation",510,65);
  text("Antares",510,95);
  text("Shaula",510,125);
  text("Sargas",510,155);
  text("Larawag",510,185);
  text("Dschubba",510,215);
  text("Alniyat",510,245);
  text("Jabbah",510,275);
  text("Graffias",510,305);

  text("Can be seen between +40° and -90°", 510, 400);
  text("in the southern sky", 510, 430);
  text("This constellation is easy to find due to", 510, 480);
  text("being near the centre of the Milky Way", 510, 510);
  

  pop();

}

function gemini (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
stroke(255);
ellipse(170, 50, 10, 10); //castor
ellipse(115, 150, 10, 10); //pollux
ellipse(115, 280, 10, 10);
ellipse(240, 350, 10, 10);
ellipse(320, 390, 10, 10);
ellipse(500, 500, 10, 10); //alhena
ellipse(450, 600, 10, 10);
ellipse(280, 120, 10, 10);
ellipse(400, 250, 10, 10);
ellipse(550, 330, 10, 10);
ellipse(600, 330, 10, 10);


  pop();
  
}

function gemiLine (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(180, 55, 270, 115);
  line(165, 60, 120, 145);
  line(110, 160, 115, 270);
  line(120, 290, 230, 345);
  line(250, 355, 310, 385);
  line(330, 395, 490, 495);
  line(455, 590, 495, 510);
  line(290, 130, 390, 240);
  line(410, 255, 540, 325);
  line(560, 330, 590, 330);
  

//star names
textSize(30);
fill(255);
text("Castor", 100, 35);
text("Pollux",10,165);
text("Alzrir",450,640);
text("Mebsuta",420,245);
text("Mekbuda",330,370);
text("Propus",620,340);
text("Tejat",500,360);
text("Wasat",150,380);

  pop();
}

function gemiword(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,600);
  fill(0);
  textSize(30);
  text('Gemini', 510, 35);
  textSize(20);
  text("Stars Named in Constellation",510,65);
  text("Castor",510,95);
  text("Pollux",510,125);
  text("Alzrir",510,155);
  text("Mebsuta",510,185);
  text("Mekbuda",510,215);
  text("Propus",510,245);
  text("Tejat",510,275);
  text("Wasat",510,305);

  text("Can be seen between +90° and -60°", 510, 360);
  text("in the northern hemisphere", 510, 390);
  text("Gemini is the first constellation catalogued", 510, 420);
  text("by Greek Astronomer Ptolemy in the 2nd", 510, 450);
  text("century", 510, 480);
  

  pop();
}


function aries (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
  stroke(255);
  ellipse(100, 100, 10, 10); //ari
  ellipse(250, 300, 10, 10); //hamal
  ellipse(300, 420, 10, 10); // sheratan
  ellipse(280, 470, 10, 10); //masartim

  //lines


  pop();
  
}

function ariLine(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(110, 110, 240, 290);
  line(255, 310, 300, 410);
  line(300, 430, 285, 460);
  
  

//star names
textSize(30);
fill(255);
  text("Bharani",110,95);
  text("Hamal", 270, 300);
  text("Mesarthim",200,520);
  text("Sheratan",320,430);

  pop();
}

function ariWord(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,600);
  fill(0);
  textSize(30);
  text('Aries', 510, 35);
  textSize(20);
  text("Stars in Constellation",510,65);
  text("Bharani",510,95);
  text("Hamal",510,125);
  text("Mesarthim",510,155);
  text("Sheratan",510,185);

  text("Can be seen at between +90° and -60°", 510, 250);
  text("in the northern hemisphere", 510, 280);
  text("Aries was first catalogued in the Almagest", 510, 310);
  text("by Greek Astronomer Ptolemy in the 2nd", 510, 340);
  text("century", 510, 370);

  pop();
}




function pisces (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
  stroke(255);
  ellipse(100, 600, 10, 10); //
  ellipse(150, 500, 10, 10);
  ellipse(200, 380, 10, 10);
  ellipse(300, 200, 10, 10);
  ellipse(260, 150, 10, 10);
  ellipse(310, 100, 10, 10);
  ellipse(250, 580, 10, 10);
  ellipse(360, 530, 10, 10);
  ellipse(430, 535, 10, 10);
  ellipse(650, 550, 10, 10);
  ellipse(750, 580, 10, 10);
  ellipse(800, 550, 10, 10);
  ellipse(840, 560, 10, 10);
  ellipse(860, 600, 10, 10);
  ellipse(830, 650, 10, 10);
  ellipse(760, 640, 10, 10);
  ellipse(740, 610, 10, 10);

  pop();
  
}

function pisceLine(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(305, 105, 270, 140);
  line(260, 160, 290, 190);
  line(300, 210, 205, 370);
  line(195, 390, 155, 490);
  line(145, 510, 105, 590);
  line(115, 600, 235, 580);
  line(260, 575, 350, 535);
  line(370, 530, 420, 535);
  line(445, 535, 640, 550);
  line(665, 555, 740, 575);
  line(760, 575, 790, 550);
  line(810, 550, 830, 555);
  line(845, 565, 860, 590);
  line(855, 605, 835, 640);
  line(815, 650, 770, 645);
  line(755, 640, 740, 615);
  line(740, 605, 750, 590);
  
  

//star names
textSize(30);
fill(255);
text("Alpherg",80,380);
text("Alrescha",0,630);
text("Circlet",800,500);
text("Revati",320,520);
text("Torcular",170,500);


  pop();
}

function pisceWord(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,600);
  fill(0);
  textSize(30);
  text('Pisces', 510, 35);
  textSize(20);
  text("Stars in Constellation",510,65);
  text("Alpherg",510,95);
  text("Alrescha",510,125);
  text("Revati",510,155);
  text("Torcular",510,185);

  text("Can be seen at between +90° and -65°", 510, 300);
  text("in the northern hemisphere", 510, 330);
  text("Pisces is the largest constellation", 510, 360);
  text("Pisces contains multiple galaxies, such as", 510, 390);
  text("Messier 74(NGC 628)", 510, 420);

  pop();
}



function aquarius (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
  stroke(255);
  ellipse(100, 500, 10, 10);
  ellipse(250, 450, 10, 10);
  ellipse(350, 600, 10, 10);
  ellipse(380, 850, 10, 10);
  ellipse(200, 200, 10, 10);
  ellipse(240, 160, 10, 10);
  ellipse(320, 190, 10, 10);
  ellipse(380, 100, 10, 10);
  ellipse(470, 300, 10, 10);
  ellipse(550, 380, 10, 10);
  ellipse(600, 410, 10, 10);
  ellipse(650, 60, 10, 10);
  ellipse(900, 20, 10, 10);


  pop();
  
}

function aquaLine(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(840, 280, 620, 250);
  line(590, 245, 350, 210);
  line(325, 215, 260, 265);
  line(335, 220, 350, 420);
  line(365, 440, 405, 510);
  line(420, 535, 445, 560);
  line(190, 230, 240, 270);
  line(140, 245, 170, 225);
  line(-45, 495, 120, 260);
  line(-35, 510, 90, 505);
  line(110, 515, 155, 660);
  line(155, 690, 115, 910);
  
//star names
textSize(30);
fill(255);
  text("Albali",880,300);
  text("Ancha",380,420);
  text("Sadachbia",180,310);
  text("Sadalmelik",300,190);
  text("Sadalsuud",550,220);
  text("Skat",180,690);

  pop();
}

function aquaWord(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,600);
  fill(0);
  textSize(30);
  text('Aquarius', 510, 35);
  textSize(20);
  text("Stars in Constellation",510,65);
  text("Albali",510,95);
  text("Ancha",510,125);
  text("Sadachbia",510,155);
  text("Sadalmelik",510,185);
  text("Sadalsuud",510,215);
  text("Skat",510,245);
  
  
  text("Can be seen at between +65° and -90°", 510, 300);
  text("in the southern hemisphere", 510, 330);
  text("Aquarius is in a region of the sky referred", 510, 370);
  text("as the sea as it shares the space with ", 510, 400);
  text("constellations; Piesces (the fish), Eridanus", 510, 430);
  text("(the river), Cetus (the whale), and others", 510, 460);

  pop();
}

function sagittarius (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
  stroke(255);
  ellipse(100, 500, 10, 10);
  ellipse(150, 450, 10, 10);
  ellipse(300, 900, 10, 10);
  ellipse(450, 850, 10, 10);
  ellipse(490, 980, 10, 10);
  ellipse(330, 330, 10, 10);
  ellipse(550, 450, 10, 10);
  ellipse(640, 400, 10, 10);
  ellipse(600, 530, 10, 10);
  ellipse(720, 450, 10, 10);
  ellipse(900, 650, 10, 10);
  ellipse(920, 530, 10, 10);
  ellipse(1000, 560, 10, 10);
  ellipse(1150, 450, 10, 10);
  ellipse(970, 750, 10, 10);
  ellipse(850, 380, 10, 10);
  ellipse(980, 250, 10, 10);
  ellipse(550, 220, 10, 10);
  ellipse(620, 180, 10, 10);
  ellipse(480, 180, 10, 10);
  ellipse(400, 100, 10, 10);
  ellipse(350, 40, 10, 10);

  pop();
}


function sagiLine(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(360, 50, 390, 90);
  line(410, 110, 470, 170);
  line(490, 185, 540, 215);
  line(560, 215, 610, 190);
  line(550, 230, 635, 390);
  line(645, 405, 710, 445);
  line(730, 455, 910, 525);
  line(730, 440, 840, 380);
  line(860, 390, 920, 520);
  line(855, 365, 970, 260);
  line(635, 410, 560, 450);
  line(550, 460, 590, 525);
  line(610, 520, 710, 460);
  line(605, 540, 890, 645);
  line(900, 640, 920, 540);
  line(905, 655, 995,570);
  line(1010, 550, 1140, 460);
  line(930, 530, 1000, 560);
  line(900, 660, 960, 740);
  line(540, 445, 340, 335);
  line(160, 445, 320, 340);
  line(110, 490, 140, 460);
  line(100, 510, 295, 890);
  line(310, 900, 440, 855);
  line(300, 910, 480, 975);

  

//star names
textSize(30);
fill(255);
text("Albaldah",350,200);
text("Alnasl",1020,580);
text("Arkab Posterior",470,1050);
ellipse(470, 1010, 10, 10);
text("Arkab Prior",500,1000);
text("Ascella", 500,570);
text("Kaus Australis",930,680);
text("Kaus Borealis",880,390);
text("Kaus Media",930,520);
text("Nunki",650,400);
text("Polis",900,250);
text("Rukbat", 470,860);
text("Terebellum",200,310);

  pop();
}

function sagiWord(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,700);
  fill(0);
  textSize(30);
  text('Sagittarius', 510, 35);
  textSize(20);
  text("Stars in Constellation",510,60);
  text("Albaldah",510,85);
  text("Alnasl",510,115);
  text("Arkab Posterior",510,145);
  text("Arkab Prior",510,175);
  text("Ascella",510,205);
  text("Kaus Australis",510,235);
  text("Kaus Borealis",510,265);
  text("Kaus Media",510,295);
  text("Nunki",510,325);
  text("Polis",510,355);
  text("Rukbat",510,385);
  text("Terebellum",510,415);

  text("Can be seen at between +55° and -90°", 510, 470);
  text("in the southern hemisphere", 510, 500);
  text("Sagittarius' brightest stars form an asterism", 510, 530);
  text("known as the teapot", 510, 560);

  pop();
}





function libra (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
  stroke(255);
  ellipse(300, 50, 10, 10); //zubeneschamali
  ellipse(400, 200, 10, 10); //zubenelgenubi
  ellipse(100, 220, 10, 10);
  ellipse(150, 180, 10, 10);
  ellipse(200, 160, 10, 10);
  ellipse(350, 400, 10, 10);
  ellipse(180, 500, 10, 10);
  ellipse(160, 550, 10, 10);
  

  pop();
  
}

function libLine(lx,ly,r,s){
push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(110, 210, 140, 185);
  line(160, 175, 190, 160);
  line(210, 155, 290, 60);
  line(310, 60, 395, 190);
  line(300, 60, 350, 385);
  line(360, 395, 400, 210);
  line(340, 400, 190, 495);
  line(165, 540, 175, 510);

  
//star names
textSize(30);
fill(255);
  text("Brachium", 370, 420);
  text("Zubenelgenubi", 430, 200);
  text("Zubenelhakrabi", 0, 150);
  text("Zubeneschamali", 200, 20);

  pop();
}


function libword(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,700);
  fill(0);
  textSize(30);
  text('Libra', 510, 35);
  textSize(20);
  text("Stars in Constellation",510,65);
  text("Brachium",510,95);
  text("Zubenelgenubi",510,125);
  text("Zubenelhakrabi",510,155);
  text("Zubeneschamali",510,185);

  text("Can be seen at between +65° and -90°", 510, 250);
  text("in the southern hemisphere", 510, 280);
  text("Libra is the only constellation not an", 510, 350);
  text("animal or character from mythology", 510, 380);
  text("Libra is home to HD 140283, known as", 510, 450);
  text("Methuselah Star, one of the oldest stars", 510, 480);
  text("known", 510, 510);

  pop();
}




function leo (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
  stroke(255);
  ellipse(600, 50, 10, 10);
  ellipse(680, 100, 10, 10);
  ellipse(500, 150, 10, 10);
  ellipse(490, 230, 10, 10);
  ellipse(200, 250, 10, 10);
  ellipse(100, 400, 10, 10); //denebola
  ellipse(220, 380, 10, 10);
  ellipse(580, 300, 10, 10); 
  ellipse(620, 410, 10, 10); //regulus

  pop();
  
}

function leoline(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(105, 390, 195, 260);
  line(110, 400, 210, 380);
  line(205, 260, 220, 370);
  line(230, 380, 610, 410);
  line(585, 310, 620, 395);
  line(570, 290, 500, 235);
  line(210, 250, 480, 230);
  line(490, 220, 500, 160);
  line(510, 140, 590, 60);
  line(610, 55, 670, 90);


//star names
textSize(30);
fill(255);
  text("Adhafera",380,130);
  text("Algieba",500,220);
  text("Chertan",220,420);
  text("Denebola",20,450);
  text("Rasalas",520,30);
  text("Regulus",600,450);
  text("Zosma",200,230);

  pop();
}


function leoWord(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,700);
  fill(0);
  textSize(30);
  text('Leo', 510, 35);
  textSize(20);
  text("Stars in Constellation",510,65);
  text("Adhafera",510,95);
  text("Algieba",510,125);
  text("Chertan",510,155);
  text("Denebola",510,185);
  text("Rasalas",510,215);
  text("Regulus",510,245);
  text("Zosma",510,275);

  text("Can be seen at between +90° and -65°", 510, 330);
  text("in the northern hemisphere", 510, 360);
  text("Leo contains five Messier objects: Messier,", 510, 390);
  text("65,Messier 66, Messier 95, Messier 96,", 510, 420);
  text("and Messier 105", 510, 450);

  pop();
}


function virgo (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
  stroke(255);
  ellipse(100, 600, 10, 10);
  ellipse(250, 400, 10, 10);
  ellipse(340, 350, 10, 10);
  ellipse(500, 450, 10, 10);//spica
  ellipse(230, 650, 10, 10);
  ellipse(280, 570, 10, 10);
  ellipse(340, 600, 10, 10);
  ellipse(420, 150, 10, 10);
  ellipse(550, 170, 10, 10);
  ellipse(270, 70, 10, 10);
  ellipse(650, 80, 10, 10);
  ellipse(660, -150, 10, 10);
  pop();
  
}

function virline(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(280, 75, 410, 145);
  line(430, 150, 540, 170);
  line(415, 160, 345, 340);
  line(350, 360, 495, 445);
  line(550, 180, 505, 440);
  line(560, 160, 640, 90);
  line(650, 70, 660, -140);
  line(500, 460, 350, 595);
  line(290, 575, 330, 600);
  line(275, 575, 235, 640);
  line(110, 590, 240, 410);
  line(260, 390, 330, 350);


//star names
textSize(30);
fill(255);
text("Heze",250,340);
text("Minelauva",400,130);
text("Porrima",560,200);
text("Spica",520,460);
text("Syrma",350,630);
text("Vindemiatrix",200,50);
text("Zaniah",650,120);
text("Zavijava",680,-140);

  pop();
}


function virword(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,700);
  fill(0);
  textSize(30);
  text('Virgo', 510, 35);
  textSize(20);
  text("Stars Named in Constellation",510,60);
  text("Heze",510,85);
  text("Minelauva",510,115);
  text("Porrima",510,145);
  text("Spica",510,175);
  text("Syrma",510,205);
  text("Vindemiatrix",510,235);
  text("Zaniah",510,265);
  text("Zavijava",510,295);
  

  text("Can be seen at between +80° and -80°", 510, 360);
  text("in the southern hemisphere", 510, 390);
  text("Virgo contains eleven Messier objects and", 510, 420);
  text("twenty stars with known planets", 510, 450);
  

  pop();
}


function cancer (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
  stroke(255);
  ellipse(150, 100, 10, 10); 
  ellipse(170, 240, 10, 10);
  ellipse(160, 300, 10, 10);
  ellipse(100, 400, 10, 10);
  ellipse(250, 430, 10, 10);

  pop();
}


function canline(lx,ly,r,s){
push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(150, 110, 170, 230);
  line(170, 250, 160, 290);
  line(155, 310, 105, 390);
  line(160, 310, 250, 420);
  

//star names
textSize(30);
fill(255);
text("Acubens",0,430);
  text("Asellus Australis",-80,300);
  text("Asellus Borealis",-70,250);
  text("M44",220,280);
  ellipse(200, 280, 10, 10);
  text("Tarf",250,470);
  

  pop();
}


function canword(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,700);
  fill(0);
  textSize(30);
  text('Cancer', 510, 35);
  textSize(20);
  text("Stars Named in Constellation",510,65);
  text("Acubens",510,95);
  text("Asellus Australis",510,125);
  text("Asellus Borealis",510,155);
  text("Tarf",510,185);

  text("Can be seen at between +90° and -60°", 510, 260);
  text("in the northern hemisphere", 510, 290);
  text("Cancer contains famous deep sky objects", 510, 320);
  text("such as open cluster Praesepe, known as", 510, 350);
  text("the Beehive Cluster, open cluster Messier", 510, 380);
  text("67, and NGC 2535 and NGC 2536,", 510, 410);
  text("interacting spiral galaxies", 510, 440);

  pop();
}



function taurus (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
  stroke(255);
  ellipse(100, 300, 10, 10); 
  ellipse(150, 100, 10, 10); //elnath
  ellipse(450, 400, 15, 15); //aldebaran
  ellipse(370, 220, 10, 10);
  ellipse(500, 420, 10, 10);
  ellipse(570, 410, 10, 10);
  ellipse(480, 300, 10, 10);
  ellipse(550, 350, 10, 10);
  ellipse(800, 500, 10, 10);
  ellipse(1000, 550, 10, 10);
  ellipse(1030, 570, 10, 10);

  pop();
}

function taurline(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(160, 105, 360, 215);
  line(380, 225, 470, 290);
  line(490, 305, 540, 340);
  line(560, 360, 570, 400);
  line(560, 415, 510, 420);
  line(490, 420, 460, 405);
  line(435, 395, 115, 305);
  line(580, 415, 790, 495);
  line(810, 500, 990, 545);
  line(1010, 555, 1025, 565);


//star names
textSize(30);
fill(255);
  text("Ain",490,290);
  text("Aldebaran", 320, 430);
  text("Elnath",100,80);
  text("Prima Hyadum",580,400);
  text("Secunda Hyadum",570,350);
  text("Tianguan",0,330);
  text("Pleiades",600,200);


  pop();
}


function taurword(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,700);
  fill(0);
  textSize(30);
  text('Taurus', 510, 35);
  textSize(20);
  text("Stars Named in Constellation",510,65);
  text("Ain",510,95);
  text("Aldebaran",510,125);
  text("Elnath",510,155);
  text("Prima Hyadum",510,185);
  text("Secunda Hyadum",510,215);
  text("Tianguan",510,245);
  

  text("Can be seen at between +90° and -65°", 510, 330);
  text("in the northern hemisphere", 510, 360);
  text("Taurus contains the Pleiades and the", 510, 390);
  text("Hyades, two open clusters", 510, 420);
  
  pop();
}




function ophiuchus (lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  //stars
  fill(255);
  stroke(255);
  ellipse(140, 500, 10, 10);
  ellipse(200, 300, 10, 10);
  ellipse(230, 270, 10, 10);
  ellipse(280, 130, 10, 10);
  ellipse(430, 200, 10, 10);
  ellipse(620, 450, 10, 10);
  ellipse(600, 470, 10, 10);
  ellipse(490, 550, 10, 10);
  ellipse(360, 620, 10, 10);

  pop();
}


function ophline(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(255);
  stroke(255);
  strokeWeight(2);
  line(290, 135, 420, 200);
  line(280, 135, 235, 260);
  line(225, 275, 205, 295);
  line(430, 200, 620, 450);
  line(620, 455, 600, 470);
  line(600, 470, 495, 545);
  line(490, 550, 365, 615);
  line(355, 615, 235, 275);
  line(200, 305, 145, 490);



//star names
textSize(30);
fill(255);
text("Barnard’s Star",30,230);
ellipse(150,250,10,10);
text("Cebalrai",250,280);
text("Marfik",550,350);
ellipse(550,360,10,10);
text("Rasalhague",200,110);
text("Sabik",300,660);
text("Sinistra",100,540);
text("Yed Posterior",600,500);
text("Yed Prior",640,460);

  pop();
}

function ophword(lx,ly,r,s){
  push();

  translate(lx, ly);
  rotate(r);
  scale(s);

  fill(179, 179, 179);
  rect(500, 0, 400,700);
  fill(0);
  textSize(30);
  text('Ophiuchus', 510, 35);
  textSize(20);
  text("Stars Named in Constellation",510,65);
  text("Barnard’s Star",510,95);
  text("Cebalrai",510,125);
  text("Marfik",510,155);
  text("Rasalhague",510,185);
  text("Sabik",510,215);
  text("Sinistra",510,245);
  text("Yed Posterior",510,275);
  text("Yed Prior",510,305);
  

  text("Can be seen at between +80° and -80°", 510, 360);
  text("in the southern hemisphere", 510, 390);
  text("Ophiuchus is a constellation that crossed", 510, 420);
  text("the ecliptic and despite attempts to be", 510, 450);
  text("added to the zodiac constellations,", 510, 480);
  text ("this constellation belongs to the Hercules", 510, 510);
  text("Family of constellations", 510, 540);

  pop();
}

