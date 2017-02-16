function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    var node = new Node(element),
      current;

    // 链表为空直接将 head 指向新元素
    if (head === null) {
      head = node;
    } else {
      // 链表不为空需要将 current 移动到最后一个元素
      current = head;
      while (current.next) {
        current = current.next;
      }
      // 然后将最后一个元素的 next 属性指向新元素
      current.next = node;
    }
    length++;
  };

  this.removeAt = function (position) {
    // 用于跳过异常情况
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;
      // 删除头部元素
      if (position === 0) {
        head = current.next;
      } else {
        // 找出指定位置元素，并让它的前一个元素连接它的后一个元素
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }

      length--;
      return current.element;

    }
    return null;
  };

  this.insert = function (position, element) {
    // 用于跳过非法输入，对应第四个和第五个断言
    if (position > -1 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;
      // 往头部插入，对应第一个和第三个断言
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        // 往非头部插入，对应第二个断言
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        previous.next = node;
      }

      length++;

      return true;
    }
    return false;
  };

  this.toString = function () {

    var current = head,
      string = '';

    while (current) {
      string += current.element + (current.next ? ',' : '');
      current = current.next;
    }
    return string;

  };

  this.indexOf = function (element) {
    var current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.size = function () {
    return length;
  };

  this.getHead = function () {
    return head;
  };
}

module.exports = LinkedList;