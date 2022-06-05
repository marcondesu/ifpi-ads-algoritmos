import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Escrever números de 1 a N -------\n')

    const number = getNumber('Número: ')
    let i = 0

    for (i = 1; i <= number; i++) {
        console.log(`${i}`)
    }
}

main()
