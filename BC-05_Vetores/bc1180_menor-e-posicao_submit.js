let input = require('fs').readFileSync('/dev/stdin', 'utf-8')
let lines = input.split('\n').map(Number)

function main() {
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
