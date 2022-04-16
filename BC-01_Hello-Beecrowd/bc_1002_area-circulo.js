import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const raio = Number(input())

    // procesamento
    const area = raio**2 * 3.14159

    // saída
    print(`A=${area.toFixed(4)}\n`)
}

main()