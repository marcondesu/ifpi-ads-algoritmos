import {print, input} from '../io_utils.js'

function main() {
    // entrada
    const raio = Number(input("Raio da esfera: "))

    // procesamento
    const volume = (4.0 / 3.0) * 3.14159 * (raio*raio*raio)

    // saída
    print(`VOLUME = ${volume.toFixed(3)}`)
}

main()
