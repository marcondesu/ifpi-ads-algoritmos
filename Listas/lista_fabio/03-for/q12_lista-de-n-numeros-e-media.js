import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Média de uma lista de valores -------\n')

    let qtd_numbers = getNumber('Quantidade de números da lista: ')
    let sum = 0
    let i = 0

    for (i = qtd_numbers; i > 0; i--) {
        sum += getNumber('Número: ')
    }

    const average = sum / qtd_numbers

    console.log(`\nMédia = ${average.toFixed(1)}`)
}

main()
