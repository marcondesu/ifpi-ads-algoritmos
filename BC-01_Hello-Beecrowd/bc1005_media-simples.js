import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const a = Number(input("A = "))
    const b = Number(input("B = "))

    // procesamento
    const media = (a*3.5 + b*7.5) / 11

    // saída
    print(`MEDIA = ${media.toFixed(5)}`)
}

main()