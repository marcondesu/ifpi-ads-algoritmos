import {print, input} from '../../../../io_utils.js'

function main() {
    // entrada
    print("------- Ler 3 números e verificar quantos números iguais há entre eles -------\n")

    const numero_1 = Number(input("1º Número: "))
    const numero_2 = Number(input("2º Número: "))
    const numero_3 = Number(input("3º Número: "))

    const resultado = comparar(numero_1, numero_2, numero_3)

    // saída
    if (resultado > 0) {
        print(`${resultado} números iguais`)
    } else {
        print("Todos os números são diferentes")
    }
}

function comparar(n1, n2, n3, numeros_iguais) {
    numeros_iguais = 0

    if (n1 == n2 && n2 == n3) {
        numeros_iguais = 3
    } else {
        if (n1 == n2 || n1 == 3) {
            numeros_iguais++
        }
        if (n2 == n1 || n2 == n3) {
            numeros_iguais++
        }
        if (n3 == n1 || n3 == n2) {
            numeros_iguais++
        }
    }

    return numeros_iguais
}

main()
