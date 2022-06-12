import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Menor e Posição -------\n')

    const lines = loadFile('../Testes/bc1180_teste.txt').split('\r\n')

    const values_quantity = Number(lines[0])
    const line_values = lines[1].split(' ').map(Number)
    let count = 1
    let [smallest_value, position] = [line_values[0], 0]

    while (count < values_quantity) {
        if (line_values[count] < smallest_value) {
            smallest_value = line_values[count]
            position = count
        }

        count++
    }

    console.log(`Menor valor: ${smallest_value}\nPosicao: ${position}`)
}

main()
