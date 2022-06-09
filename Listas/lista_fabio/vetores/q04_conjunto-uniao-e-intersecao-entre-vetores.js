import { getNumber } from '../../../Iteracao-strings/input-utils.js'
import { getVectorWithNElements } from '../../../vector-utils.js'

function main() {
    console.clear()
    console.log('------- Ler dois vetores com N elementos e determinar conjunto união e interseção entre eles -------\n')

    const number_of_elements = getNumber('Número de elementos: ')
    const vector_a = getVectorWithNElements('Vetor A', number_of_elements)
    const vector_b = getVectorWithNElements('Vetor B', number_of_elements)

    const conjunto_uniao = getSetUnion(vector_a, vector_b)
    const conjunto_intersecao = getIntersectionSet(vector_a, vector_b)

    console.log(`\nConjunto união: [${conjunto_uniao.join(', ')}]`)
    // console.log(`Conjunto interseção: [${conjunto_intersecao.join(', ')}]`)
}

function getIntersectionSet(vector_a, vector_b) {
    const vector_a_and_b = vector_a.concat(vector_b)
    const intersection_set = new Array(0)
    
    for (let i = 0; i < vector_a_and_b.length; i++) {
        if (hasMoreThanOneEqualElements(vector_a_and_b, vector_a_and_b[i])) {
            vector_a_and_b.splice(i, i) 
            console.log(vector_a_and_b)
            
        } else {
            vector_a_and_b.splice(i, i)
            console.log(vector_a_and_b)
        }
    }
}

function getSetUnion(vector_a, vector_b) {
    const vector_a_and_b = vector_a.concat(vector_b)
    const set_union = new Array(0)

    for (let i = 0; i < vector_a_and_b.length; i++) {
        if (!hasMoreThanOneEqualElements(vector_a_and_b, vector_a_and_b[i])) {
            set_union.push(vector_a_and_b[i])
        }
    }

    return set_union
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
