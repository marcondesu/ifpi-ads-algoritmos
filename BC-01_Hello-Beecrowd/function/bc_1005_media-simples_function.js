import {print, input} from '../../io_utils.js'

function media_simples(x, y) {
    // procesamento
    const media = (x*3.5 + y*7.5) / 11

    // saída
    print(`MEDIA = ${media.toFixed(5)}`)
}

function main() {
    // entrada
    const a = Number(input("A = "))
    const b = Number(input("B = "))

    media_simples(a, b)
}

main()