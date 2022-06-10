import { getNumber } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Preenchimento de Vetor I -------\n')
    
    const value = getNumber('Valor inicial: ')

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
