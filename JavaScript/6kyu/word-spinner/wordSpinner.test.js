const spinWords = require("./wordSpinner.js");

describe("spinWords", () => {
  it("returns a word", () => {
    expect(spinWords("hello")).toBe("hello");
  });
});
