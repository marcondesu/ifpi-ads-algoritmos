import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Verificar se a soma dos ângulos forma um triângulo e seu tipo -------\n")
    
    // entrada
    const angulo_1 = Number(input("1º ângulo: "))
    const angulo_2 = Number(input("2º ângulo: "))
    const angulo_3 = Number(input("3º ângulo: "))

    const verificacao_resultado = isTriangulo(angulo_1, angulo_2, angulo_3)
    const tipo_resultado = typeTriangulo(angulo_1, angulo_2, angulo_3)

    // saída
    if (verificacao_resultado == true) {
        print(`Sim, é um triângulo ${tipo_resultado}`)
    } else {
        print("De acordo com a soma dos ângulos internos, não corresponde a um triângulo.")
    }
}

// processamento
function isTriangulo(angulo1, angulo2, angulo3) {
    const angulo_soma = angulo1 + angulo2 + angulo3

    if (angulo1 == 0 || angulo2 == 0 || angulo3 == 0) {
        return false
    } else if (angulo_soma == 180) {
        return true
    } else {
        return false
    }
}

function typeTriangulo(ang1, ang2, ang3) {
    if (ang1 < 90 && ang2 < 90 && ang3 < 90) {
        return "acutângulo"
    } else if ((ang1 == 90) && (ang2 < 90 && ang3 < 90)) {
        return "retângulo"
    } else if ((ang2 == 90) && (ang1 < 90 && ang3 < 90)) {
        return "retângulo"
    } else if ((ang3 == 90) && (ang1 < 90 && ang2 < 90)) {
        return "retângulo"
    } else if ((ang1 > 90) && (ang2 < 90 && ang3 < 90)) {
        return "obtusângulo"
    } else if ((ang2 > 90) && (ang1 < 90 && ang3 < 90)) {
        return "obtusângulo"
    } else if ((ang3 > 90) && (ang1 < 90 && ang2 < 90)) {
        return "obtusângulo"
    } else {
        return "EXCEÇÃO"
    }
}

main()