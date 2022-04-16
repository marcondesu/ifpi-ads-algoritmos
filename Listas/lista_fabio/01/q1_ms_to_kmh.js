import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Velocidade de m/s para km/h -------\n")

    const velocidade_ms = Number(input("Velocidade em m/s: "))
    const velocidade_kmh = velocidade_ms * 3.6

    print(`\n${velocidade_kmh}km/h`)
}

main()