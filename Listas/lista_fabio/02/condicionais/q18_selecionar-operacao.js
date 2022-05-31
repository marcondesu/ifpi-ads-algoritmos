import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Selecionar uma operação a ser feita sobre dois valores -------\n")
    print("# Opções de operações:\n\t 1 - Adição\n\t 2 - Subtração\n\t 3 - Multiplicação \n\t 4 - Divisão\n")


    // entrada
    const valor1 = Number(input("1º valor: "))
    const valor2 = Number(input("2º valor: "))
    const operacao = Number(input("Operação a ser executada: "))

    const resultado = applyOperation(valor1, valor2, operacao)

    // saída
    if (resultado) {
        print(`\nResultado: ${resultado}`)
    } else {
        print("\nOperação inválida")
    }
}

// processamento
function applyOperation(v1, v2, operacao) {
    if (operacao == 1) {
        return v1 + v2
    } else if (operacao == 2) {
        return v1 - v2
    } else if (operacao == 3) {
        return v1 * v2
    } else if (operacao == 4){
        return v1 / v2
    } else {
        return false
    }
}

main()
