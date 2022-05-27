var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    for (let line of lines) {
        if (line != line[0]) {
            line = line.split(' ').map(Number)
            
            console.log(divideAndDecide(line[0], line[1]))
        }
    }
}

function divideAndDecide(n1, n2) {
    const result = n1 / n2

    if (result === -Infinity || result === Infinity) {
        return 'divisao impossivel'
    } else {
        return result.toFixed(1)
    }
}

main()
