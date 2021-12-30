const isValidWalk = (walk) => {
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;

  if (walk.length === 10) {
    //equal number of opposite directions
    // count every n, s , w and e
    // if n == s and w == e returns true

    walk.forEach((direction) => {
      switch (direction) {
        case "n":
          n++;
          break;
        case "s":
          s++;
          break;
        case "w":
          w++;
          break;
        case "e":
          e++;
          break;
      }
    });

    if (n == s && w == e) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

module.exports = isValidWalk;
