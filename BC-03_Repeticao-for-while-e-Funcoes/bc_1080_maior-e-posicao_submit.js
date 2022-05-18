var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n').map(Number)

function main() {
    const result = getLargestNumberAndItsPosition(lines)

    console.log(`${result[0]}\n${result[1]}`)
}

function getLargestNumberAndItsPosition(lines) {
    let largest_number = 0
    let position = 0

    for (let i = 0; i < 100; i++) {
        if (lines[i] > largest_number) {
            largest_number = lines[i]
            position = i + 1
        }
    }

    return [largest_number, position]
}

main()
