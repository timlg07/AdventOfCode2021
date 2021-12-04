const fs = require('fs/promises')
const { argv } = require('process')

function getAmountLargerThanPrev(file) {
    return new Promise(async (resolve, reject) => {
        const input = await fs.readFile(file, { encoding: 'utf-8' }).catch(reject)
        const lines = input.split('\n')

        let largerThanPrev = 0

        for (let i = 1; i < lines.length; i++) {
            const prev = Number(lines[i - 1])
            const curr = Number(lines[i])
            const diff = curr - prev
            if (diff > 0) largerThanPrev++
        }

        resolve(largerThanPrev)
    })
}

getAmountLargerThanPrev(argv[2])
    .then(console.log)
    .catch(console.error)