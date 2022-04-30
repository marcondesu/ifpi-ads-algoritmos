import {print, input} from '../io_utils.js'

function main() {
    print('------- Verificar condição entre 4 valores -------\n')
    print('Condição: se B>C e se D>A e se (C+D) > (A+B) e se C e D forem positivos e se A for positivo.\n')
    
    // entrada
    const valor_a = input('A: ')
    const valor_b = input('B: ')
    const valor_c = input('C: ')
    const valor_d = input('D: ')
    
    const a_positivo = Math.sign(valor_a)
    const c_positivo = Math.sign(valor_c)
    const d_positivo = Math.sign(valor_d)
    
    const resultado = validarValores(valor_a, valor_b, valor_c, valor_d, a_positivo, c_positivo, d_positivo)
    
    // saída
    print(`\n${resultado}`)
}

// processamento
function validarValores(a, b, c, d, apositivo, cpositivo, dpositivo) {
    if (b > c && d > a && (c+d) > (a+b) && (cpositivo == 1 && dpositivo == 1) && apositivo == 1) {
        return 'Valores aceitos'
    } else {
        return 'Valores nao aceitos'
    }
}

main()
