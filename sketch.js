let gamestate = "title";

let drawStart = false;

let timeLimit = 240;

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
   gamestate = "lvl1";
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

function play() {

  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40, 20);
  rect(0, 460, 500, 40, 20);
  rect(0, 0, 20, 500, 20);
  rect(480, 0, 20, 500, 20);
  fill(58);
  rect(20, 40, 150, 420);
  rect(20, 40, 440, 150);
  rect(460, 40, 20, 420);
  rect(20, 430, 460, 30);
  fill(0, 255, 0);
  ellipse(400, 480, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(450, 480, 30, 30);
  fill(58, 58, 58);
  ellipse(450, 480, 10, 15);

image(pic0,45, 200);

  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.2);
  textSize(20);
  text('Hydrant', width*0.5, height*0.3);
  textSize(10);
  text('You will only have 60 seconds per drawing', width*0.5, height*0.89);


  if (drawStart == false){
    background(255, 255, 255);
    drawStart = true;
  }

  let currentTime = int(millis()/ 1000);
  countDown = timeLimit - currentTime;
  textSize(10);
  text("TIMER: " + countDown, 100, 400);

  if (countDown < 180){
    countDown = 0;{
      gamestate = 'lvl2';}
    }
  myButton.locate(-190, -350);
}

function play1() {

  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40, 20);
  rect(0, 460, 500, 40, 20);
  rect(0, 0, 20, 500, 20);
  rect(480, 0, 20, 500, 20);
  fill(58);
  rect(20, 40, 150, 420);
  rect(20, 40, 440, 150);
  rect(460, 40, 20, 420);
  rect(20, 430, 460, 30);
  fill(0, 255, 0);
  ellipse(400, 480, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(450, 480, 30, 30);
  fill(58, 58, 58);
  ellipse(450, 480, 10, 15);

image(pic1,45, 200);

  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Draw what is shown below', width*0.5, height*0.2);
  textSize(12);
  text('Clear canvas each drawing by pressing "C"', width*0.5, height*0.35);
  textSize(10);
  text('You will only have 60 seconds per drawing', width*0.5, height*0.89);

  if (drawStart == false){
    background(255, 255, 255);
    drawStart = true;
  }

  let currentTime = int(millis()/ 1000);
  countDown = timeLimit - currentTime;
  textSize(10);
  text("TIMER: " + countDown, 100, 400);

  if (countDown < 120){
    countDown = 0;{
      gamestate = 'lvl3';}
    }
  myButton.locate(-190, -350);
}

function play2() {

  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40, 20);
  rect(0, 460, 500, 40, 20);
  rect(0, 0, 20, 500, 20);
  rect(480, 0, 20, 500, 20);
  fill(58);
  rect(20, 40, 150, 420);
  rect(20, 40, 440, 150);
  rect(460, 40, 20, 420);
  rect(20, 430, 460, 30);
  fill(0, 255, 0);
  ellipse(400, 480, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(450, 480, 30, 30);
  fill(58, 58, 58);
  ellipse(450, 480, 10, 15);


image(pic2,45, 200);

  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Draw what is shown below', width*0.5, height*0.2);
  textSize(12);
  text('Clear canvas each drawing by pressing "C"', width*0.5, height*0.35);
  textSize(10);
  text('You will only have 60 seconds per drawing', width*0.5, height*0.89);

  if (drawStart == false){
    background(255, 255, 255);
    drawStart = true;
  }

  let currentTime = int(millis()/ 1000);
  countDown = timeLimit - currentTime;
  textSize(10);
  text("TIMER: " + countDown, 100, 400);

  if (countDown < 60){
    countDown = 0;{
      gamestate = 'lvl4';}
    }
  myButton.locate(-190, -350);
}

function play3() {

  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40, 20);
  rect(0, 460, 500, 40, 20);
  rect(0, 0, 20, 500, 20);
  rect(480, 0, 20, 500, 20);
  fill(58);
  rect(20, 40, 150, 420);
  rect(20, 40, 440, 150);
  rect(460, 40, 20, 420);
  rect(20, 430, 460, 30);
  fill(0, 255, 0);
  ellipse(400, 480, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(450, 480, 30, 30);
  fill(58, 58, 58);
  ellipse(450, 480, 10, 15);

image(pic3,45, 200);

  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Draw what is shown below', width*0.5, height*0.2);
  textSize(12);
  text('Clear canvas each drawing by pressing "C"', width*0.5, height*0.35);
  textSize(10);
  text('You will only have 60 seconds per drawing', width*0.5, height*0.89);

  if (drawStart == false){
    background(255, 255, 255);
    drawStart = true;
  }

  let currentTime = int(millis()/ 1000);
  countDown = timeLimit - currentTime;
  textSize(10);
  text("TIMER: " + countDown, 100, 400);

  if (countDown < 0){
    countDown = 0;{
      winloss();
      gamestate = 'gameover';}
    }
  myButton.locate(-190, -350);
}


function gameOver() {
  background(goR, goG, goB);
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
  text('Results!', width*0.5, height*0.23);
  textSize(15);
  text('How did you do?', width*0.5, height*0.35);
  textSize(100);
  text(goText, width * 0.5, height * 0.65)
  fill(0, 255, 0);
  ellipse(400, 480, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(450, 480, 30, 30);
  fill(58, 58, 58);
  ellipse(450, 480, 10, 15);
}

function winloss() {
  let result = random(10);
  console.log(result);
  if (result < 5) {
    goR = 0;
    goG = 255;
    goB = 0;
    goFill = 255;
    goText = 'You Can!'
  } else if (result >=5 ) {
    goR = 255;
    goB = 0;
    goG = 0;
    goFill = 0;
    goText = 'You Cant!';  }
}
