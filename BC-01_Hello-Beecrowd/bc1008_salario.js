import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const numero_funcionario = Number(input("Número do funcionário: "))
    const horas_trabalhadas = Number(input("Horas trabalhadas: "))
    const dinheiro_por_hora = Number(input("Valor recebido por hora: "))

    // procesamento
    const salario = horas_trabalhadas * dinheiro_por_hora

    // saída
    print(`NUMBER = ${numero_funcionario}`)
    print(`SALARY = U$ ${salario.toFixed(2)}`)
}

main()
