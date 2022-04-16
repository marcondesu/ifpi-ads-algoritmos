import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Calcular a Quantidade Gasta de Dinheiro por um Fumante Baseado na Quantidade de Anos que ele Fuma -------\n")

    const anos = Number(input("Anos fumando: "))
    const cigarros = Number(input("Quantidade de cigarros fumados por dia: "))
    const cigarro_preco = Number(input("Preço da carteira de cigarro: "))

    const dinheiro_gasto = (((anos*365) * cigarros) / 20) * cigarro_preco

    print(`\nQuantidade gasta em dinheiro: R$${dinheiro_gasto.toFixed(2)}`)
}

main()