let input = require('fs').readFileSync('/dev/stdin', 'utf-8')
let lines = input.split('\n').map(Number)

function main() {
    const value = lines[0]
    let vector_n = fillVectorWithDuplicateValues(value)

    for (let i = 0; i < vector_n.length; i++) {
        console.log(`N[${i}] = ${vector_n[i]}`)
    }
}

function fillVectorWithDuplicateValues(value) {
    const vector = new Array(10)
    vector[0] = value

    for (let i = 1; i < vector.length; i++) {
        vector[i] = vector[i - 1] * 2
    }

    return vector
}

main()
