/**
  * PROGRAM TO IMPLEMENT GRAPH, PRINT GRAPH, ADD VERTICES, BFS, DFS.
  *
  */


  class Graph {

    constructor() {
      this.adjacencyList = {};
    }

    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }

    addEdge(source, destination) {
      if (!this.adjacencyList[source]) {
        this.addVertex(source);
      }
      if (!this.adjacencyList[destination]) {
        this.addVertex(destination);
      }
      this.adjacencyList[source].push(destination);
      this.adjacencyList[destination].push(source);
    }

    printGraph() {


        // iterate over the vertices
        for (var key in this.adjacencyList)
        {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.adjacencyList[key];
            var conc = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list
            console.log(key + " -> " + conc);
        }

        console.log(this.adjacencyList);
    }

    removeEdge(source, destination) {
      this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination);
      this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== source);
    }

    removeVertex(vertex) {
      while (this.adjacencyList[vertex]) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }

  }

  Graph.prototype.bfs = function(start) {
      const queue = [start];
      const result = [];
      const visited = {};
      visited[start] = true;
      let currentVertex;
      while (queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
      return result;
  }

  let g = new Graph();
  g.addEdge('A', 'B');
  g.addEdge('A', 'D');
  g.addEdge('A', 'E');
  g.addEdge('B', 'C');
  g.addEdge('D', 'E');
  g.addEdge('E', 'F');
  g.addEdge('E', 'C');
  g.addEdge('C', 'F');

  g.bfs("A");

  Graph.prototype.dfsIterative = function(start) {
      const result = [];
      const stack = [start];
      const visited = {};
      visited[start] = true;
      let currentVertex;
      while (stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
      return result;
  }

  g.dfsIterative("A");



  function transformString(beginWord, endWord, wordList) {
      let graph = buildGraph(wordList, beginWord);
      if (!graph.has(endWord)) return 0;
      let queue = [beginWord];
      let visited = {};
      visited[beginWord] = true;
      let count = 1;
      while (queue.length) {
          let size = queue.length;
          for (let i=0; i<size; i++) {
              let currentWord = queue.shift();
              if (currentWord === endWord) {
                  return count;
              }
              graph.get(currentWord).forEach( neighbor => {
                  if (!visited[neighbor]) {
                      queue.push(neighbor);
                      visited[neighbor] = true;
                  }
              })
          }
          count++;
      }
      return 0;
  };

  function compareStrings (str1, str2) {
      let diff = 0;
      for (let i=0; i<str1.length; i++) {
          if (str1[i] !== str2[i]) diff++
      }
      return diff;
  }

  function buildGraph(wordList, beginWord) {
      let graph = new Map();
      wordList.forEach( (word) => {
          graph.set(word, []);
          wordList.forEach( (nextWord) => {
              if (compareStrings(word, nextWord) == 1) {
                  graph.get(word).push(nextWord);
              }
          })
      })
      if (!graph.has(beginWord)) {
          graph.set(beginWord, []);
          wordList.forEach( (nextWord) => {
              if (compareStrings(beginWord, nextWord) == 1) {
                  graph.get(beginWord).push(nextWord);
              }
          })
      }
      return graph;
  }