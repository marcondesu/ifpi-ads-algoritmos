import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const tempo_gasto = Number(input("Distância percorrida: "))
    const velocidade_media = Number(input("Combustível gasto: "))

    // procesamento
    const gasto_combustivel = tempo_gasto * velocidade_media / 12

    // saída
    print(`${gasto_combustivel.toFixed(3)}`)
}

main()
