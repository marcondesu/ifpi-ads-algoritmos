import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Seleção em Vetor I -------\n')

    const lines = loadFile('../Testes/bc1174_teste.txt').split('\r\n').map(Number)

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
