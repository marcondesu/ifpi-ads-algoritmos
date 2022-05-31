import {print, input} from '../../io_utils.js'

function diferenca(a_, b_, c_, d_) {
    // procesamento
    const diferenca = (a_*b_ - c_*d_)

    // saída
    print(`DIFERENCA = ${diferenca}`)
}

function main() {
    // entrada
    const a = Number(input("A = "))
    const b = Number(input("B = "))
    const c = Number(input("C = "))
    const d = Number(input("D = "))

    diferenca(a, b, c, d)
}

main()
