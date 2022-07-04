import { getNumber, randomValue } from "./io-utils.js"

export function showVector(vector) {
    console.log(vector)
}

export function createVector(vector_length) {
    return new Array(vector_length)
}

export function fillVector(vector) {
    for (let i = 0; i < vector.length; i++) {
        vector[i] = getNumber(`Valor ${i + 1}: `)
    }

    return vector
}

export function fillVectorWithRandomElements(vector, min, max) {
    for (let i = 0; i < vector.length; i++) {
        vector[i] = randomValue(min, max)
    }

    return vector
}

export function mapVectorWithAnValue(vector, value) {
    for (let i = 0; i < vector.length; i++) {
        vector[i] = value
    }

    return vector
}

export function pushVector(vector, element) {
    let new_vector = []
    let i

    for (i = 0; i < vector.length; i++) {
        new_vector[i] = vector[i]
    }

    new_vector[i] = element

    return new_vector
}

export function getValuesInAVectorGreaterThan(vector, value) {
    let values = []

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > value) {
            values.push(vector[i])
        }
    }

    return values
}

export function getValuesInAVectorSmallerThan(vector, value) {
    let values = []

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] < value) {
            values.push(vector[i])
        }
    }

    return values
}

export function lowerValueOfAVector(vector) {
    let lower_value = vector[0]

    for (let i = 1; i < vector.length; i++) {
        if (lower_value > vector[i]) {
            lower_value = vector[i]
        }
    }

    return lower_value
}

export function greaterValueOfAVector(vector) {
    let greater_value = vector[0]

    for (let i = 1; i < vector.length; i++) {
        if (greater_value < vector[i]) {
            greater_value = vector[i]
        }
    }

    return greater_value
}
