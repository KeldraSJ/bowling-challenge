describe("Scoreboard", () => {
  let scoreboard;

  beforeEach(() => {
    scoreboard = new Scoreboard();
  });

  it("starts with the first frame", () => {
    expect(scoreboard.frame).toEqual(1);
  });

  it("starts with a score of zero", () => {
    expect(scoreboard.score).toEqual(0);
  });

  describe("Roll", () => {
    it("each roll should add to the scorecard", () => {
      scoreboard.roll(5);
      expect(scoreboard.score).toEqual(5);
    });
  });
});
