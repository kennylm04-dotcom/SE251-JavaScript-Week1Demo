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
  }
}

let players = [];
let pads = [];           //new array 

function main() {
  players[0] = new Player();
  players[1] = new Player();

  players[0].pad = new Box();
  players[1].pad = new Box();

  //  store the players
  pads[0] = players[0].pad;
  pads[1] = players[1].pad;

  
  pads[0].x = 20;
  pads[0].y = (500 - pads[0].h) / 2;

  pads[1].x = 800 - 20 - pads[1].w;
  pads[1].y = (500 - pads[1].h) / 2;

 
  console.log(pads);
}

main();