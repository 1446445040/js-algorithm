/**
 * 并查集第四版：路径压缩，进一步降低树的高度，主要更改find函数
 */ 
class UnionFind5 {
    constructor (count) {
        this.parent = []
        this.rank = new Array(count).fill(1)
        // 初始情况下元素自身等于索引即可
        // 用来表示没有两个元素是连接在一起的
        for (let i = 0; i < count; i ++)
            this.parent.push(i)
    }
    find (index) {
        console.assert(index >= 0 && index <= this.parent.length - 1, '越界')
        // 如果索引和自身不等，说明当前不是根节点，需要回溯到这棵树的根节点
        while (index !== this.parent[index]) {
            this.parent[index] = this.parent[this.parent[index]] // 重点
            index = this.parent[index]
        }
        return index
    }
    isConnected (p, q) {
        return this.find(p) === this.find(q)
    }
    // 将两个元素并在一起，让id值相等
    union (p, q) {
        const pRoot = this.find(p), qRoot = this.find(q)
        if (pRoot === qRoot)
            return

        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot
        } else if (this.rank[pRoot] > this.rank[qRoot]) {
            this.parent[qRoot] = pRoot
        } else {
            this.parent[qRoot] = pRoot // 随便选一个
            this.rank[pRoot] += 1
        }
        
    }
}

module.exports = { UnionFind5 }