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
});