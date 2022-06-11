import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Troca em Vetor I -------\n')

    const lines = loadFile('../Testes/bc1175_teste.txt').split('\r\n').map(Number)

    let vector_a = new Array(20)
    vector_a = fillArray(lines, 20)
    vector_a = invertArray(vector_a)

    console.log(vector_a)

    /* for (let i = 0; i < vector_a.length; i++) {
        if (vector_a[i] <= 10) {
            console.log(`A[${i}] = ${vector_a[i].toFixed(1)}`)
        }
    } */
}

function invertArray(vector) {
    const new_vector = new Array(vector.length)
    
    for (let i = vector.length - 1; i >= 0; i--) {
        new_vector[i - vector.length] = vector[i]
        console.log(vector[i])
    }

    return new_vector
}

function fillArray(lines, length) {
    const vector = new Array(20)

    for (let i = 0; i < vector.length; i++) {
        vector[i] = lines[i]
    }

    return vector
}

main()
