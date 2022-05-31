import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const nome = (input("Nome: "))
    const salario_fixo = Number(input("Salário fixo: "))
    const vendas_no_mes = Number(input("Vendas efetuadas no mês: "))

    // procesamento
    const salario_bonus = salario_fixo + ((vendas_no_mes/100) * 15)

    // saída
    print(`TOTAL = R$ ${salario_bonus.toFixed(2)}`)
}

main()
