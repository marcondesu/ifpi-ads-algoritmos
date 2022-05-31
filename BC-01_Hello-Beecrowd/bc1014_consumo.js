import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const distancia_percorrida = Number(input("Distância percorrida: "))
    const combustivel_gasto = Number(input("Combustível gasto: "))

    // procesamento
    const consumo_medio = distancia_percorrida / combustivel_gasto

    // saída
    print(`${consumo_medio.toFixed(3)} km/l`)
}

main()
