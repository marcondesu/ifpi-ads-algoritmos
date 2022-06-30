import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Soma entre cada número de um intervalo 1-N -------\n')

    let number = getNumber('Número: ')
    let sum = 0
    let counter = 1

    while (counter < number) {
        sum += counter

        counter++
    }

    console.log(`\n${sum}`)
}

main()
