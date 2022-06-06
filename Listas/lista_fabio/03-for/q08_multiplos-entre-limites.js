import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Múltiplos de N num intervalo -------\n')

    let number = getNumber('N: ')
    let lower_limit = getNumber('Limite inferior: ')
    let upper_limit = getNumber('Limite superior: ')
    let i = 0

    for (i = lower_limit + 1; i < upper_limit; i++) {
        if (isMultiple(i, number)) {
            console.log(`${i}`)
        }
    }
}

function isMultiple(n1, n2) {
    return n1 % n2 === 0
}

main()
