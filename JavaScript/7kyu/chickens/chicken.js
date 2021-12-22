function chickenSexer(bobsDecisions, expertDecisions) {
  let result = 0;

  if (bobsDecisions === expertDecisions) {
    result++;
  }
  return result;
}

module.exports = chickenSexer;
