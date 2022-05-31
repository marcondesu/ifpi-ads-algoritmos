import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Cálculo do Volume de uma Esfera -------\n")

    const raio = Number(input("Raio: "))
    const pi = 3.14
        
    const volume = (4*pi*(raio**3) / 3)

    print(`\nO Volume da esfera é ${volume.toFixed(2)}`)
}

main()
