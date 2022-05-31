import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Ler 3 números e ordená-los em ordem crescente -------\n")
    
    // entrada
    const numero_1 = Number(input("1º Número: "))
    const numero_2 = Number(input("2º Número: "))
    const numero_3 = Number(input("3º Número: "))

    const resultado = ordenar(numero_1, numero_2, numero_3)

    // saída
    print(`\n::::: Pódio :::::\n1º - ${resultado[0]}\n2º - ${resultado[1]}\n3º - ${resultado[2]}`)
}

// processamento
function ordenar(number1, number2, number3) {
    if (number1 < number2 && number2 < number3) { // n1 < n2 < n3
        return [number1, number2, number3]
    }
    else if (number1 < number3 && number3 < number2) { // n1 < n3 < n2
        return [number1, number3, number2]
    }
    else if (number2 < number1 && number1 < number3) { // n2 < n1 < n3
        return [number2, number1, number3]
    }
    else if (number2 < number3 && number3 < number1) { // n2 < n3 < n1
        return [number2, number3, number1]
    }
    else if (number3 < number2 && number2 < number1) { // n3 < n2 < n1
        return [number3, number2, number1]
    }
    else if (number3 < number1 && number1 < number2) { // n3 < n1 < n2
        return [number3, number1, number2]
    }
}

main()
