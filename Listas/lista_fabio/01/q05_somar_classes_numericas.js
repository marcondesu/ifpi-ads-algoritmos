import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Somar os Algarismos de um Número com 3 Dígitos -------\n")

    const numero = input("Número com 3 dígitos: ")
    const centena = Number(numero[0])
    const dezena = Number(numero[1])
    const unidade = Number(numero[2])
    const soma = centena + dezena + unidade

    print(`\n${soma}`)
}

main()
