import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Ler 2 Números e Realizar a Divisão da Soma dos 2 Primeiros pela Subtração dos 2 Últimos -------\n")

    const numero1 = Number(input("1º número: "))
    const numero2 = Number(input("2º número: "))
    
    const soma = numero1 + numero2
    const subtracao = numero1 - numero2
    const divisao = soma / subtracao

    print(`\nResultado: ${divisao}`)
}

main()