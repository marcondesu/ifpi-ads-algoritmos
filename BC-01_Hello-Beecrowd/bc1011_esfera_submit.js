var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const raio = Number(lines[0])

    // procesamento
    const volume = (4.0 / 3.0) * 3.14159 * (raio*raio*raio)

    // saída
    console.log(`VOLUME = ${volume.toFixed(3)}`)
}

main()
