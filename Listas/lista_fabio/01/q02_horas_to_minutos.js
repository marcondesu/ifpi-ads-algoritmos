import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Horas/Minutos para Minutos -------\n")

    const horas = Number(input("Valor em horas: "))
    const input_minutos = Number(input("Valor em minutos: "))
    const output_minutos = (horas*60) + input_minutos

    print(`\n${output_minutos} minutos`)
}

main()
