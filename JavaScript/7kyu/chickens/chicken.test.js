const chickenSexer = require("./chicken.js");

describe("chickenSexer", () => {
  it("given two equal answers, result is 1", () => {
    expect(chickenSexer(["M"], ["M"])).toBe(1);
  });
  it("given two different answers, result is 0", () => {
    expect(chickenSexer(["F"], ["M"])).toBe(0);
  });

  it("given one '?' answer, result is 0.5", () => {
    expect(chickenSexer(["?"], ["M"])).toBe(0);
  });
  it("given two equal arrays of answers, result is 2", () => {
    expect(chickenSexer(["M", "F"], ["M", "F"])).toBe(2);
  });
});
