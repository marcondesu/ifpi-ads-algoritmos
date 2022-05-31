import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Verificar se um número inteiro é par ou ímpar -------\n")
    
    // entrada
    const num = Number(input("Número inteiro: "))
    
    const even_or_odd = evenOrOdd(num)
    
    // saída
    if (even_or_odd == true) {
        print(`\nO número é par`)
    } else {
        print(`\nO número é ímpar`)
    }
}

// processamento
function evenOrOdd(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}

main()
