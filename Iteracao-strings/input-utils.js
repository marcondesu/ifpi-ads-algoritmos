import prompt from 'prompt-sync'
const input = prompt()

export function getText(msg) {
    const text = input(msg)

    if (text.length == 0) {
        console.log('# Erro! Texto vazio, digite algo.\n')

        return getText(msg)
    } else if (!isNaN(text)) {
        console.log('# Erro! Insira um texto.\n')

        return getText(msg)
    }

    return text
}

export function getNumber(msg) {
    const number = Number(input(msg))

    if (isNaN(number)) {
        console.log('# Erro! Digite um número.\n')

        return getNumber(msg)
    }

    return number
}

export function getNumberOnRange(msg, min, max) {
    let number = getNumber(msg)

    while ((number < min) || (number > max)) {
        console.log('# Erro! Opção inválida.\n')
        number = getNumber(msg)
    }

    return number
}

export function enterToContinue() {
    console.log('\n------------------------------------------------------------')

    input('<Enter> para continuar...')
    console.clear()
}
