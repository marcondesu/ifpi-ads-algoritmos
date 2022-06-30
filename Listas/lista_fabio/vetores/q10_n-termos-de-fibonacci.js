import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Mostrar N termos da sequência de Fibonacci -------\n')

    let qtd_terms = getNumber('Quantidade de termos: ')
    let fibonacci = []
    fibonacci[0] = 0
    fibonacci[1] = 1

    let counter = 2

    while (counter <= qtd_terms - 1) {
        fibonacci[counter] = Number(fibonacci[counter - 2]) + Number(fibonacci[counter - 1])

        counter++
    }

    console.log(fibonacci)
}

main()
