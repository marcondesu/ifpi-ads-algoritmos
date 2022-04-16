import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Verificar se o valor dos lados formam um triângulo e seu tipo -------\n")
    
    // entrada
    const lado_1 = Number(input("1º lado: "))
    const lado_2 = Number(input("2º lado: "))
    const lado_3 = Number(input("3º lado: "))

    const verificacao_resultado = isTriangulo(lado_1, lado_2, lado_3)
    const tipo_resultado = typeTriangulo(lado_1, lado_2, lado_3)

    // saída
    if (verificacao_resultado == true) {
        print(`Sim, é um triângulo ${tipo_resultado}`)
    } else {
        print("De acordo com a soma dos lados, não corresponde a um triângulo.")
    }
}

// processamento
function isTriangulo(lado1, lado2, lado3) {
    if (lado1 + lado2 < lado3) {
        return false
    }
    
    if (lado1 + lado3 < lado2) {
        return false
    }
    
    if (lado2 + lado3 < lado1) {
        return false
    } else {
        return true
    }
}

function typeTriangulo(ang1, ang2, ang3) {
    if (ang1 == ang2 && ang2 == ang3) {
        return "equilátero"
    } else if (ang1 == ang2 && ang2 != ang3) {
        return "isósceles"
    } else if (ang1 == ang3 && ang3 != ang2) {
        return "isósceles"
    } else if (ang2 == ang3 && ang3 != ang1) {
        return "isósceles"
    } else if (ang1 != ang2 && ang2 != ang3) {
        return "escaleno"
    } else {
        return "EXCEÇÃO"
    }
}

main()