import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Calcular o Custo do Consumidor de um Carro Novo -------\n")

    const custo_fabrica = Number(input("Custo de fábrica do carro: "))

    const impostos = (custo_fabrica/100) * 45
    const porcentagem_distribuidor = (custo_fabrica/100) * 28

    print(impostos, porcentagem_distribuidor)

    const custo_consumidor = custo_fabrica + porcentagem_distribuidor + impostos
    
    print(`\nCom um custo de fábrica no valor de R$${custo_fabrica.toFixed(2)} o custo do consumidor será de R$${custo_consumidor.toFixed(2)}`)
}

main()