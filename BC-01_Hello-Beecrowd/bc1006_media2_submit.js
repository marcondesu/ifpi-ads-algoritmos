var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const a = Number(lines[0])
    const b = Number(lines[1])
    const c = Number(lines[2])

    // procesamento
    const media = (a*2 + b*3 + c*5) / 10

    // saída
    console.log(`MEDIA = ${media.toFixed(1)}`)
}

main()