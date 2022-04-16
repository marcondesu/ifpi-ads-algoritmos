import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Cálculo da Área do Quadrado -------\n")

    const lado = Number(input("Lado: "))
    
    const area = lado*lado

    print(`\n${area.toFixed(2)}`)
}

main()