import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const codigo_peca1 = Number(input("Código da peça 1: "))
    const numero_peca1 = Number(input("Número de peças 1: "))
    const valor_peca1 = Number(input("Valor unitário de peças 1: "))

    const codigo_peca2 = Number(input("Código da peça 2: "))
    const numero_peca2 = Number(input("Número de peças 2: "))
    const valor_peca2 = Number(input("Valor unitário de peças 2: "))

    // procesamento
    const valor_a_pagar = numero_peca1*valor_peca1 + numero_peca2*valor_peca2

    // saída
    print(`VALOR A PAGAR: R$ ${valor_a_pagar.toFixed(2)}`)
}

main()