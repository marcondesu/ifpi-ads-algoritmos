import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Velocidade de km/h para m/s -------\n")

    const velocidade_kmh = Number(input("Velocidade em km/h: "))
    const velocidade_ms = velocidade_kmh / 3.6

    print(`\n${velocidade_ms.toFixed(2)}m/s`)
}

main()
