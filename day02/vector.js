class Vector {
    /**
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    /**
     * @param {Number} n 
     */
    multiply(n) {
        this.x *= n
        this.y *= n
    }

    /**
     * @param {Vector} v 
     */
    add(v) {
        this.x += v.x
        this.y += v.y
    }
}

module.exports = Vector