import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Ímpares num intervalo -------\n')

    let lower_limit = getNumber('Limite inferior: ')
    let upper_limit = getNumber('Limite superior: ')
    let counter = lower_limit + 1

    while (counter < upper_limit) {
        if (isOdd(counter)) {
            console.log(`${counter}`)
        }

        counter++
    }
}

function isOdd(number) {
    return number % 2 !== 0
}

main()
