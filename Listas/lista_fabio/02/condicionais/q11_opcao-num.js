import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Mostrar o valor da opção escolhida -------\n")
    
    // entrada
    const num1 = Number(input("1º opção: "))
    const num2 = Number(input("2º opção: "))
    const num3 = Number(input("3º opção: "))
    const option = Number(input("Escolha uma das opções a ser mostrada: "))
    
    const option_to_be_printed = optionToBePrinted(num1, num2, num3, option)
    
    // saída
    if (option_to_be_printed == false) {
        print(`O valor da opção a ser mostrada é inválido`)
    } else {
        print(`\nO valor da opção escolhida é ${option_to_be_printed}`)
    }
}

// processamento
function optionToBePrinted(number1, number2, number3, option) {
    if (option != 1 && option != 2 && option != 3) { // se a variável opção for diferente de 1, 2 ou 3, retorne falso
        return false
    } else { // caso a variável option seja válida, comparar seu valor e retornar a opção a ser printada
        if (option == 1) {
            return number1
        } else if (option == 2) {
            return number2
        } else {
            return number3
        }
    }
}

main()
