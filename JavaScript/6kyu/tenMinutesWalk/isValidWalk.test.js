const isValidWalk = require("./isValidWalk.js");

describe("isValidWalk", () => {
  it("inputs less than 10 directions", () => {
    expect(isValidWalk(["w"])).toEqual(false);
  });
});
