import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Escrever números pares de 1 a N -------\n')

    const number = getNumber('Número: ')
    let counter = 1

    while (counter <= number) {
        if (ehPar(counter)) {
            console.log(`${counter}`)
        }

        counter++
    }
}

function ehPar(number) {
    return number % 2 === 0
}

main()
