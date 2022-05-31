var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    const distance_km = Number(lines[0])

    console.log(`${calcMinutes(distance_km)} minutos`)
}

function calcMinutes(distance) {
    return distance*2
}

main()
