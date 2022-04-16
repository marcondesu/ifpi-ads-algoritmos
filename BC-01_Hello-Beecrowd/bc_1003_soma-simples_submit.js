var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const a = Number(lines[0])
    const b = Number(lines[1])

    // processamento
    soma = a + b

    // saída
    console.log(`SOMA = ${soma}`)
}

main()