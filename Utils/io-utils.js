import prompt from 'prompt-sync'
const input = prompt()

export function getText(msg) {
    const text = input(msg)

    if (!isNaN(text)) {
        console.log('Erro! O valor deve ser um texto.\n')

        return getText(msg)
    }

    return text
}

export function getNumber(msg) {
    const number = input(msg)

    if (isNaN(number)) {
        console.log('Erro! O valor deve ser um número.\n')

        return getNumber(msg)
    }

    return number
}

export function getPositiveNumber(msg) {
    const number = input(msg)

    if (number < 0) {
        console.log('Erro! O valor deve ser positivo.')
        
        return getPositiveNumber(msg)
    }

    return number
}

export function getNegativeNumber(msg) {
    const number = input(msg)

    if (number >= 0) {
        console.log('Erro! O valor deve ser negativo.')
        
        return getNegativeNumber(msg)
    }

    return number
}

export function getNumberOnRange(min, max, msg) {
    const number = getNumber(msg)

    if (number < min || number > max) {
        console.log(`Erro! O valor deve estar entre ${min} e ${max}.\n`)
        
        return getNumberOnRange(min, max, msg)
    }
    
    return number
}

export function getNumberGreaterThan(min, msg) {
    const number = getNumber(msg)
    
    if (number < min) {
        console.log(`Erro! O valor deve ser maior que ${min}.\n`)

        return getNumberGreaterThan(min, msg)
    }

    return number
}

export function getNumberSmallerThan(max, msg) {
    const number = getNumber(msg)
    
    if (number > max) {
        console.log(`Erro! O valor deve ser menor que ${max}.\n`)

        return getNumberSmallerThan(max, msg)
    }

    return number
}

export function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
