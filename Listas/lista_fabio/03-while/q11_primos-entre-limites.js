import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Primos num intervalo -------\n')

    let lower_limit = getNumber('Limite inferior: ')
    let upper_limit = getNumber('Limite superior: ')
    let counter = lower_limit + 1

    while (counter < upper_limit) {
        if (isPrime(counter)) {
            console.log(`${counter}`)
        }

        counter++
    }
}

function isPrime(number) {
    if (number === 2) {
        return true
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false
            }
        }

        return true
    }
}

main()
