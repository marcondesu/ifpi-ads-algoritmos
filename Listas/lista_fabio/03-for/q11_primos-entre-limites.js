import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Primos num intervalo -------\n')

    let lower_limit = getNumber('Limite inferior: ')
    let upper_limit = getNumber('Limite superior: ')
    let i = 0

    for (i = lower_limit + 1; i < upper_limit; i++) {
        if (isPrime(i)) {
            console.log(`${i}`)
        }
    }
}

function isPrime(number) {
    if (number === 2) {
        return true
    } else {
        for (let i = 2; i <= number; i++) {
            if ((number % 1 === 0) && (number % i === 0)) {
                return false
            } else {
                return true            
            }
        }
    }
}

main()
