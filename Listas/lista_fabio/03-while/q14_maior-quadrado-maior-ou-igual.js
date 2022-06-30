import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Calcular o maior quadrado maior ou igual a determinado número -------\n')

    const number = getNumber('Número: ')
    let counter = number

    while (counter >= 1) {
        if (ehRaizQuadrada(counter)) {
            break;
        }

        counter--
    }

    console.log(`${counter}`)
}

function ehRaizQuadrada(number) {
    return number % Math.sqrt(number) === 0
}

main()
