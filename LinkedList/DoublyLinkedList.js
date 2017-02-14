function DoublyLinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  var length = 0;
  var head = null;
  var tail = null;

  this.insert = function (position, element) {
    if (position > -1 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }

      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        current.prev = node;
        previous.next = node;
        node.prev = previous;
      }
      length++;

      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    if (head !== null && position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;
      if (position === 0) {
        if (length === 1) {
          head = null;
          tail = null;
        } else {
          head = current.next;
          head.prev = null;
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      return false;
    }
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
}

module.exports = DoublyLinkedList;