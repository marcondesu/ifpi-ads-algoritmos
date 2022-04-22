import {print, input} from '../../../../io_utils.js'

function main() {
    print('\n------- Calcular a área de um retângulo a partir das coordenadas dos seus cantos num plano cartesiano -------\n')
    print('As coordenadas deverão ser escritas no formato (x1, y1) e (x2, y2)\n')
    // entrada
    const coordenada_1 = input("1º Coordenada: ")
    const coordenada_2 = input("2º Coordenada: ")

    const resultado = calcularAreaDoRetangulo(coordenada_1, coordenada_2)

    // saída
    if (resultado < 0) {
        print('\nA área não pode ser negativa.')
    } else {
        print(`\nÁrea = ${resultado}`)
    }
}

// processamento    
function calcularAreaDoRetangulo(c1, c2) {
    const [x1, y1] = c1.split(',').map(Number)
    const [x2, y2] = c2.split(',').map(Number)

    if (x1 > x2 && y1 > y2) {
        const base = x1 - x2
        const altura = y1 - y2

        return base*altura
    } else if (x2 > x1 && y2 > y1) {
        const base = x2 - x1
        const altura = y2 - y1

        return base*altura
    } else {
        const base = x1 - x2
        const altura = y1 - y2

        return base*altura
    }
}

main()
