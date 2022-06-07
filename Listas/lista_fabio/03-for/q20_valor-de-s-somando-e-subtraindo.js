import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- N termos de uma sequência -------\n')
    console.log('S = 1/1 - 1/2 + 1/3 - ... +/- 1/N\n')

    let qtd_terms = getNumber('Quantidade de termos: ')
    let sum = 0

    for (let i = 1; i <= qtd_terms; i++) {
        if (isPair(i)) {
            sum -= 1 / i
        } else {
            sum += 1 / i
        }
    }

    console.log(`\n${sum.toFixed(2)}`)
}

function isPair(number) {
    return number % 2 === 0
}

main()
