let gamestate = "title";

let drawStart = false;

let countDown;

let goR;

let goG;

let goB;

let goFill;

let goText;

let pic0;

let pic1;

let pic2;

let pic3;



function preload(){
  pic0 = loadImage('assets/0.png');
  pic1 = loadImage('assets/1.png');
  pic2 = loadImage('assets/2.png');
  pic3 = loadImage('assets/3.png');
}

function setup() {
  createCanvas(500, 500);
  background(255);

  frameRate(80);

  myButton = new Clickable(); //Create button

  myButton.onPress = function () {
    //When myButton is pressed
    this.color = "#00FF00"; //Change button color
    alert("Shall we begin?"); //Show an alert message
  };
  myButton.width = 250;
  myButton.height = 100;
  myButton.locate(125, 250); //Position Button
  myButton.text = "Play";       //Text of the clickable (string)
  myButton.color = "#00FF00";       //Background color of the clickable (hex number as a string)
  myButton.textSize = 30;           //Size of the text (integer)
myButton.textFont = "monospace"; //Font of the text (string)

  myButton.onPress = function(){
   gamestate = "info";
}


}

function keyPressed(){
  if (key === 'c'){
    background(255);
  }
}

function draw() {
  switch (gamestate){
      case"title":
      titleScreen();
      break;
      case"info":
      intro();
      break;
      case"lvl1":
      play();
      break;
      case"lvl2":
      play1();
      break;
      case"lvl3":
      play2();
      break;
      case"lvl4":
      play3();
      break;
      case"lvl5":
      play4();
      break;
      case 'gameover':
      gameOver();
  }

  myButton.draw();

   fill(255);
  if (mouseIsPressed === true){
    stroke(5);
   line(mouseX, mouseY, pmouseX, pmouseY);
  }
}



function titleScreen() {
  noStroke();
   fill(58, 58, 58);
   rect(10, 20, 485, 475);
   fill(245, 245, 220);
   strokeWeight(1);
   rect(0, 0, 500, 40, 20);
   rect(0, 460, 500, 40, 20);
   rect(0, 0, 20, 500, 20);
   rect(480, 0, 20, 500, 20);
   stroke(255);
   fill(255);
   textSize(50);
   textAlign(CENTER);
   text('Can you Draw?', width*0.5, height*0.35);
   fill(0, 255, 0);
   ellipse(400, 480, 20, 20);
   fill(245, 245, 220);
   stroke(1);
   ellipse(450, 480, 30, 30);
   fill(58, 58, 58);
   ellipse(450, 480, 10, 15);
}

function intro() {
  noStroke();
   fill(58, 58, 58);
   rect(10, 20, 485, 475);
   fill(245, 245, 220);
   strokeWeight(1);
   rect(0, 0, 500, 40, 20);
   rect(0, 460, 500, 40, 20);
   rect(0, 0, 20, 500, 20);
   rect(480, 0, 20, 500, 20);
   stroke(255);
   fill(255);
   textAlign(CENTER);
   textSize(35);
   text('Info:', width*0.5, height*0.18);
   textSize(20);
   textSize(22);
   text('Replicate each image to the best of your ability', width*0.5, height*0.3);
   text('You can only do it in one line', width*0.5, height*0.4);
   text('Clear canvas per drawing', width*0.5, height*0.5);
   textSize(35);
   text('Controls:', width*0.5, height*0.65);
   textSize(22);
   text('Press "c" to clear canvas', width*0.5, height*0.75);
   fill(0, 255, 0);
   ellipse(400, 480, 20, 20);
   fill(245, 245, 220);
   stroke(1);
   ellipse(450, 480, 30, 30);
   fill(58, 58, 58);
   ellipse(450, 480, 10, 15);
   myButton.width = 90;
   myButton.height = 70;
   myButton.locate(380, 380);
   myButton.text = "Next";
   myButton.color = "#00FF00";
   myButton.textSize = 30;
   myButton.textFont = "monospace";
   myButton.onPress = function(){
    gamestate = "lvl1";
 }
}

