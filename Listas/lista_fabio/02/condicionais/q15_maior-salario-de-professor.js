import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Verificar o professor que recebe maior salário -------\n")

    // entrada
    print("- Professor 1")
    const horas1 = Number(input("Quantidade de horas de aula: "))
    const valor_por_hora1 = Number(input("Valor recebido por hora: "))

    print("\n- Professor 2")
    const horas2 = Number(input("Quantidade de horas de aula: "))
    const valor_por_hora2 = Number(input("Valor recebido por hora: "))

    const salario_prof1 = calcSalario(horas1, valor_por_hora1)
    const salario_prof2 = calcSalario(horas2, valor_por_hora2)

    const resultado = compare(salario_prof1, salario_prof2)

    // saída
    if (resultado == salario_prof1) {
        print('\nO professor 1 tem o maior salário.')
    } else {
        print('\nO professor 2 tem o maior salário.')
    }
}

// processamento
function calcSalario(tempo, valor) {
    return tempo * valor
}

function compare(valor1, valor2) {
    if (valor1 > valor2) {
        return valor1
    } else {
        return valor2
    }
}

main()
