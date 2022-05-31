import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Quantidade de Segundos para Horas, Minutos e Segundos -------\n")

    const segundos_input = Number(input("Quantidade de segundos: "))

    const horas = Math.trunc(segundos_input / 3600)
    const minutos = Math.trunc((segundos_input % 3600) / 60)
    const segundos_output = Math.trunc(((segundos_input % 3600) % 60))
    
    print(`\n${segundos_input} segundos é equivalente a ${horas} horas, ${minutos} minutos e ${segundos_output} segundos`)
}

main()
