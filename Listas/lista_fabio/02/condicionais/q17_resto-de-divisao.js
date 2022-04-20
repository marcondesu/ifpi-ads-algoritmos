import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Tomar decisões a partir do resto de uma divisão -------\n")
    print("\nCondições:\nSe o resto da divisão do valor A pelo valor B for igual a 1, escrever a soma das variáveis + o resto da divisão")
    print("Se o resto da divisão for 2, escrever se o 1° e o 2° são pares ou ímpares")
    print("Se for 3, multiplique a soma dos valores pelo primeiro valor")
    print("Se for 4, dividir a soma dos valores pelo segundo valor (se ele for diferente de 0)")
    print("Caso o resto não for nenhum dos valores previamente ditos, calcular o quadrado dos dois valores\n")

    // entrada
    const valor_1 = Number(input("1º Valor: "))
    const valor_2 = Number(input("2º Valor: "))

    const resto_da_divisao = calcResto(valor_1, valor_2)
    const resultado_da_condicao = decideByResto(valor_1, valor_2, resto_da_divisao)

    // saída
    print(`\n${resultado_da_condicao}`)
}

// processamento
function calcResto(v1, v2) {
    return v1 % v2
}

function decideByResto(v1, v2, resto) {
    if (resto == 1) {
        return (v1 + v2 + resto)
    } else if (resto == 2) {
        let pares_e_impares = []

        // comparar se os valores são par ou ímpar utilizando a função evenOrOdd
        if (evenOrOdd(v1)) {
            pares_e_impares.push("Par")
        } else {
            pares_e_impares.push("Ímpar")
        }

        if (evenOrOdd(v2)) {
            pares_e_impares.push("Par")
        } else {
            pares_e_impares.push("Ímpar")
        }

        return pares_e_impares
    } else if (resto == 3) {
        return (v1 + v2) * v1
    } else if (resto == 4) {
        if (v2 != 0) {
            return (v1 + v2) / v2
        }
    } else {
        return [v1*v1, v2*v2]
    }
}

function evenOrOdd(num) {
    if (num % 2 == 0) {
        return true // par
    } else {
        return false // ímpar
    }
}

main()