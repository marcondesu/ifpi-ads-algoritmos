import { getNumber } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Calcular soma de números múltiplos de 13 num intervalo de números -------\n')

    const number_1 = getNumber('1º número: ')
    const number_2 = getNumber('2º número: ')
    let [count, larger_number, soma] = [0, 0, 0]

    if (number_1 > number_2) {
        count = number_2
        larger_number = number_1
    } else {
        larger_number = number_2
        count = number_1
    }

    while (count <= larger_number) {
        if (!isMultipleOf13(count)) {
            soma += count
        }

        count++
    }

    console.log(`\n${soma}`)
}

function isMultipleOf13(number) {
    return number % 13 === 0
}

main()
