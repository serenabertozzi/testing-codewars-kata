const chickenSexer = require("./chicken.js");

describe("chickenSexer", () => {
  it("given two equal answers, result is 1", () => {
    expect(chickenSexer("M", "M")).toBe(1);
  });
});
