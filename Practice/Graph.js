class Graph {
    constructor() {
        this.adjacentList = {};
        this.numberOfNodes = 0;
    }

    addNode(node) {
        if (this.adjacentList[node]) {
            return null;
        }
        this.adjacentList[node] = [];
        this.numberOfNodes++;
        return this;
    }

    addEdge(node1, node2) {
        if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
            return null;
        }
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
        return this;
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addNode('0');
myGraph.addNode('1');
myGraph.addNode('2');
myGraph.addNode('3');
myGraph.addNode('4');
myGraph.addNode('5');
myGraph.addNode('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections(); 