var Graph = require('./Graph');

test('Graph', function () {
  var graph = new Graph();

  var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
  }
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('A', 'D');
  graph.addEdge('C', 'D');
  graph.addEdge('C', 'G');
  graph.addEdge('D', 'G');
  graph.addEdge('D', 'H');
  graph.addEdge('B', 'E');
  graph.addEdge('B', 'F');
  graph.addEdge('E', 'I');

  expect(graph.getAdjList()).toEqual({
    'A': ['B', 'C', 'D'],
    'B': ['A', 'E', 'F'],
    'C': ['A', 'D', 'G'],
    'D': ['A', 'C', 'G', 'H'],
    'E': ['B', 'I'],
    'F': ['B'],
    'G': ['C', 'D'],
    'H': ['D'],
    'I': ['E']
  });

  var bfsList = [];
  graph.bfs(myVertices[0], function (u) {
    bfsList.push(u);
  });
  expect(bfsList).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);

  expect(graph.BFS(myVertices[0])).toEqual({
    'distances': {
      'A': 0,
      'B': 1,
      'C': 1,
      'D': 1,
      'E': 2,
      'F': 2,
      'G': 2,
      'H': 2,
      'I': 3
    },
    'predecessors': {
      'A': null,
      'B': 'A',
      'C': 'A',
      'D': 'A',
      'E': 'B',
      'F': 'B',
      'G': 'C',
      'H': 'D',
      'I': 'E'
    }
  });

  var dfsList = [];
  graph.dfs(myVertices[0], function (u) {
    dfsList.push(u);
  });
  expect(dfsList).toEqual(['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H']);

  expect(graph.DFS()).toEqual({
    'discovery': {
      'A': 1,
      'B': 2,
      'C': 10,
      'D': 11,
      'E': 3,
      'F': 7,
      'G': 12,
      'H': 14,
      'I': 4
    },
    'finished': { 'A': 18, 'B': 9, 'C': 17, 'D': 16, 'E': 6, 'F': 8, 'G': 13, 'H': 15, 'I': 5 },
    'predecessors': {
      'A': null,
      'B': 'A',
      'C': 'A',
      'D': 'C',
      'E': 'B',
      'F': 'B',
      'G': 'D',
      'H': 'D',
      'I': 'E'
    }
  });
});