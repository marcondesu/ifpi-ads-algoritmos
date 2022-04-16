var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

function main() {
    // entrada
    const raio = Number(lines[0]);

    // procesamento
    const area = raio*raio * 3.14159;

    // saída
    console.log(`A=${area.toFixed(4)}\n`);
}

main()