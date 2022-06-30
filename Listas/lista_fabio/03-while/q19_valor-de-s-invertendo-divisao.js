import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- N termos de uma sequência -------\n')
    console.log('S = (1 / N) - (N-1 / 2) + (3 / N-2) - ... +/- (N / 1)\n')

    let qtd_terms = getNumber('Quantidade de termos: ')
    let [s, n, count] = [0, qtd_terms, 1]

    while (n >= 1) {
        if (isPair(count)) {
            s -= count / n
        } else {
            s += n / count
        }

        n--
        count++
    }

    console.log(`\n${s.toFixed(2)}`)
}

function isPair(number) {
    return number % 2 === 0
}

main()
