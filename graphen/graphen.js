"use strict";
/* const adjacencyList = new Map();
adjacencyList.set("A", ["B", "E"]);
adjacencyList.set("B", ["A", "C", "D"]);
adjacencyList.set("C", ["B", "D"]);

console.log(adjacencyList); */
class Graph {
    constructor() {
        this.adjacencyList = new Map();
        /*     breadthFirstRecursive(startVertex: T): T[]{
                const result: T[] = [];
                const visited: {[key: string]: boolean} = {};
                const queue = [startVertex]
        
        
                const bfs = (vertex: T) => {
                    if(!vertex) return null;
                    queue.shift();
                    visited[vertex as string] = true;
                    result.push(vertex);
                    this.adjacencyList.get(vertex)?.forEach(neighbor => {
                        if(!visited[neighbor as string]) {
                            queue.push(neighbor)
                        }
                    })
                    if(!visited[queue[0] as string]){
                        bfs(queue[0]);
        
                    }
        
                }
                bfs(startVertex);
                return result
            } */
    }
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    removeVertex(vertex) {
        var _a;
        (_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.forEach(vert => {
            this.adjacencyList.set(vert, this.adjacencyList.get(vert).filter((x) => x !== vertex));
        });
        this.adjacencyList.delete(vertex);
    }
    addEdge(vertex1, vertex2) {
        /*         let vert1: T[] = this.adjacencyList.get(vertex1);
                vert1.push(vertex2);
                let vert2: T[] = this.adjacencyList.get(vertex2);
                vert2.push(vertex1); */
        var _a, _b;
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push(vertex2);
            (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1).filter((x) => x !== vertex2));
            this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2).filter((y) => y !== vertex1));
        }
    }
    depthFirst(startVertex) {
        var _a;
        const result = [];
        const stack = [startVertex];
        let current;
        const visited = {};
        visited[startVertex] = true;
        while (stack.length) {
            current = stack.pop();
            result.push(current);
            (_a = this.adjacencyList.get(current)) === null || _a === void 0 ? void 0 : _a.forEach(vert => {
                if (!visited[vert]) {
                    visited[vert] = true;
                    stack.push(vert);
                }
            });
        }
        return result;
    }
    depthFirstRecursive(startVertex) {
        const result = [];
        const visited = {};
        const dfs = (vertex) => {
            var _a;
            if (!vertex)
                return null;
            visited[vertex] = true;
            result.push(vertex);
            (_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        };
        dfs(startVertex);
        return result;
    }
    breadthFirst(startVertex) {
        var _a;
        const result = [];
        const queue = [startVertex];
        let current;
        const visited = {};
        visited[startVertex] = true;
        while (queue.length) {
            current = queue.shift();
            result.push(current);
            (_a = this.adjacencyList.get(current)) === null || _a === void 0 ? void 0 : _a.forEach(vert => {
                if (!visited[vert]) {
                    visited[vert] = true;
                    queue.push(vert);
                }
            });
        }
        return result;
    }
}
const graph = new Graph();
/* graph.addVertex("Berlin");
graph.addVertex("Wien");
graph.addVertex("London");
graph.addVertex("Barcelona");
graph.addVertex("Graz");
graph.addVertex("Mailand")

graph.addEdge("Berlin", "Wien");
graph.addEdge("Berlin", "London");
graph.addEdge("Berlin", "Barcelona");
graph.addEdge("London", "Barcelona");
graph.addEdge("Wien", "Barcelona");
graph.addEdge("London", "Wien");
graph.addEdge("Graz", "Mailand");
graph.addEdge("Graz", "Berlin")
graph.addEdge("Graz", "Barcelona")
graph.addEdge("Barcelona", "Mailand")
graph.addEdge("London", "Mailand")
graph.addEdge("Berlin", "Mailand") */
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("E", "D");
graph.addEdge("E", "F");
graph.addEdge("F", "D");
console.log(graph.adjacencyList);
/* graph.removeEdge("Berlin", "Wien");
console.log(graph.adjacencyList); */
/* graph.removeVertex("London");
console.log(graph.adjacencyList); */
console.log(graph.depthFirst("A"));
console.log(graph.depthFirstRecursive("A"));
console.log(graph.breadthFirst("A"));
//# sourceMappingURL=graphen.js.map