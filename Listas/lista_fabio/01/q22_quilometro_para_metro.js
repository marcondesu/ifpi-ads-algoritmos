import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Quilômetro para Metros -------\n")

    const quilometro = Number(input("Valor em quilômetro: "))
        
    const metro = quilometro*1000

    print(`\n${quilometro}km é o equivalente a ${metro.toFixed(0)}m`)
}

main()