import { getNumber } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Preenchimento de Vetor II -------\n')

    const value_to_be_repeated = getNumber('Valor a ser repetido: ')
    let current_value = 0

    for (let i = 0; i < 1000; i++) {
        console.log(`N[${i}] = ${current_value}`)

        current_value++

        if (current_value === value_to_be_repeated) {
            current_value = 0
        }
    }
}

main()
