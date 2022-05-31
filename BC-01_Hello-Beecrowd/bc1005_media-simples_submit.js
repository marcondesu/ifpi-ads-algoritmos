var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const a = Number(lines[0])
    const b = Number(lines[1])

    // processamento
    const media = (a*3.5 + b*7.5) / 11

    // saída
    console.log(`MEDIA = ${media}`)
}

main()
