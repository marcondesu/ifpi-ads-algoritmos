import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Soma entre cada número de um intervalo 1-N -------\n')

    let number = getNumber('Número: ')
    let sum = 0
    let i = 0

    for (i = 1; i < number; i++) {
        sum += i
    }

    console.log(`\n${sum}`)
}

main()
