import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Ler 5 números e determinar o maior e o menor -------\n")

    print("Obs.: todos os números devem ser diferentes\n")

    // entrada
    const num1 = Number(input("1º Número: "))
    const num2 = Number(input("2º Número: "))
    const num3 = Number(input("3º Número: "))
    const num4 = Number(input("4º Número: "))
    const num5 = Number(input("5º Número: "))

    const resultado = compare(num1, num2, num3, num4, num5)

    // saída
    if (resultado == false) {
        print("\nDois ou mais números são iguais.")    
    } else {
        print(`\nMaior: ${resultado[0]}\nMenor: ${resultado[1]}`)
    }
}

// processamento
function compare(n1, n2, n3, n4, n5) {
    if (n1 != n2 && n1 != n3 && n1 != n4 && n1 != n5) {
        const larger = Math.max(n1, n2, n3, n4, n5)
        const smaller = Math.min(n1, n2, n3, n4, n5)

        return [larger, smaller]
    } else {
        return false
    }
}

main()