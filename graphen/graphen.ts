/* const adjacencyList = new Map();
adjacencyList.set("A", ["B", "E"]);
adjacencyList.set("B", ["A", "C", "D"]);
adjacencyList.set("C", ["B", "D"]);

console.log(adjacencyList); */

type AdjacencyList<T> = Map<T, T[]>;

class Graph<T> {
    adjacencyList: AdjacencyList<T> = new Map();

    addVertex(vertex: T) {
        this.adjacencyList.set(vertex, []);
    }

    removeVertex(vertex: T) {
        this.adjacencyList.get(vertex)?.forEach(vert => {
            this.adjacencyList.set(vert, this.adjacencyList.get(vert)!.filter((x: T) => x !== vertex));
        })

        this.adjacencyList.delete(vertex);
    }

    addEdge(vertex1: T, vertex2: T) {
/*         let vert1: T[] = this.adjacencyList.get(vertex1);
        vert1.push(vertex2);
        let vert2: T[] = this.adjacencyList.get(vertex2);
        vert2.push(vertex1); */

        if(this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)){
            this.adjacencyList.get(vertex1)?.push(vertex2);
            this.adjacencyList.get(vertex2)?.push(vertex1);
        }
    }

    removeEdge(vertex1: T, vertex2: T) {
        if(this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1)!.filter((x: T) => x !==  vertex2));
            this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2)!.filter((y: T) => y !==  vertex1));
        }
    }

    depthFirst(startVertex: T): T[] {
        const result: T[] = [];
        const stack = [startVertex];
        let current;
        const visited: {[key: string]: boolean} = {};
        visited[startVertex as string] = true;
        
        while(stack.length) {
            current = stack.pop() as T;
            result.push(current);

            this.adjacencyList.get(current)?.forEach(vert => {
                if(!visited[vert as string]) {
                    visited[vert as string] = true;
                    stack.push(vert);
                }
            })
        }
        return result
    } 

    depthFirstRecursive(startVertex: T): T[] {
        const result: T[] = [];
        const visited: {[key: string]: boolean} = {};

        const dfs = (vertex: T) => {
            if(!vertex) return null;
            visited[vertex as string] = true;
            result.push(vertex);
            this.adjacencyList.get(vertex)?.forEach(neighbor => {
                if(!visited[neighbor as string]) {
                    dfs(neighbor);
                }
            })
        }
        dfs(startVertex);
        return result
    }


    breadthFirst(startVertex: T): T[] {
        const result: T[] = [];
        const queue = [startVertex];
        let current;
        const visited: {[key: string]: boolean} = {};
        visited[startVertex as string] = true;
        
        while(queue.length) {
            current = queue.shift() as T;
            result.push(current);

            this.adjacencyList.get(current)?.forEach(vert => {
                if(!visited[vert as string]) {
                    visited[vert as string] = true;
                    queue.push(vert);
                }
            })
        }
        return result
    } 


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

const graph = new Graph<string>();

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

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("E", "D")
graph.addEdge("E", "F")
graph.addEdge("F", "D")












console.log(graph.adjacencyList)

/* graph.removeEdge("Berlin", "Wien");
console.log(graph.adjacencyList); */

/* graph.removeVertex("London");
console.log(graph.adjacencyList); */

console.log(graph.depthFirst("A"));
console.log(graph.depthFirstRecursive("A"))
console.log(graph.breadthFirst("A"));




