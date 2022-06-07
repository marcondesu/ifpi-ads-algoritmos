import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- N termos de uma sequência -------\n')
    console.log('S = (1 / N) + (2 / N-1) + (3 / N-2) + ... + (N / 1)\n')

    let qtd_terms = getNumber('Quantidade de termos: ')
    let [s, n, count] = [0, 0, 1]

    for (n = qtd_terms; n >= 1; n--) {
        s += count / n

        count++
    }

    console.log(`\n${s.toFixed(2)}`)
}

main()
