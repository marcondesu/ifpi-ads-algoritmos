import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Verificar 5 números e mostrar quais são os maiores que a média -------\n")

    // entrada
    const num1 = Number(input("1º Número: "))
    const num2 = Number(input("2º Número: "))
    const num3 = Number(input("3º Número: "))
    const num4 = Number(input("4º Número: "))
    const num5 = Number(input("5º Número: "))

    const resultado_media = median(num1, num2, num3, num4, num5)
    const maiores_que_a_media = greaterThanMedian(num1, num2, num3, num4, num5, resultado_media)

    // saída
    print(`\nA média é igual a ${resultado_media}\nOs valores maiores que a média são ${maiores_que_a_media}`)
}

// processamento
function median(n1, n2, n3, n4, n5) {
    const media = (n1 + n2 + n3 + n4 + n5) / 5

    return media
}

function greaterThanMedian(n1, n2, n3, n4, n5, median) {
    let maiores = []

    if (n1 > median) {
        maiores.push(n1)
    }
    if (n2 > median) {
        maiores.push(n2)
    }
    if (n3 > median) {
        maiores.push(n3)
    }
    if (n4 > median) {
        maiores.push(n4)
    }
    if (n5 > median) {
        maiores.push(n5)
    }

    return maiores
}

main()
