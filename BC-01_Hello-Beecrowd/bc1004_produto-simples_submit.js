var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const valor_1 = Number(lines[0])
    const valor_2 = Number(lines[1])

    // processamento
    const PROD = valor_1 * valor_2

    // saída
    console.log(`PROD = ${PROD}`)
}

main()