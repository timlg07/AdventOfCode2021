const fs = require('fs/promises')
const { argv } = require('process')

function loadLines(file) {
    return new Promise(async (resolve, reject) => {
        fs.readFile(file, { encoding: 'utf-8' })
            .then(text => resolve(text.split('\n')))    
            .catch(reject)
    })
}

function countLargerThanPrev(values, blockSize = 1) {
    let largerThanPrev = 0

    for (let i = blockSize; i < values.length; i++) {        
        const prev = Number(values[i - blockSize])
        const curr = Number(values[i])
        const diff = curr - prev
        if (diff > 0) largerThanPrev++
    }

    return largerThanPrev
}

loadLines(argv[2])
    .then(values => {
        const res = countLargerThanPrev(values, 3)
        console.log(res)
    })
    .catch(console.error)