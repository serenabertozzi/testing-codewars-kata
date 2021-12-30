const isValidWalk = require("./isValidWalk.js");

describe("isValidWalk", () => {
  it("inputs less than 10 directions", () => {
    expect(isValidWalk(["w"])).toEqual(false);
  });
  it("inputs more than 10 directions", () => {
    expect(
      isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
    ).toEqual(false);
  });
  it("inputs 10 directions", () => {
    expect(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toEqual(true);
  });
  it("doesn't return to starting position", () => {
    expect(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toEqual(false);
  });
});
