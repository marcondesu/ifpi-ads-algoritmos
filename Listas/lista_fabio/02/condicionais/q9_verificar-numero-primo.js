import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Verificar se um número entre 0 a 100 é primo ou não -------\n")
    
    // entrada
    const numero = Number(input("Insira o número (de 0 a 100): "))
    const validade = isPrimo(numero)
    
    // saída
    print (`${validade}`)
}

// processamento
function isPrimo(number) {
    
}

main()