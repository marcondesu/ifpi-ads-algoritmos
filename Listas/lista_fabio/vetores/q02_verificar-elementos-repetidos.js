import { getNumber } from '../../../Iteracao-strings/input-utils.js'
import { getVectorWithNElements } from '../../../vector-utils.js'

function main() {
    console.clear()
    console.log('------- Verificar se há elementos repetidos num vetor -------\n')

    const number_of_elements = getNumber('Número de elementos do vetor: ')
    const vector = getVectorWithNElements('Vetor', number_of_elements)

    if (hasRepeatedElements(vector)) {
        console.log('\nHá elementos repetidos.')
    } else {
        console.log('\nNão há elementos repetidos.')
    }
}

function hasRepeatedElements(vector) {
    for (let i = 0; i < vector.length; i++) {
        if (hasMoreThanOneEqualElements(vector, vector[i])) {
            return true
        }
    }
    
    return false
}

function hasMoreThanOneEqualElements(vector, element) {
    let number_of_equal_elements = 0
    
    for (let i = 0; i < vector.length; i++) {
        if (element === vector[i]) {
            number_of_equal_elements++
        }
    }

    if (number_of_equal_elements > 1) {
        return true
    }

    return false
}

main()
