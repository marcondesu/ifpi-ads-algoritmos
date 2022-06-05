import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Calcular o maior quadrado maior ou igual a determinado número -------\n')

    const number = getNumber('Número: ')
    let i = 0

    for (i = number; i >= 1; i--) {
        if (ehRaizQuadrada(i)) {
            break;
        }
    }

    console.log(`${i}`)
}

function ehRaizQuadrada(number) {
    return number % Math.sqrt(number) === 0
}

main()
