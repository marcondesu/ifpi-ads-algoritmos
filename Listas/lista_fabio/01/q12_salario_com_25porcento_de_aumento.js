import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Aumento de 25% no Salário -------\n")

    const salario = Number(input("Salário: "))
    const salario25 = (salario/100) * 125

    print(`\nR$${salario25.toFixed(2)}`)
}

main()