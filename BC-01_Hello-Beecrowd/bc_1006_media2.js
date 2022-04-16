import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const a = Number(input("A = "))
    const b = Number(input("B = "))
    const c = Number(input("C = "))

    // procesamento
    const media = (a*2 + b*3 + c*5) / 10

    // saída
    print(`MEDIA = ${media.toFixed(1)}\n`)
}

main()