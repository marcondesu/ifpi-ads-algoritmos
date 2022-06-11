import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Fibonacci em Vetor -------\n')
    
    const lines = loadFile('../Testes/bc1176_teste.txt').split('\r\n').map(Number)
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
