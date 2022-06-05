import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Calcular fatorial -------\n')

    let fatorial = getNumber('Number: ')
    let i = 0

    for (i = fatorial - 1; i > 0; i--) {
        fatorial *= i
    }

    console.log(`\n${fatorial}`)
}

main()
