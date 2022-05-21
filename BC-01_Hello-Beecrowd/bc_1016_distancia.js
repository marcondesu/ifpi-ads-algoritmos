import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('\n------- Calcular distância entre dois pontos no plano -------\n')

    const distance_km = Number(loadFile('../Testes/bc_1016_teste.txt'))

    console.log(`${calcMinutes(distance_km)} minutos`)
}

function calcMinutes(distance) {
    return distance*2
}

main()
