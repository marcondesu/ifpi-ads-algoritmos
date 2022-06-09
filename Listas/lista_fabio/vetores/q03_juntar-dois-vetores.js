import { getNumber } from '../../../Iteracao-strings/input-utils.js'
import { getVectorWithNElements } from '../../../vector-utils.js'

function main() {
    console.clear()
    console.log('------- Ler dois vetores com N elementos e juntá-los num outro -------\n')

    const number_of_elements = getNumber('Número de elementos: ')

    const vector_a = getVectorWithNElements('Vetor A', number_of_elements)
    const vector_b = getVectorWithNElements('Vetor B', number_of_elements)

    const vector_c = vector_a.concat(vector_b)

    console.log(`\nNovo vetor: [${vector_c.join(', ')}]`)
}

main()
