import {print, input} from '../io_utils.js'

function main() {
    print('\n------- Determinar o quadrante de uma coordenada -------\n')
    print('As coordenadas deverão ser digitadas no formato x, y\tEx.: 2.6 -8.5\n')

    // entrada
    const coordenadas = input('Coordenadas:')

    const resultado = determinarQuadrante(coordenadas)

    // saída
    print(`${resultado}`)
}

// processamento    
function determinarQuadrante(coords) {
    const [x, y] = coords.split(' ').map(Number)

    if (x > 0 && y > 0) { // se X e Y forem positivos
        return 'Q1'
    } else if (x < 0 && y > 0) { // se X for negativo e Y positivo
        return 'Q2'
    } else if (x < 0 && y < 0) { // se X e Y forem negativos
        return 'Q3'
    } else if (x > 0 && y < 0) { // se X for positivo e Y negativo
        return 'Q4'
    } else if (x === 0 && y !== 0) { // se X for 0 e Y diferente de 0
        return 'Eixo Y'
    } else if (x !== 0 && y === 0) { // se X for diferente de 0 e Y for 0
        return 'Eixo X'
    } else {
        return 'Origem'
    }
}

main()
