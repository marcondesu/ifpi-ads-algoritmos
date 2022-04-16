import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Ler 2 números e determinar o maior e o menor -------\n")
    
    // entrada
    const numero_1 = Number(input("1º Número: "))
    const numero_2 = Number(input("2º Número: "))

    const [n1, n2] = comparar(numero_1, numero_2)

    // saída
    print(`\n${n1} é maior que ${n2}`)
}

// processamento
function comparar(n1, n2) {
    if (n1 > n2) {
        return [n1, n2]
    } else {
        return [n2, n1]
    }
}

main()