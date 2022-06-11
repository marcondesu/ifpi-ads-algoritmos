let input = require('fs').readFileSync('/dev/stdin', 'utf-8')
let lines = input.split('\n').map(Number)

function main() {
    const cases_quantity = lines[0]
    let fibonacci_term = 0

    for (let i = 1; i <= cases_quantity; i++) {
        fibonacci_term = getFibonacciTermInPosition(lines[i])

        console.log(`Fib(${lines[i]}) = ${fibonacci_term}`)
    }
}

function getFibonacciTermInPosition(position) {
    const fibonacci = new Array(position)
    fibonacci[0] = 0
    fibonacci[1] = 1

    for (let i = 2; i <= position; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
    }

    return fibonacci[position]
}

main()
