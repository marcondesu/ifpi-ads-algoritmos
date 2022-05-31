import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const valor_1 = Number(input("Valor 1 = "))
    const valor_2 = Number(input("Valor 2 = "))

    // procesamento
    const PROD = valor_1 * valor_2

    // saída
    print(`PROD = ${PROD}\n`)
}

main()