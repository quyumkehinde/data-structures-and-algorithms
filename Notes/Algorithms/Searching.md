# Searching

The process to going through a collection of data to find a particular element/node.

## Searching Algorithms

1. Linear search
2. Binary search
3. Breadth-first search (BFS)
4. Depth-first search (DFS)
5. Dijkstra algorithm
6. Bellman-Ford algorithm

### 1. Linear search

- **Time complexity - O(n)**
- **Space complexity - O(1)**

Using loop to go through every element in the collection to check if the target element is found.

### 2. Binary search

- **Time complexity - O(logn)**
- **Space complexity - O(1)**

When our data is sorted, we can use binary search to achieve an O(logn) time complexity by using the divide and conquer method (i.e break the collection into two and discard one based on the position of our target).

### 3. Bread-first search (BFS)

- **Time complexity - O(n)**
- **Space complexity - O(n)**

BFS is done by checking all the node on the same level first and then moving on to the next. It usually involve storing the value of the nodes in the next level into a temporary array so as to keep track of them.

### 4. Depth-first search (DFS)

- **Time complexity - O(n)**
- **Space complexity - O(h)** *where h is the maximum height of the tree.*

DFS done by checking all the nodes down a path and the backtracking to other paths when the node we are searching is not found.

### 5. Dijkstra algorithm

Used to find the shorted path to a node in a weighted graph (less time complexity, compared to Bellman's algorithm)

### 6. Bellman-Ford algorithm

Used to find the shorted path to a node in a weighted graph (weight can be a negative value, unlike Dijkstra's algorithm)

## BFS Vs DFS

- BFS is good for finding shortest path in a tree / undirected, unweighted graph.
- BFS uses more memory.
- BFS checks the closer nodes first.
- DFS is good for checking if path exist to a node.
- DFS uses less memory.
- DFS can be sometimes slow.

## Examples

1. If you know a solution is not far from the root of the tree: bfs

2. If the tree is very deep and solutions are rare: bfs

3. If the tree is very wide: dfs (bfs will use too much memory)

4. If solutions are frequent but located deep in the tree: dfs

5. Determining whether a path exists between two nodes: dfs

6. Finding the shortest path: bfs
