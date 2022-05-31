var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

function main() {
    // entrada
    const valor = Number(lines[0])

    const intervalo = verificarPresencaEmIntervalo(valor)

    // saída
    if (intervalo) {
        console.log(`Intervalo ${intervalo}`)
    } else {
        console.log('Fora de intervalo')
    }
}

// processamento    
function verificarPresencaEmIntervalo(value) {
    if (value >= 0 && value <= 25) {
        return '[0,25]'
    } else if (value > 25 && value <= 50) {
        return '(25,50]'
    } else if (value > 50 && value <= 75) {
        return '(50,75]'
    } else if (value > 75 && value <= 100) {
        return '(75,100]'
    } else {
        return false
    }
}

main()
