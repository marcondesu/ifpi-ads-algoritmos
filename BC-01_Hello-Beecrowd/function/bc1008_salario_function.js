import {print, input} from '../../io_utils.js'

function salario(numero_funcionario_, horas_trabalhadas_, dinheiro_por_hora_) {
    // procesamento
    const salario = horas_trabalhadas_ * dinheiro_por_hora_

    // saída
    print(`NUMBER = ${numero_funcionario_}`)
    print(`SALARY = U$ ${salario.toFixed(2)}`)
}

function main() {
    // entrada
    const numero_funcionario = Number(input("Número do funcionário: "))
    const horas_trabalhadas = Number(input("Horas trabalhadas: "))
    const dinheiro_por_hora = Number(input("Valor recebido por hora: "))

    salario(numero_funcionario, horas_trabalhadas, dinheiro_por_hora)
}

main()
