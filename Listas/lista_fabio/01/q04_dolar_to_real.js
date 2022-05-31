import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Dólar para Real -------\n")

    const dolar = Number(input("Valor em dólar: "))
    const dolar_hoje = 4.76
    const real = dolar*dolar_hoje

    print(`\nR$${real.toFixed(2)}`)
}

main()
