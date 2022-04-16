import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Somar Algarismos de um Número de 4 Dígitos -------\n")

    const numero = Number(input("Insira o número: "))

    const milhar = Math.trunc(numero / 1000)
    const centena = Math.trunc(numero / 100)
    const dezena = Math.trunc((numero - centena*100) / 10)
    const unidade = Math.trunc(numero - (centena*100 + dezena*10))

    const soma = milhar + (Math.trunc(centena%10)) + dezena + unidade

    print(`\nA soma dos algarismos do número ${numero} é ${soma}`)
}

main()