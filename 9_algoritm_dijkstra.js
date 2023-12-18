// Поиск кратчайшего пути в графе

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end) {
    const costs = {}; // кратчайшие пути
    const processed = []; // узлы которые уже проверили
    let neighbors = {}; // сосединие вершины рассматриваемого узла
    Object.keys(graph).forEach((node) => {
        if (node !== start) {
            let value = graph[start][node];
            costs[node] = value || 100000000000000;
        }
    });
    let node = findNodeLowestCost(costs, processed);
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach((neighbor)=> {
            let newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        });
        processed.push(node);
        node = findNodeLowestCost(costs, processed);
    }

    return costs;
}

function findNodeLowestCost(costs, processed) {
    let lowesCost = 100000000000000;
    let lowestNode;

    Object.keys(costs).forEach((node) => {
        let cost = costs[node];
        console.log(cost);

        if (cost < lowesCost && !processed.includes(node)) {
            lowesCost = cost;
            lowestNode = node;
        }
    });

    return lowestNode;
}

console.log(shortPath(graph, 'a', 'g'));
