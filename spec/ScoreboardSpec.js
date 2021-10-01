describe("Scoreboard", () => {
  let scoreboard;

  beforeEach(() => {
    scoreboard = new Scoreboard();
  });

  it("starts with the first frame", () => {
    expect(scoreboard.frame).toEqual(1);
  });
});
