var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

function main() {
    // entrada
    const [valor_1, valor_2, valor_3] = lines[0].split(' ').map(Number)

    const ordem = ordenarCrescente(valor_1, valor_2, valor_3)

    // saída
    // como a função ordena crescentemente, apenas inverti a ordem do print
    console.log(`${ordem[2]}\n${ordem[1]}\n${ordem[0]}\n\n${valor_1}\n${valor_2}\n${valor_3}`)
}

// processamento    
function ordenarCrescente(v1, v2, v3) {
   if (v1 > v2) {
       if (v2 > v3) {
           return [v1, v2, v3]
       } else if (v3 > v2) {
           return [v1, v3, v2]
       } else {
           return [v3, v1, v2]
       }
   } else { // v2 > v1
       if (v1 > v3) {
           return [v2, v1, v3]
       } else if (v3 > v1) {
           return [v2, v3, v1]
       } else {
           return [v3, v2, v1]
       }
   }
}

main()
