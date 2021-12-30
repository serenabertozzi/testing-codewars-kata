const isValidWalk = (walk) => {
  let dx = 0;
  let dy = 0;

  walk.forEach((direction) => {
    switch (direction) {
      case "n":
        dy++;
        break;
      case "s":
        dy--;
        break;
      case "w":
        dx++;
        break;
      case "e":
        dx--;
        break;
    }
  });

  return walk.length === 10 && dx === 0 && dy === 0;
};

module.exports = isValidWalk;
