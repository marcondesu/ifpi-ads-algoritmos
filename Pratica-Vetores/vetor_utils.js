import { getValue } from './utils.js'

/**
 * Cria um vetor com tamanho predefinido
*/
export function createVector(length) {
    return new Array(length)
}

/**
 * Mostra um vetor
*/
export function showVector(vector) {
    console.log('')
    console.log(vector)
}

/**
 * Adiciona um valor ao final do vetor
*/
export function addValueToVector(vector, value) {
    let new_vector = new Array(vector.length)
    let i = 0

    for (i; i < vector.length; i++) {
        new_vector[i] = vector[i]
    }

    new_vector[i] = value

    return new_vector
}

/**
 * Insere valores digitados pelo usuário para cada posição do vetor
*/
export function fillVector(vector) {
    for (let i = 0; i < vector.length; i++) {
        vector[i] = getValue(`Valor ${i + 1}: `)
    }

    return vector
}

/**
 * Remove o valor de uma determinada posição de um vetor
*/
export function removeValueFromVector(vector, position) {
    let new_vector = []

    for (let i = 0; i < vector.length; i++) {
        if (i === (position - 1)) {
            continue
        }

        new_vector += vector[i]
    }

    showVector(new_vector)
}
