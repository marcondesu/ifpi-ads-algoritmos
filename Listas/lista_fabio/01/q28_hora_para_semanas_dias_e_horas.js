import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Quantidade de Horas para Semanas, Dias e Horas -------\n")

    const horas_input = Number(input("Quantidade de horas: "))

    const semanas = Math.trunc(horas_input / 168)
    const dias = Math.trunc((horas_input % 168) / 24)
    const horas = Math.trunc(((horas_input % 168) % 24))
    
    print(`\n${horas_input} horas é equivalente a ${semanas} semanas, ${dias} dias e ${horas} horas`)
}

main()
