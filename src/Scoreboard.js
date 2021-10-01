class Scoreboard {
  constructor(scoreboard) {
    this.frame = 1;
    this.score = 0;
  }

  roll(pins) {
    return (this.score += pins);
  }
}

let scoreboard = new Scoreboard();

// console.log(scoreboard.roll(10));
