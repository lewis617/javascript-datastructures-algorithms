/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
};

module.exports = myAtoi;