var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const distancia_percorrida = Number(lines[0])
    const combustivel_gasto = Number(lines[1])

    // procesamento
    const consumo_medio = distancia_percorrida / combustivel_gasto

    // saída
    console.log(`${consumo_medio.toFixed(3)} km/l`)
}

main()
