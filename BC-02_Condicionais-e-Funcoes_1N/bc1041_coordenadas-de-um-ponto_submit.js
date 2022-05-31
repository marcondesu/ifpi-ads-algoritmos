var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

function main() {
    // entrada
    const coordenadas = lines[0]

    const resultado = determinarQuadrante(coordenadas)

    // saída
    console.log(`${resultado}`)
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
