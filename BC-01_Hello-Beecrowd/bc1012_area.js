import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const a = Number(input("Valor A: "))
    const b = Number(input("Valor B: "))
    const c = Number(input("Valor C: "))

    // procesamento
    const area_triangulo = (a * c) / 2
    const area_circulo = 3.14159 * (c * c)
    const area_trapezio = ((a + b) * c) / 2
    const area_quadrado = b * b
    const area_retangulo = a * b

    // saída
    print(`TRIANGULO: ${area_triangulo.toFixed(3)}`)
    print(`CIRCULO: ${area_circulo.toFixed(3)}`)
    print(`TRAPEZIO: ${area_trapezio.toFixed(3)}`)
    print(`QUADRADO: ${area_quadrado.toFixed(3)}`)
    print(`RETANGULO: ${area_retangulo.toFixed(3)}`)
}

main()