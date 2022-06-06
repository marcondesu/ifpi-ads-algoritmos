import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Ímpares num intervalo -------\n')

    let lower_limit = getNumber('Limite inferior: ')
    let upper_limit = getNumber('Limite superior: ')
    let i = 0

    for (i = lower_limit + 1; i < upper_limit; i++) {
        if (isOdd(i)) {
            console.log(`${i}`)
        }
    }
}

function isOdd(number) {
    return number % 2 !== 0
}

main()