function play() {

  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40, 20);
  rect(0, 460, 500, 40, 20);
  rect(0, 0, 20, 500, 20);
  rect(480, 0, 20, 500, 20);
  fill(58);
  rect(20, 40, 200, 420);
  rect(20, 40, 440, 150);
  rect(460, 40, 20, 420);
  rect(20, 372, 460, 90);
  fill(0, 255, 0);
  ellipse(400, 480, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(450, 480, 30, 30);
  fill(58, 58, 58);
  ellipse(450, 480, 10, 15);

  image(pic0,45, 197);

  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.2);
  textSize(20);
  text('Tree', width*0.5, height*0.3);

  if (drawStart == false){
    background(255,255,255);
    drawStart = true;
  }
  myButton.width = 90;
  myButton.height = 70;
  myButton.locate(380, 380);
  myButton.text = "Lvl2";
  myButton.color = "#00FF00";
  myButton.textSize = 30;
  myButton.textFont = "monospace";
  myButton.onPress = function(){
   gamestate = "lvl2";
}

}

function play1() {

  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40, 20);
  rect(0, 460, 500, 40, 20);
  rect(0, 0, 20, 500, 20);
  rect(480, 0, 20, 500, 20);
  fill(58);
  rect(20, 40, 200, 420);
  rect(20, 40, 440, 150);
  rect(460, 40, 20, 420);
  rect(20, 372, 460, 90);
  fill(0, 255, 0);
  ellipse(400, 480, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(450, 480, 30, 30);
  fill(58, 58, 58);
  ellipse(450, 480, 10, 15);

  image(pic0,45, 197);

  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.2);
  textSize(20);
  text('Fish', width*0.5, height*0.3);

  if (drawStart == false){
    background(255, 255, 255);
    drawStart = true;
  }

  myButton.width = 90;
  myButton.height = 70;
  myButton.locate(380, 380);
  myButton.text = "Lvl3";
  myButton.color = "#00FF00";
  myButton.textSize = 30;
  myButton.textFont = "monospace";
  myButton.onPress = function(){
   gamestate = "lvl3";
}
}

function play2() {

  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40, 20);
  rect(0, 460, 500, 40, 20);
  rect(0, 0, 20, 500, 20);
  rect(480, 0, 20, 500, 20);
  fill(58);
  rect(20, 40, 200, 420);
  rect(20, 40, 440, 150);
  rect(460, 40, 20, 420);
  rect(20, 372, 460, 90);
  fill(0, 255, 0);
  ellipse(400, 480, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(450, 480, 30, 30);
  fill(58, 58, 58);
  ellipse(450, 480, 10, 15);

  image(pic0,45, 197);

  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.2);
  textSize(20);
  text('Lolipop', width*0.5, height*0.3);


  if (drawStart == false){
    background(255, 255, 255);
    drawStart = true;
  }
  myButton.width = 90;
  myButton.height = 70;
  myButton.locate(380, 380);
  myButton.text = "Lvl4";
  myButton.color = "#00FF00";
  myButton.textSize = 30;
  myButton.textFont = "monospace";
  myButton.onPress = function(){
   gamestate = "lvl4";
}
}

function play3() {

  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40, 20);
  rect(0, 460, 500, 40, 20);
  rect(0, 0, 20, 500, 20);
  rect(480, 0, 20, 500, 20);
  fill(58);
  rect(20, 40, 200, 420);
  rect(20, 40, 440, 150);
  rect(460, 40, 20, 420);
  rect(20, 372, 460, 90);
  fill(0, 255, 0);
  ellipse(400, 480, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(450, 480, 30, 30);
  fill(58, 58, 58);
  ellipse(450, 480, 10, 15);

  image(pic0,45, 197);

  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.2);
  textSize(20);
  text('Spider', width*0.5, height*0.3);


  if (drawStart == false){
    background(255, 255, 255);
    drawStart = true;
  }
  myButton.width = 90;
  myButton.height = 70;
  myButton.locate(380, 380);
  myButton.text = "End";
  myButton.color = "#00FF00";
  myButton.textSize = 30;
  myButton.textFont = "monospace";
  myButton.onPress = function(){
   gamestate = "gameover";
}
}


function gameOver() {
  fill(0,255,0);
  rect(10, 20, 485, 475);
  textAlign(CENTER);
  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40, 20);
  rect(0, 460, 500, 40, 20);
  rect(0, 0, 20, 500, 20);
  rect(480, 0, 20, 500, 20);
  stroke(255);
  fill(255);
  textSize(60);
  text('Results:', width*0.5, height*0.23);
  textSize(100);
  text('You Can!', width*0.5, height*0.55);
  fill(0, 255, 0);
  ellipse(400, 480, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(450, 480, 30, 30);
  fill(58, 58, 58);
  ellipse(450, 480, 10, 15);
  myButton.locate(-380, -380);
}
