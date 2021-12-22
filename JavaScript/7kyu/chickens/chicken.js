function chickenSexer(bobsDecisions, expertDecisions) {
  let result = 0;

  if (bobsDecisions === expertDecisions) {
    result++;
  } else if (bobsDecisions === "?" || expertDecisions === "?") {
    (result = result + 0), 5;
  }
  return result;
}

module.exports = chickenSexer;
