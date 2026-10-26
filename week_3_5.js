class Box {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 15;
    this.h = 80;
  }
}

class Player {
  constructor() {
    this.pad = null;
    this.score = 0;
  }
}

class Ball {
  constructor() {
    this.x = 400;
    this.y = 250;
    this.vx = 5;
    this.vy = 3;
  }
}

let players = [];
let pads = []; //new array
let ball = new Ball();

function updateScore() {
  if (ball.x > 800) {
    
    players[0].score++;
  } else if (ball.x < 0) {
   
    players[1].score++;
  } else {
    return; 
  }

  
  
  ball.x = 400;
  ball.y = 250;

  console.log(players[0].score + " | " + players[1].score);
}

function update() {
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y < 0 || ball.y > 500) {
    ball.vy = -ball.vy;
  }

  updateScore();

  for (let i = 0; i < players.length; i++) {
    scoreDivs[i].innerText = players[i].score;
  }
}


function main() {
  players[0] = new Player();
  players[1] = new Player();

  players[0].pad = new Box();
  players[1].pad = new Box();

  
  pads[0] = players[0].pad;
  pads[1] = players[1].pad;

  pads[0].x = 20;
  pads[0].y = (500 - pads[0].h) / 2;

  pads[1].x = 800 - 20 - pads[1].w;
  pads[1].y = (500 - pads[1].h) / 2;

  console.log("0 | 0");

  setInterval(update, 1000 / 60);
}
let scoreDivs = document.querySelectorAll("#score div");
main();