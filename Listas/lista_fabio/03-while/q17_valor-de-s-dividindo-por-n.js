import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- N termos de uma sequência -------\n')
    console.log('S = 1/1 + 1/2 + 1/3 + ... + 1/N\n')

    let qtd_terms = getNumber('Quantidade de termos: ')
    let s = 0
    let counter = 1

    while (counter <= qtd_terms) {
        s += 1 / counter

        counter++
    }

    console.log(`\n${s.toFixed(2)}`)
}

main()
