const bouncingBall = require("./bouncingBall");

describe("bouncingBall", () => {
  it("returns 1", () => {
    expect(bouncingBall(10.0, 0.5, 5)).toEqual(1);
  });

  it("returns 1", () => {
    expect(bouncingBall(11.0, 0.5, 6)).toEqual(1);
  });

  it("returns 1", () => {
    expect(bouncingBall(13.0, 0.6, 8)).toEqual(1);
  });

  it("returns 3", () => {
    expect(bouncingBall(4.0, 0.5, 1)).toEqual(3);
  });

  it("returns 3", () => {
    expect(bouncingBall(3.0, 0.66, 1.5)).toEqual(3);
  });

  it("returns 5", () => {
    expect(bouncingBall(6.0, 0.5, 1)).toEqual(5);
  });

  it("returns 15", () => {
    expect(bouncingBall(30.0, 0.66, 1.5)).toEqual(15);
  });

  it("returns -1 if condition is not met", () => {
    expect(bouncingBall(0.0, 0.66, 1.5)).toEqual(-1);
    expect(bouncingBall(5.0, -2, 1.5)).toEqual(-1);
    expect(bouncingBall(5.0, 2, 1.5)).toEqual(-1);
    expect(bouncingBall(2, 0.5, 7)).toEqual(-1);
  });
});
