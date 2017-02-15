function Queue() {
  // 私有变量 items，用于记录数组
  var items = [];
  // 入队
  this.enqueue = function (element) {
    items.push(element);
  };
  // 出队
  this.dequeue = function () {
    return items.shift();
  };
  // 查看队列的第一个元素
  this.front = function () {
    return items[0];
  };
  // 查看队列是否为空
  this.isEmpty = function () {
    return items.length == 0;
  };
  // 查看队列的长度
  this.size = function () {
    return items.length;
  };
  // 将数组转为字符串并返回
  this.toString = function () {
    return items.toString();
  };
}

module.exports = Queue;