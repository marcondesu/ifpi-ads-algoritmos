import {print, input} from '../../../../io_utils.js'

function main() {
    print('\n------- Verificar se um número é quadrado perfeito ou não -------\n')

    // entrada
    const number = input("Número: ")

    const resultado = verificarQuadradoPerfeito(number)

    // saída
    if (resultado) {
        print('Quadrado perfeito!')
    } else {
        print('Não é um quadrado perfeito.')
    }
}

// processamento    
function verificarQuadradoPerfeito(numero) {
    const milhar = Math.trunc(numero / 1000)
    const centena = Math.trunc((numero - milhar*1000) / 100)
    const dezena = Math.trunc((numero - milhar*1000 - centena*100) / 10)
    const unidade = Math.trunc(numero - milhar*1000 - centena*100 - dezena*10)

    const soma_das_dezenas = (milhar + centena) + (dezena + unidade)

    if (Math.sqrt(numero) == soma_das_dezenas) {
        return true
    } else {
        return false
    }
}

main()
