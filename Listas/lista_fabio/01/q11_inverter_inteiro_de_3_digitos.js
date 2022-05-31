import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Inverter os Algarismos de um Número com 3 Dígitos -------\n")

    const numero = input("Número inteiro com 3 dígitos: ")

    print(`\n${numero[2]}${numero[1]}${numero[0]}`)
}

main()
