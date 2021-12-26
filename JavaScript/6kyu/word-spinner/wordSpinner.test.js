const spinWords = require("./wordSpinner.js");

describe("spinWords", () => {
  it("returns a word", () => {
    expect(spinWords("test")).toBe("test");
  });
  it("returns a capitalized word", () => {
    expect(spinWords("Test")).toBe("Test");
  });
  it("returns a reversed word", () => {
    expect(spinWords("hello")).toBe("olleh");
  });
  it("returns multiple words without reversing them", () => {
    expect(spinWords("a test")).toBe("a test");
  });
});
