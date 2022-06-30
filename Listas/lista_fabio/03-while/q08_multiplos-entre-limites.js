import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Múltiplos de N num intervalo -------\n')

    let number = getNumber('N: ')
    let lower_limit = getNumber('Limite inferior: ')
    let upper_limit = getNumber('Limite superior: ')
    let counter = lower_limit + 1

    while (counter < upper_limit) {
        if (isMultiple(counter, number)) {
            console.log(`${counter}`)
        }

        counter++
    }
}

function isMultiple(n1, n2) {
    return n1 % n2 === 0
}

main()
