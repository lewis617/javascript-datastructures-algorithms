function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var c1 = l1,
    c2 = l2,
    l3, c3,
    s1 = [],
    s2 = [],
    s3 = [],
    carry = 0;

  while (c1 || c2) {
    if (c1) {
      s1.push(c1.val);
      c1 = c1.next;
    }

    if (c2) {
      s2.push(c2.val);
      c2 = c2.next;
    }
  }

  while (s1.length || s2.length || carry) {
    var v1 = 0,
      v2 = 0;

    if (s1.length) {
      v1 = s1.pop();
    }

    if (s2.length) {
      v2 = s2.pop();
    }

    var sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);

    s3.push(sum % 10);
  }

  while (s3.length) {
    var val = s3.pop();
    if (!c3) {
      l3 = new ListNode(val);
      c3 = l3;
    } else {
      c3.next = new ListNode(val);
      c3 = c3.next;
    }
  }
  return l3;
};

module.exports = addTwoNumbers;