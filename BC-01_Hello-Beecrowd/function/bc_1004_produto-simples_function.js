import {print, input} from '../../io_utils.js'

function produto_simples(x, y) {
    // procesamento
    const PROD = x * y

    // saída
    print(`PROD = ${PROD}\n`)
}

function main() {
    // entrada
    const valor_1 = Number(input("Valor 1 = "))
    const valor_2 = Number(input("Valor 2 = "))

    produto_simples(valor_1, valor_2)
}

main()