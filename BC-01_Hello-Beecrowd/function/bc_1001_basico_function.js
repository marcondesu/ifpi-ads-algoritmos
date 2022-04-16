import {print, input} from '../../io_utils.js'

function soma(x, y) {
    return print(`\n${x+y}`)
}

function main() {
    // entrada
    const a = Number(input("A = "))
    const b = Number(input("B = "))
    // saída
    soma(a, b)
}

main()