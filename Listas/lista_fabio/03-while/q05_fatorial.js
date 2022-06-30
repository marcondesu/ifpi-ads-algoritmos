import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Calcular fatorial -------\n')

    let fatorial = getNumber('Number: ')
    let counter = fatorial - 1

    while (counter > 0) {
        fatorial *= counter

        counter--
    }

    console.log(`\n${fatorial}`)
}

main()
