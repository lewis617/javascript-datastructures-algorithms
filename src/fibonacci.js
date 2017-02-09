function getFibonacci(num) {
  var fabonacci = [1, 2];
  for (var i = 2; i < num; i++) {
    fabonacci[i] = fabonacci[i - 2] + fabonacci[i - 1]
  }
  return fabonacci;
}

module.exports = getFibonacci;