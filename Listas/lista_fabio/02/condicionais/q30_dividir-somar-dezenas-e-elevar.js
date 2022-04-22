import {print, input} from '../../../../io_utils.js'

function main() {
    print('\n------- Verificar se um número atende às propriedades -------\n')
    print('Propriedades: Dividir número de 4 dígitos em duas dezenas, somá-las e o quadrado desse número seria exatamente o primeiro número de 4 dígitos\n')

    // entrada
    const number = input("Número: ")

    const resultado = verificarPropriedade(number)

    // saída
    if (resultado) {
        print('Atende à propriedade!')
    } else {
        print('Não atende às propriedades.')
    }
}

// processamento    
function verificarPropriedade(numero) {
    const milhar = Math.trunc(numero / 1000)
    const centena = Math.trunc((numero - milhar*1000) / 100)
    const dezena = Math.trunc((numero - milhar*1000 - centena*100) / 10)
    const unidade = Math.trunc((numero - milhar*1000 - centena*100 - dezena*10))

    const soma_das_dezenas = (milhar*10 + centena) + (dezena*10 + unidade)

    if (Math.pow(soma_das_dezenas, 2) == numero) {
        return true
    } else {
        return false
    }
}

main()
