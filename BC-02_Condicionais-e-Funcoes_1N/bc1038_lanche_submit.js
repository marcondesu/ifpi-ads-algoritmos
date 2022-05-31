var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

function main() {
    // entrada
    const [codigo, quantidade] = lines[0].split(' ').map(Number)

    const conta = calcularConta(codigo, quantidade)

    // saída
    console.log(`Total: R$ ${conta.toFixed(2)}`)
}

// processamento    
function calcularConta(code, quantity) {
    if (code == 1) { // valor do item 1: R$4.00
        return quantity*4
    } else if (code == 2) { // valor do item 2: R$4.50
        return quantity*4.5
    } else if (code == 3) { // valor do item 3: R$5.00
        return quantity*5
    } else if (code == 4) { // valor do item 4: R$2.00
        return quantity*2
    } else if (code == 5) { // valor do item 5: R$1.50
        return quantity*1.5
    }
} 

main()
