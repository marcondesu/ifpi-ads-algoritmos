import { getNumber } from "./io-utils"

export function createVector(vector_length) {
    return new Array(vector_length)
}

export function fillVector(vector) {
    for (let i = 0; i < vector.length; i++) {
        vector[i] = getNumber(`Valor ${i}: `)
    }

    return vector
}

export function lowerValueOfAVector(vector) {
    let lower_value = vector[0]

    for (let i = 1; i < vector.length; i++) {
        if (lower_value < vector[i]) {
            lower_value = vector[i]
        }
    }

    return lower_value
}
