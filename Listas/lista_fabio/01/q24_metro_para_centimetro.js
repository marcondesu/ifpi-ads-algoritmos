import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Metro para Centímetro -------\n")

    const metro = Number(input("Valor em metro: "))
        
    const centimetro = metro*100

    print(`\n${metro}m é o equivalente a ${centimetro.toFixed(0)}cm`)
}

main()
