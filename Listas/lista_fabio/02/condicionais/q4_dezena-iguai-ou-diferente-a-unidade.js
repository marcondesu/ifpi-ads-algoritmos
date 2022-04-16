import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Verificar se a dezena é igual ou diferente à unidade -------\n")
    
    // entrada
    const numero = Number(input("Número com 2 dígitos: "))

    const resultado = comparar(numero)

    // saída
    if (resultado == 'igual') {
        print(`\nA dezena é ${resultado} à unidade`)
    } else {
        print(`\nA dezena é ${resultado} da unidade`)
    }
}

// processamento
function comparar(number) {
    const dezena = Math.trunc(number / 10)
    const unidade = Math.trunc(number - dezena*10)
    
    if (dezena == unidade) {
        return "igual"
    } else {
        return "diferente"
    }
}

main()