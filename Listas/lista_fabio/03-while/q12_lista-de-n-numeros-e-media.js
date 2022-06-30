import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Média de uma lista de valores -------\n')

    let qtd_numbers = getNumber('Quantidade de números da lista: ')
    let sum = 0
    let counter = qtd_numbers

    while (counter > 0) {
        sum += getNumber('Número: ')

        counter--
    }

    const mean_number = sum / qtd_numbers

    console.log(`\nMédia = ${mean_number.toFixed(1)}`)
}

main()
