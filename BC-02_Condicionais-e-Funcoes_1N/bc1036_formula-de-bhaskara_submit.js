var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

function main() {
    // entrada
    const [a, b, c] = lines[0].split(' ').map(Number)

    const raizes = calcularRaizesEquacao2Grau(a, b, c)

    // saída
    if (raizes) {
        console.log(`R1 = ${raizes[0]}\nR2 = ${raizes[1]}`)
    } else {
        console.log('Impossivel calcular')
    }
}

// processamento    
function calcularRaizesEquacao2Grau(a, b, c) {
   if (a === 0 || ((b**2 - 4*a*c) < 0)) {
       return false
   } else {
       const raiz_1 = ((-b + Math.sqrt(b*b - 4*a*c)) / (2*a))
       const raiz_2 = ((-b - Math.sqrt(b*b - 4*a*c)) / (2*a))

       return [raiz_1.toFixed(5), raiz_2.toFixed(5)]
   }
}

main()
