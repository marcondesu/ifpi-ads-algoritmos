import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Maior número de uma lista de N valores -------\n')

    let qtd_numbers = getNumber('Quantidade de números da lista: ')
    let [current_number, greater] = [0, 0]
    let counter = qtd_numbers

    while (counter > 0) {
        current_number = getNumber('- ')

        if (current_number > greater) {
            greater = current_number
        }

        counter--
    }

    console.log(`\n${greater}`)
}

main()
