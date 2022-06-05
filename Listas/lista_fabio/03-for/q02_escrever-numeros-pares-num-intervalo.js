import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Escrever números pares de 1 a N -------\n')

    const number = getNumber('Número: ')
    let i = 0

    for (i = 1; i <= number; i++) {
        if (ehPar(i)) {
            console.log(`${i}`)
        }
    }
}

function ehPar(number) {
    return number % 2 === 0
}

main()
