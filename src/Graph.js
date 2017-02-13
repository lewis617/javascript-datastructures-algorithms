var Dictionary = require('./Dictionary');
var Queue = require('./Queue');

function Graph() {
  var vertices = [];
  var adjList = new Dictionary();

  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.getAdjList = function () {
    return adjList.getItems();
  };

  var initializeColor = function () {
    var color = {};
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white';
    }
    return color;
  };

  this.bfs = function (v, callback) {
    var color = initializeColor(),
      queue = new Queue();

    queue.enqueue(v);


    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[v] = 'gray';
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === 'white') {
          queue.enqueue(neighbors[i]);
          color[w] = 'gray';
        }
      }
      color[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
  };

  this.BFS = function (v) {
    var color = initializeColor(),
      queue = new Queue(),
      d = {},
      pred = {};

    queue.enqueue(v);

    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[v] = 'gray';
      for (i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === 'white') {
          queue.enqueue(w);
          color[w] = 'gray';

          d[w] = d[u] + 1;
          pred[w] = u;
        }
      }
      color[u] = 'black';
    }
    return {
      distances: d,
      predecessors: pred
    };
  };

  this.dfs = function (v, callback) {
    var color = initializeColor();
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, callback);
      }

    }
  };

  var dfsVisit = function (u, color, callback) {
    if (callback) {
      callback(u);
    }
    var neighbors = adjList.get(u);
    color[u] = 'gray';
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === 'white') {
        dfsVisit(w, color, callback);
      }
    }
    color[u] = 'black';
  };

  var time = 0;
  this.DFS = function () {
    var color = initializeColor(),
      d = {},
      f = {},
      p = {};
    time = 0;

    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      f[vertices[i]] = 0;
      p[vertices[i]] = null;
    }

    for (i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        DFSVisit(vertices[i], color, d, f, p);
      }
    }

    return {
      discovery: d,
      finished: f,
      predecessors: p
    }
  };

  var DFSVisit = function (u, color, d, f, p) {
    color[u] = 'gray';
    d[u] = ++time;
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === 'white') {
        p[w] = u;
        DFSVisit(w, color, d, f, p);
      }
    }
    f[u] = ++time;
    color[u] = 'black';
  };

}

module.exports = Graph;