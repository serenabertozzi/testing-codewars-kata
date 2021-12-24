const bouncingBall = (h, b, w) => {
  let bounces = 0;
  let firstBounce = h * b;
  let newH = h;

  if (firstBounce <= w) {
    bounces++;
  } else {
    if (firstBounce * b <= w) {
      bounces = bounces + 3;
    } else if (firstBounce * b > w) {
      while (newH * b > w) {
        bounces = bounces + 2;
        newH = newH * b;
      }
      bounces++;
    }
  }
  return bounces;
};

module.exports = bouncingBall;