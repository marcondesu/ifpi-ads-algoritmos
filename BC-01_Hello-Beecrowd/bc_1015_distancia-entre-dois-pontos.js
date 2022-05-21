import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('\n------- Calcular distância entre dois pontos no plano -------\n')

    const lines = loadFile('../Testes/bc_1015_teste.txt').split('\r\n')
    const [x1, y1] = lines[0].split(' ').map(Number)
    const [x2, y2] = lines[1].split(' ').map(Number)

    console.log(`${calcDistanceBetween2Points(x1, y1, x2, y2)}`)
}

function calcDistanceBetween2Points(x1, y1, x2, y2) {
    return (Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)).toFixed(4)
}

main()
