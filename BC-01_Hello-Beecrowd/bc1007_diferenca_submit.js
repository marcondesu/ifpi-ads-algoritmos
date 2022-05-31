var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const a = Number(lines[0])
    const b = Number(lines[1])
    const c = Number(lines[2])
    const d = Number(lines[3])

    // procesamento
    const diferenca = (a*b - c*d)

    // saída
    console.log(`DIFERENCA = ${diferenca}`)
}

main()