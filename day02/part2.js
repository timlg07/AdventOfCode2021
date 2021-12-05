const fs = require('fs/promises')
const { argv } = require('process')
const Vector = require('./vector')

async function part2(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, { encoding: 'utf-8' })
            .then(text => {
                let aim = 0
                let pos = new Vector(0, 0)

                for (line of text.split('\n')) {
                    let [instruction, value] = line.split(/\s+/)
                    value = Number(value)

                    switch (instruction) {
                        case 'forward':
                            const movement = new Vector(value, aim * value)
                            pos.add(movement)
                            break
                        case 'down':
                            aim += value
                            break
                        case 'up':
                            aim -= value
                            break
                    }
                }

                resolve(pos.x * pos.y)
            })
            .catch(reject)
    })
}

part2(argv[2]).then(console.log).catch(console.error)