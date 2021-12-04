const fs = require('fs/promises')
const { argv } = require('process')
const Vector = require('./vector')
const Instruction = require('./instruction')

function loadInstructions(file) {
    return new Promise(async (resolve, reject) => {
        fs.readFile(file, { encoding: 'utf-8' })
            .then(text => void
                resolve(text.split('\n').map(line =>
                    new Instruction(...line.split(/\s+/))
                ))
            )
            .catch(reject)
    })
}

/**
 * @param {Array<Instruction>} instructions 
 * @returns {Vector} end position
 */
function simulate(instructions) {
    const position = new Vector(0, 0)
    instructions.forEach(i => position.add(i.vector))
    return position
}

loadInstructions(argv[2])
    .then(instructions => {
        const res = simulate(instructions)
        console.log(res.x * res.y)
    })
    .catch(console.error)