let input = require('fs').readFileSync('/dev/stdin', 'utf-8')
let lines = input.split('\n').map(Number)

function main() {
    let vector_a = new Array(100)
    vector_a = fillArray(lines)

    for (let i = 0; i < vector_a.length; i++) {
        if (vector_a[i] <= 10) {
            console.log(`A[${i}] = ${vector_a[i].toFixed(1)}`)
        }
    }
}

function fillArray(lines) {
    const vector = new Array(100)

    for (let i = 0; i < vector.length; i++) {
        vector[i] = lines[i]
    }

    return vector
}

main()
