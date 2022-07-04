import * as fs from 'fs'

import prompt from 'prompt-sync'
const input = prompt()

// letra A
export function getNumber(msg) {
    const number = Number(input(msg))

    if (isNaN(number)) {
        console.log('Erro! digite um número.\n')

        return getNumber(msg)
    }

    return number
}

// letra B
export function getPositiveNumber(msg) {
    const number = getNumber(msg)

    if (number < 0) {
        console.log('Erro! O número deve ser positivo.\n')

        return getPositiveNumber(msg)
    }

    return number
}

// letra C
export function getNegativeNumber(msg) {
    const number = getNumber(msg)

    if (number >= 0) {
        console.log('Erro! O número deve ser negativo.\n')

        return getNegativeNumber(msg)
    }

    return number
}

// letra D
export function getNonNullNumber(msg) {
    const number = input(msg)

    if (number == '') {
        console.log('Erro! O valor não pode ser nulo.\n')
        return getNonNullNumber(msg)
    }

    return number
}

// letra E
export function getNumberGreaterThan(min, msg) {
    const number = getNumber(msg)

    if (number < min) {
        console.log(`Erro! O número deve ser maior ou igual a ${min}.\n`)

        return getNumberGreaterThan(min, msg)
    }

    return number
}

// letra F
export function getNumberSmallerThan(max, msg) {
    const number = getNonNullNumber(msg)

    if (number > max) {
        console.log(`Erro! O número deve ser menor ou igual a ${max}.\n`)

        return getNumberSmallerThan(max, msg)
    }

    return number
}

// letra G
export function getNumberOnRange(min, max, msg) {
    const number = getNonNullNumber(msg)

    if (number < min || number > max) {
        console.log(`Erro! O número deve estar entre ${min} e ${max}.\n`)

        return getNumberOnRange(min, max, msg)
    }

    return number
}

// letra H
export function getText(msg) {
    const text = input(msg)

    if (!isNaN(text)) {
        console.log('Erro! digite um texto.\n')

        return getText(msg)
    }

    return text
}

// letra I
export function getTextWithMoreThanXCharacters(min, msg) {
    const text = getText(msg)

    if (text.length < min) {
        console.log(`Erro! O texto deve ter pelo menos ${min} caracteres.\n`)

        return getTextWithMoreThanXCharacters(min, msg)
    }

    return text
}

// letra J
export function getTextWithLessThanXCharacters(max, msg) {
    const text = getText(msg)

    if (text.length > max) {
        console.log(`Erro! O texto deve ter ${max} caracteres ou menos.\n`)

        return getTextWithLessThanXCharacters(max, msg)
    }

    return text
}

// letra K
export function getTextWithXtoYCharacters(min, max, msg) {
    const text = getText(msg)

    if (text.length < min || text.length > max) {
        console.log(`Erro! O texto deve ter no mínimo ${min} caracteres e no máximo ${max}.\n`)

        return getTextWithXtoYCharacters(min, max, msg)
    }

    return text
}

// letra L
export function getTextWithMaxWords(max, msg) {
    const text = getText(msg)
    const separated_text = text.split(' ')

    if (separated_text.length > max) {
        console.log(`Erro! O texto deve ter no máximo ${max} palavras.\n`)

        return getTextWithMaxWords(max, msg)
    }

    return text
}

// letra M
export function getTextWithMinWords(min, msg) {
    const text = getText(msg)
    const separated_text = text.split(' ')

    if (separated_text.length < min) {
        console.log(`Erro! O texto deve ter pelo menos ${min} palavras.\n`)

        return getTextWithMinWords(min, msg)
    }

    return text
}

// letra N
export function getOption(option_1, option_2, msg) {
    const text = input(msg)

    if (text == option_1 || text == option_2) {
        return text
    }
    
    console.log(`Erro! Digite '${option_1}' ou '${option_2}'.\n`)

    return getOption(option_1, option_2, msg)
}

export function getSummatoryOfVectorElements(vector) {
    let sum = 0

    for (let i = 0; i < vector.length; i++){
        sum += vector[i]
    }

    return sum
}

export function getGreaterElement(vector) {
    let greater = [0, vector[0]]

    for (let i = 1; i < vector.length; i++) {
        if (greater[1] < vector[i]) {
            greater[0] = i
            greater[1] = vector[i]
        }
    }

    return greater
}

export function loadFile(file) {
    try {
        const data = fs.readFileSync(file, 'utf-8')

        return data
    } catch (error) {
        console.log(error)
    }
}
