import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Ler 3 Números, Somar os 2 Primeiros e Subtrair os 2 Últimos -------\n")

    const numero1 = Number(input("1º número: "))
    const numero2 = Number(input("2º número: "))
    const numero3 = Number(input("3º número: "))
    
    const soma = numero1 + numero2
    const diferenca = numero2 - numero3

    print(`\nSoma dos dois primeiros: ${soma}`)
    print(`Diferença dos dois últimos: ${diferenca}`)
}

main()
