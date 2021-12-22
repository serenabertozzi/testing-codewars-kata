function chickenSexer(bobsDecisions, expertDecisions) {
  let result = 0;

  for (let i = 0; i < bobsDecisions.length; i++) {
    expertDecisions.forEach((answer) => {
      if (bobsDecisions[i] === answer) {
        result++;
      } else if (bobsDecisions === "?" || answer === "?") {
        (result = result + 0), 5;
      }
    });
  }

  return result;
}

module.exports = chickenSexer;
