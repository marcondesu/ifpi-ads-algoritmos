import {print, input} from '../../io_utils.js'

function soma_simples(x, y) {
    // procesamento
    const soma = x + y

    // saída
    print(`SOMA = ${soma}\n`)
}

function main() {
    // entrada
    const a = Number(input("A = "))
    const b = Number(input("B = "))

    soma_simples(a, b)
}

main()
