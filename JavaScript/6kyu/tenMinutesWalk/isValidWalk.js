const isValidWalk = (walk) => {
  let x = 0;
  let y = 0;

  if (walk.length === 10) {
    walk.forEach((direction) => {
      switch (direction) {
        case "n":
          y++;
          break;
        case "s":
          y--;
          break;
        case "w":
          x++;
          break;
        case "e":
          x--;
          break;
      }
    });

    if (x == y) {
      return true;
    }
    return false;
  }
  return false;
};

module.exports = isValidWalk;
