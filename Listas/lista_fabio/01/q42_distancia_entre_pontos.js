import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Calcular a Distância Entre Dois Pontos no Plano -------\n")

    print("-- Pontos no eixo X (x1, x2) --\n")
    const x1 = Number(input("x1: "))
    const x2 = Number(input("x2: "))

    print("\n-- Pontos no eixo Y (y1, y2) --\n")
    const y1 = Number(input("y1: "))
    const y2 = Number(input("y2: "))

    const distancia = Math.sqrt((x2-x1)**2 + (y2-y1)**2)
    
    print(`\nCom base nos pontos x(${x1}, ${x2}) e y(${y1}, ${y2}), a distância entre eles é ${distancia}`)
}

main()
