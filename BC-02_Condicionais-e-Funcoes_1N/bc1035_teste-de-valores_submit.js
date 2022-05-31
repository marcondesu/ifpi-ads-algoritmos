var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

function main() {    
    // entrada
    const [valor_a, valor_b, valor_c, valor_d] = lines[0].split(' ').map(Number)
    
    const a_positivo = Math.sign(valor_a)
    const c_positivo = Math.sign(valor_c)
    const d_positivo = Math.sign(valor_d)
    
    const resultado = validarValores(valor_a, valor_b, valor_c, valor_d, a_positivo, c_positivo, d_positivo)
    
    // saída
    console.log(`\n${resultado}`)
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
