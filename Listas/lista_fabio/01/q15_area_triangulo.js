import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Cálculo da Área do Triângulo -------\n")

    const base = Number(input("Base: "))
    const altura = Number(input("Altura: "))
    
    const area = (base*altura) / 2

    print(`\n${area.toFixed(2)}`)
}

main()