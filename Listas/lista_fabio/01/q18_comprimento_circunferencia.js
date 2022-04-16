import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Cálculo da Área do Comprimento de uma Circunferência -------\n")

    const raio = Number(input("Raio: "))
    
    const comprimento = 2*Math.PI*raio

    print(`\n${comprimento.toFixed(2)}`)
}

main()