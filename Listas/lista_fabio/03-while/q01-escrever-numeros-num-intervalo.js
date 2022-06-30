import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Escrever números de 1 a N -------\n')

    const number = getNumber('Número: ')
    let counter = 1

    while (counter <= number) {
        console.log(`${counter}`)

        counter++
    }
}

main()
