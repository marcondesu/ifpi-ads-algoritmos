var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const tempo_gasto = Number(lines[0])
    const velocidade_media = Number(lines[1])

    // procesamento
    const gasto_combustivel = tempo_gasto * velocidade_media / 12

    // saída
    console.log(`${gasto_combustivel.toFixed(3)}`)
}

main()