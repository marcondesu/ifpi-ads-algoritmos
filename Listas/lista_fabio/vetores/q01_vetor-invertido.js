import { getNumber } from '../../../Iteracao-strings/input-utils.js'
import { getVectorWithNElements } from '../../../vector-utils.js'

function main() {
    console.clear()
    console.log('------- Ler um vetor com N elementos e invertê-lo -------\n')

    const number_of_elements = getNumber('Número de elementos do vetor: ')
    const vector_a = getVectorWithNElements('Vetor de entrada', number_of_elements)

    const vector_b = invertValuesOfAVector(vector_a)

    console.log(`\nVetor invertido: [${vector_b.join(', ')}]`)
}

function invertValuesOfAVector(vector_input) {
    const new_vector = new Array(vector_input.length)
    let count = 0

    for (let i = vector_input.length - 1; i >= 0; i--) {
        new_vector[count] = vector_input[i]

        count++
    }

    return new_vector
}

main()
