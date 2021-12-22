function chickenSexer(bobsDecisions, expertDecisions) {
  let result = 0;

  bobsDecisions.forEach((bobAnswer, i) => {
    if (bobAnswer === expertDecisions[i]) {
      result++;
    }
    if (bobAnswer === "?" || expertDecisions[i] === "?") {
      result = result + 0.5;
    }
  });

  return result;
}

module.exports = chickenSexer;
