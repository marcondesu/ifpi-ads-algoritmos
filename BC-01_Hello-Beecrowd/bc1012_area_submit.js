var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    l0 = lines[0]
    v0 = l0.split(' ')
    const a = Number(v0[0])
    const b = Number(v0[1])
    const c = Number(v0[2])

    // procesamento
    const area_triangulo = (a * c) / 2
    const area_circulo = 3.14159 * (c * c)
    const area_trapezio = ((a + b) * c) / 2
    const area_quadrado = b * b
    const area_retangulo = a * b

    // saída
    console.log(`TRIANGULO: ${area_triangulo.toFixed(3)}`)
    console.log(`CIRCULO: ${area_circulo.toFixed(3)}`)
    console.log(`TRAPEZIO: ${area_trapezio.toFixed(3)}`)
    console.log(`QUADRADO: ${area_quadrado.toFixed(3)}`)
    console.log(`RETANGULO: ${area_retangulo.toFixed(3)}`)
}

main()