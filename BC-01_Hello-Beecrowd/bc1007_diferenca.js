import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const a = Number(input("A = "))
    const b = Number(input("B = "))
    const c = Number(input("C = "))
    const d = Number(input("D = "))

    // procesamento
    const diferenca = (a*b - c*d)

    // saída
    print(`DIFERENCA = ${diferenca}`)
}

main()