var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

function main() {
    // entrada
    const [valor_1, valor_2, valor_3] = lines[0].split(' ').map(Number)

    const ordem = ordenarDecrescente(valor_1, valor_2, valor_3)

    // saída
    console.log(`${ordem[0]}\n${ordem[1]}\n${ordem[2]}\n\n${valor_1}\n${valor_2}\n${valor_3}`)
}

// processamento    
function ordenarDecrescente(v1, v2, v3) {
    if (v1 < v2) {
        if (v2 < v3) {
            return [v1, v2, v3]
        } else if (v3 < v2) {
            return [v1, v3, v2]
        } else {
            return [v3, v1, v2]
        }
    } else { // v2 < v1
        if (v1 < v3) {
            return [v2, v1, v3]
        } else if (v3 < v1) {
            return [v2, v3, v1]
        } else {
            return [v3, v2, v1]
        }
    }
}

main()
