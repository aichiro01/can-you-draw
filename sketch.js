let gamestate = "title";


function setup() {
  createCanvas(800, 800);

  background(255, 255, 255);

    myButton = new Clickable();

  myButton.onPress = function () {
    this.color = "#00FF00";
  };
  myButton.width = 400;
  myButton.height = 200;
  myButton.locate(200, 500);
  myButton.text = "Play";
  myButton.color = "#00FF00";
  myButton.textSize = 70;
myButton.textFont = "monospace";

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
      case"lvl6":
      play5();
      break;
      case"lvl7":
      play6();
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

function titleScreen(){
  noStroke();
   fill(255);
   rect(0, 0, 800, 800);
   fill(245, 245, 220);
   strokeWeight(1);
   rect(0, 0, 800, 40, 20);
   rect(0, 760, 800, 40, 20);
   rect(0, 0, 20, 800, 20);
   rect(780, 0, 20, 800, 20);
   stroke(255);
   fill(0);
   textSize(80);
   textAlign(CENTER);
   text('Can you Draw?', width*0.5, height*0.35);
   fill(245, 300, 220);
   textSize(40);
   textAlign(CENTER);
   text('Dell', width*0.5, height*.99);
   fill(0, 255, 0);
   ellipse(700, 780, 20, 20);
   fill(245, 245, 220);
   stroke(1);
   ellipse(750, 780, 30, 30);
   fill(58, 58, 58);
   ellipse(750, 780, 10, 15);

}

function intro() {
  noStroke();
   fill(255);
   rect(0, 0, 800, 800);
   fill(245, 245, 220);
   strokeWeight(1);
   rect(0, 0, 800, 40);
   rect(0, 760, 800, 40);
   rect(0, 0, 20, 800);
   rect(780, 0, 20, 800);
   stroke(255);
   fill(0);
   textAlign(CENTER);
   textSize(35);
   text('Info:', width*0.5, height*0.1);
   textSize(20);
   textSize(22);
   text('Replicate each image to the best of your ability', width*0.5, height*0.2);
   text('You can only do it in one line', width*0.5, height*0.3);
   text('Clear canvas per drawing', width*0.5, height*0.4);
   textSize(35);
   text('Controls:', width*0.5, height*0.75);
   textSize(22);
   text('Press "c" to clear canvas', width*0.5, height*0.85);
   fill(245, 300, 220);
   textSize(40);
   textAlign(CENTER);
   text('Dell', width*0.5, height*.99);
   fill(0, 255, 0);
   ellipse(700, 780, 20, 20);
   fill(245, 245, 220);
   stroke(1);
   ellipse(750, 780, 30, 30);
   fill(58, 58, 58);
   ellipse(750, 780, 10, 15);
   myButton.width = 70;
   myButton.height = 50;
   myButton.locate(width*0.87, height*0.88);
   myButton.text = "Begin";
   myButton.color = "#00FF00";
   myButton.textSize = 20;
   myButton.textFont = "monospace";
   myButton.onPress = function(){
    gamestate = "lvl1";
 }
}

function play(){
  noStroke();
  fill(58);
  rect(20, 40, 190, 790);
  rect(20, 40, 790, 300);
  rect(600, 40, 200, 800);
  rect(20, 550, 800, 700);
  fill(245, 300, 220);
  fill(245, 245, 220);
  strokeWeight(1);
  rect(0, 0, 800, 40);
  rect(0, 760, 800, 40);
  rect(0, 0, 20, 800);
  rect(780, 0, 20, 800);
  textSize(40);
  textAlign(CENTER);
  text('Dell', width*0.5, height*.99);
  fill(0, 255, 0);
  ellipse(700, 780, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(750, 780, 30, 30);
  fill(58, 58, 58);
  ellipse(750, 780, 10, 15);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.1);
  textSize(20);
  text('Tree', width*0.5, height*0.16);
   myButton.width = 200;
   myButton.height = 70;
   myButton.locate(width*0.38, height*0.8);
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
  fill(58);
  rect(20, 40, 190, 790);
  rect(20, 40, 790, 300);
  rect(600, 40, 200, 800);
  rect(20, 550, 800, 700);
  fill(245, 300, 220);
  fill(245, 245, 220);
  strokeWeight(1);
  rect(0, 0, 800, 40);
  rect(0, 760, 800, 40);
  rect(0, 0, 20, 800);
  rect(780, 0, 20, 800);
  textSize(40);
  textAlign(CENTER);
  text('Dell', width*0.5, height*.99);
  fill(0, 255, 0);
  ellipse(700, 780, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(750, 780, 30, 30);
  fill(58, 58, 58);
  ellipse(750, 780, 10, 15);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.1);
  textSize(20);
  text('Fish', width*0.5, height*0.16);
  myButton.width = 200;
  myButton.height = 70;
  myButton.locate(width*0.38, height*0.8);
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
  fill(58);
  rect(20, 40, 190, 790);
  rect(20, 40, 790, 300);
  rect(600, 40, 200, 800);
  rect(20, 550, 800, 700);
  fill(245, 300, 220);
  fill(245, 245, 220);
  strokeWeight(1);
  rect(0, 0, 800, 40);
  rect(0, 760, 800, 40);
  rect(0, 0, 20, 800);
  rect(780, 0, 20, 800);
  textSize(40);
  textAlign(CENTER);
  text('Dell', width*0.5, height*.99);
  fill(0, 255, 0);
  ellipse(700, 780, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(750, 780, 30, 30);
  fill(58, 58, 58);
  ellipse(750, 780, 10, 15);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.1);
  textSize(20);
  text('Lollipop', width*0.5, height*0.16);
  myButton.width = 200;
  myButton.height = 70;
  myButton.locate(width*0.38, height*0.8);
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
  fill(58);
  rect(20, 40, 190, 790);
  rect(20, 40, 790, 300);
  rect(600, 40, 200, 800);
  rect(20, 550, 800, 700);
  fill(245, 300, 220);
  fill(245, 245, 220);
  strokeWeight(1);
  rect(0, 0, 800, 40);
  rect(0, 760, 800, 40);
  rect(0, 0, 20, 800);
  rect(780, 0, 20, 800);
  textSize(40);
  textAlign(CENTER);
  text('Dell', width*0.5, height*.99);
  fill(0, 255, 0);
  ellipse(700, 780, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(750, 780, 30, 30);
  fill(58, 58, 58);
  ellipse(750, 780, 10, 15);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.1);
  textSize(20);
  text('Spider', width*0.5, height*0.16);
  myButton.width = 200;
  myButton.height = 70;
  myButton.locate(width*0.38, height*0.8);
  myButton.text = "lvl5";
  myButton.color = "#00FF00";
  myButton.textSize = 30;
  myButton.textFont = "monospace";
  myButton.onPress = function(){
   gamestate = "lvl5";
}
  }



function play4() {
  noStroke();
  fill(58);
  rect(20, 40, 190, 790);
  rect(20, 40, 790, 300);
  rect(600, 40, 200, 800);
  rect(20, 550, 800, 700);
  fill(245, 300, 220);
  fill(245, 245, 220);
  strokeWeight(1);
  rect(0, 0, 800, 40);
  rect(0, 760, 800, 40);
  rect(0, 0, 20, 800);
  rect(780, 0, 20, 800);
  textSize(40);
  textAlign(CENTER);
  text('Dell', width*0.5, height*.99);
  fill(0, 255, 0);
  ellipse(700, 780, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(750, 780, 30, 30);
  fill(58, 58, 58);
  ellipse(750, 780, 10, 15);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.1);
  textSize(20);
  text('ButterFly', width*0.5, height*0.16);
  myButton.width = 200;
  myButton.height = 70;
  myButton.locate(width*0.38, height*0.8);
  myButton.text = "lvl6";
  myButton.color = "#00FF00";
  myButton.textSize = 30;
  myButton.textFont = "monospace";
  myButton.onPress = function(){
   gamestate = "lvl6";
}
}

function play5() {
  noStroke();
  fill(58);
  rect(20, 40, 190, 790);
  rect(20, 40, 790, 300);
  rect(600, 40, 200, 800);
  rect(20, 550, 800, 700);
  fill(245, 300, 220);
  fill(245, 245, 220);
  strokeWeight(1);
  rect(0, 0, 800, 40);
  rect(0, 760, 800, 40);
  rect(0, 0, 20, 800);
  rect(780, 0, 20, 800);
  textSize(40);
  textAlign(CENTER);
  text('Dell', width*0.5, height*.99);
  fill(0, 255, 0);
  ellipse(700, 780, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(750, 780, 30, 30);
  fill(58, 58, 58);
  ellipse(750, 780, 10, 15);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.1);
  textSize(20);
  text('Head', width*0.5, height*0.16);
  myButton.width = 200;
  myButton.height = 70;
  myButton.locate(width*0.38, height*0.8);
  myButton.text = "lvl7";
  myButton.color = "#00FF00";
  myButton.textSize = 30;
  myButton.textFont = "monospace";
  myButton.onPress = function(){
   gamestate = "lvl7";
}
  }



function play6() {
  noStroke();
  fill(58);
  rect(20, 40, 190, 790);
  rect(20, 40, 790, 300);
  rect(600, 40, 200, 800);
  rect(20, 550, 800, 700);
  fill(245, 300, 220);
  fill(245, 245, 220);
  strokeWeight(1);
  rect(0, 0, 800, 40);
  rect(0, 760, 800, 40);
  rect(0, 0, 20, 800);
  rect(780, 0, 20, 800);
  textSize(40);
  textAlign(CENTER);
  text('Dell', width*0.5, height*.99);
  fill(0, 255, 0);
  ellipse(700, 780, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(750, 780, 30, 30);
  fill(58, 58, 58);
  ellipse(750, 780, 10, 15);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Can you Draw:', width*0.5, height*0.1);
  textSize(20);
  text('Shoe', width*0.5, height*0.16);
  myButton.width = 200;
  myButton.height = 70;
  myButton.locate(width*0.38, height*0.8);
  myButton.text = "End";
  myButton.color = "#00FF00";
  myButton.textSize = 30;
  myButton.textFont = "monospace";
  myButton.onPress = function(){
   gamestate = "gameover";
}
  }


function gameOver() {
  noStroke();
  fill(0,255,0);
  rect(0, 0, 800, 800);
  textAlign(CENTER);
  noStroke();
  fill(245, 245, 220);
  strokeWeight(1);
  rect(0, 0, 800, 40);
  rect(0, 760, 800, 40);
  rect(0, 0, 20, 800);
  rect(780, 0, 20, 800);
  stroke(255);
  fill(255);
  textSize(60);
  text('Results:', width*0.5, height*0.23);
  textSize(100);
  text('You Can!', width*0.5, height*0.55);
  fill(245, 300, 220);
  textSize(40);
  textAlign(CENTER);
  text('Dell', width*0.5, height*.99);
  fill(0, 255, 0);
  ellipse(700, 780, 20, 20);
  fill(245, 245, 220);
  stroke(1);
  ellipse(750, 780, 30, 30);
  fill(58, 58, 58);
  ellipse(750, 780, 10, 15);
  myButton.locate(-380, -380);
}
