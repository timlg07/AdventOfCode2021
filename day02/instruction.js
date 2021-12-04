const Vector = require('./vector')

class Instruction {

    /** @type {Vector} */
    vector = new Vector(0, 0)

    /**
     * @param {String | Vector} direction 
     * @param {String | Number} value 
     */
    constructor(direction, value) {
        if (direction instanceof Vector) {
            this.vector = direction
        } else {
            switch (direction) {
                case 'forward':
                    this.vector = new Vector(1, 0)
                    break
                case 'down':
                    this.vector = new Vector(0, 1)
                    break
                case 'up':
                    this.vector = new Vector(0, -1)
                    break
            }
        }
        this.vector.multiply(Number(value))
    }
}

module.exports = Instruction