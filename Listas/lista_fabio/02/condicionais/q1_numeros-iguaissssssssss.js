import {print, input} from '../../../../io_utils.js'

function main() {
    // saída
    print("------- Ler 3 números e verificar quantos números iguais há entre eles -------\n")

    const numero_1 = Number(input("1º Número com 3 dígitos: "))
    const numero_2 = Number(input("2º Número com 3 dígitos: "))
    const numero_3 = Number(input("3º Número com 3 dígitos: "))

    comparar(numero_1, numero_2, numero_3)
}

function comparar(n1, n2, n3, numeros_iguais) {
    return numeros_iguais
}

main()