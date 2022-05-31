import {print, input} from '../io_utils.js'

function main() {
    print('\n------- Verificar se o valor está em algum dos intervalos [0,25], (25,50], (50,75], (75,100] -------\n')

    // entrada
    const valor = Number(input("Valor: "))

    const intervalo = verificarPresencaEmIntervalo(valor)

    // saída
    if (intervalo) {
        print(`Intervalo ${intervalo}`)
    } else {
        print('Fora de intervalo')
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