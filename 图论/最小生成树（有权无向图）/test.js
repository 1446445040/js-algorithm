/**
 * 最小生成树的概念在有权图上才成立，所以将实现代码放到了有权图中，这里引用代码进行测试
 */
const { DenseGraph } = require('./weight-dense-graph.js')
const { SparseGraph } = require('./weight-sparse-graph.js')

/**
 * 该示例为一张八个点的连通图
 */
const init = function (graph) {
    graph.addEdge(5, 1, 32)
    graph.addEdge(5, 7, 28)
    graph.addEdge(5, 4, 35)
    graph.addEdge(1, 7, 19)
    graph.addEdge(4, 7, 37)
    graph.addEdge(1, 2, 36)
    graph.addEdge(7, 2, 34)
    graph.addEdge(7, 0, 16)
    graph.addEdge(0, 2, 26)
    graph.addEdge(0, 6, 58)
    graph.addEdge(4, 0, 38)
    graph.addEdge(4, 6, 93)
    graph.addEdge(2, 6, 40)
    graph.addEdge(3, 6, 52)
    graph.addEdge(2, 3, 17)
    graph.addEdge(1, 3, 29)
}

const dense = new DenseGraph(8)
const sparse = new SparseGraph(8)
init(dense)
init(sparse)

console.group('-----------------------打印输出--------------------------')
dense.show()
sparse.show()

console.groupEnd()

console.group('-----------------------Lazy Prim 最小生成树--------------------------')
console.assert(sparse.lazyPrim() === 181, 'lazyPrim of sparse is incorrect!')
console.assert(dense.lazyPrim() === 181, 'lazyPrim of dense is incorrect!')
console.groupEnd()

console.group('-----------------------Prim 最小生成树--------------------------')
console.assert(sparse.prim() === 181, 'prim of sparse is incorrect!')
console.assert(dense.prim() === 181, 'prim of dense is incorrect!')
console.groupEnd()

console.group('-----------------------kruscal 最小生成树--------------------------')
console.assert(sparse.kruscal() === 181, 'kruscal of sparse is incorrect!')
console.assert(dense.kruscal() === 181, 'kruscal of dense is incorrect!')
console.groupEnd()