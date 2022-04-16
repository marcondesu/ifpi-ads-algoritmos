import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Metro para Km e Metros -------\n")

    const metro_input = Number(input("Valor em metro: "))
        
    const quilometro = metro_input / 1000
    const metro_output = metro_input % 1000

    print(`\n${metro_input}m é o equivalente a ${Math.trunc(quilometro)}km e ${metro_output}m`)
}

main()