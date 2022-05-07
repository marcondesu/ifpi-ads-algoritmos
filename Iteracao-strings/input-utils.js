import prompt from 'prompt-sync'
const input = prompt()

export function getText(msg) {
    const text = input(msg)

    if (text.length == 0) {
        console.log('Erro! Texto vazio, digite algo.')

        return getText(msg)
    } else if (typeof text != 'string') {
        console.log('Erro! Insira um texto.')

        return getText(msg)
    }

    return text
}

export function getNumber(msg) {
    const number = Number(input(msg))

    if (number.length == 0) {
        console.log('Erro! Nada foi digitado, insira um número.')

        return getNumber(msg)
    } else if (typeof number != 'number') {
        console.log('Erro! Digite um número.')

        return getNumber(msg)
    }

    return number
}

export function getNumberOnRange(msg, min, max) {
    let number = getNumber(msg)

    while ((number < min) && (number > max)) {
        console.log('\nNúmero inválido.')
        number = getNumber(msg)
    }

    return number
}

export function enterToContinue() {
    console.log('\n------------------------------------------------------------')

    input('<Enter> para continuar...')
    console.clear()
}
