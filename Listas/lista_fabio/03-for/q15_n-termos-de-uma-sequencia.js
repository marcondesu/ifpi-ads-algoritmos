import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- N termos de uma sequência (1, 3, 6, 10, 15,...) -------\n')

    let qtd_terms = getNumber('Quantidade de termos: ')
    let sum = 0
    let i = 0

    for (i = 1; i <= qtd_terms; i++) {
        sum += i

        console.log(`${sum}`)
    }
}

main()
