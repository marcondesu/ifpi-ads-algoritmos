import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Quantidade de Minutos para Dias, Horas e Minutos -------\n")

    const minutos_input = Number(input("Quantidade de minutos: "))

    const dias = Math.trunc(minutos_input / 1440)
    const horas = Math.trunc((minutos_input % 1440) / 60)
    const minutos = Math.trunc(((minutos_input % 1440) % 60))
    
    print(`\n${minutos_input} minutos é equivalente a ${dias} dias, ${horas} horas e ${minutos} minutos`)
}

main()