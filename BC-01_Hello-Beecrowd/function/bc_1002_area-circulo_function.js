import {print, input} from '../../io_utils.js'

function area_circulo(x) {
    // procesamento
    const area = x**2 * 3.14159

    // saída
    print(`A=${area.toFixed(4)}\n`)
}

function main() {
    // entrada
    const raio = Number(input("Insira o raio do círculo: "))
    
    area_circulo(raio)
}

main()