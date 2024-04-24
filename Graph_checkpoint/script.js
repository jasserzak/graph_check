function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const queue = [{ vertex: start, distance: 0 }];

  // Initialize all distances to Infinity
  for (const vertex in graph) {
    if (graph.hasOwnProperty(vertex)) {
      distances[vertex] = Infinity;
    }
  }

  // Set the starting vertex distance to 0
  distances[start] = 0;

  while (queue.length > 0) {
    // Sort the queue by distance
    queue.sort((a, b) => a.distance - b.distance);
    const current = queue.shift();

    if (!visited.has(current.vertex)) {
      visited.add(current.vertex);

      for (const neighbor in graph[current.vertex]) {
        if (graph[current.vertex].hasOwnProperty(neighbor)) {
          const distance = current.distance + graph[current.vertex][neighbor];

          if (distance < distances[neighbor]) {
            distances[neighbor] = distance;
            queue.push({ vertex: neighbor, distance: distance });
          }
        }
      }
    }
  }

  return distances;
}

const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

console.log(dijkstra(graph, "A"));
