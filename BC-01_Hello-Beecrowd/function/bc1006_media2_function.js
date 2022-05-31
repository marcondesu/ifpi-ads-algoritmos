import {print, input} from '../../io_utils.js'

function media2(a_, b_, c_) {
    // procesamento
    const media = (a_*2 + b_*3 + c_*5) / 10

    // saída
    print(`MEDIA = ${media.toFixed(1)}\n`)
}

function main() {
    // entrada
    const a = Number(input("A = "))
    const b = Number(input("B = "))
    const c = Number(input("C = "))

    media2(a, b, c)
}

main()
