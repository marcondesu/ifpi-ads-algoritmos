import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- N termos de uma sequência (1, 3, 6, 10, 15,...) -------\n')

    let qtd_terms = getNumber('Quantidade de termos: ')
    let sum = 0
    let counter = 1

    while (counter <= qtd_terms) {
        sum += counter

        console.log(`${sum}`)

        counter++
    }
}

main()
