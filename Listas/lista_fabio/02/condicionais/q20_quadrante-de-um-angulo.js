import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Verificar o quadrante de um ângulo -------\n")


    // entrada
    const angulo = Number(input("Ângulo: "))

    // processamento
    const quadrante = verifyQuadrant(angulo)

    // saída
    if (quadrante == 1) {
        print('Primeiro quadrante.')
    } else if (quadrante == 2) {
        print('Segundo quadrante.')
    } else if (quadrante == 3) {
        print('Terceiro quadrante.')
    } else {
        print('Quarto quadrante.')
    }
}

// processamento
function verifyQuadrant(angulo) {
    if (angulo > 0 && angulo < 90) {
        return 1
    } else if (angulo > 90 && angulo < 180) {
        return 2
    } else if (angulo > 180 && angulo < 270) {
        return 3
    } else if (angulo > 270 && angulo < 360) {
        return 4
    }
}

main()
