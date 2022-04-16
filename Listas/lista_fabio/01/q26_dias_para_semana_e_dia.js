import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Quantidade de Dias para Semanas e Dias -------\n")

    const dias_input = Number(input("Quantidade de dias: "))

    const semanas = Math.trunc(dias_input / 7)
    const dias_output = dias_input % 7

    print(`\n${dias_input} dias é equivalente a ${semanas} semanas e ${dias_output} dias`)
}

main()