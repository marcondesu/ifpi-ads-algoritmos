import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Quantidade de Meses para Anos e Meses -------\n")

    const meses_input = Number(input("Quantidade de meses: "))

    const anos = Math.trunc(meses_input / 12)
    const meses = Math.trunc((meses_input % 12))
    
    print(`\n${meses_input} meses é equivalente a ${anos} anos e ${meses} meses`)
}

main()
