
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

function main() {

  players[0] = new Player();
  players[1] = new Player();

  players[0].pad = new Box();
  players[1].pad = new Box();

  console.log(players);
}

main();


