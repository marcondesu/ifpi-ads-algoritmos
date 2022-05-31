import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Verificar se um número entre 0 a 100 é primo ou não -------\n")
    
    // entrada
    const numero = Number(input("Insira o número (de 0 a 100): "))
    const validade = isPrimo(numero)
    
    // saída
    if (validade == true) {
        print (`O número é primo.`)
    } else {
        print(`O número não é primo.`)
    }
}

// processamento
function isPrimo(number, i) {
    if (number == 2) {
        return true
    } else {
        for (i = 2; i <= number; i++) {
            if ((number % 1 == 0) && (number % i == 0)) {
                return false;
            } else {
                return true            
            }
        }
    }
}

main()
