let input = require('fs').readFileSync('/dev/stdin', 'utf-8')
let lines = input.split('\n').map(Number)

function main() {    
    let vector_n = new Array(20)
    vector_n = fillArray(lines, 20)
    vector_n = invertArray(vector_n)    

    for (let i = 0; i < vector_n.length; i++) {
        console.log(`N[${i}] = ${vector_n[i]}`)
    }
}

function invertArray(vector) {
    const new_vector = new Array(vector.length)
    let count = 0

    for (let i = vector.length - 1; i >= 0; i--) {
        new_vector[count] = vector[i]

        count++
    }
    
    return new_vector
}

function fillArray(lines, length) {
    const vector = new Array(length)
    
    for (let i = 0; i < length; i++) {
        vector[i] = lines[i]
    }
    
    return vector
}

main()
