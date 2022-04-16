import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Calcular 70% do Valor em Real -------\n")

    const real = Number(input("Valor em real: "))
    const real70 = (real/100) * 70

    print(`\nR$${real70.toFixed(2)}`)
}

main()