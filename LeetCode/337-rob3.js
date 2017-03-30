/**
 * Definition for a binary tree node.
 * function TreeNode(key) {
 *     this.val = key;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  var dfs = function (node) {
    if (node === null) {
      return [null, null];
    }
    var left = dfs(node.left);
    var right = dfs(node.right);
    var res = [];
    res[0] = left[1] + right[1] + node.key;
    res[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return res;
  };

  var num = dfs(root);
  return Math.max(num[0], num[1]);
};

module.exports = rob;