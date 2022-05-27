import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../Testes/bc_1116_teste.txt').split('\r\n')

    console.clear()
    console.log('------- Dividindo X por Y -------\n')

    for (let line of lines) {
        if (line != line[0]) {
            line = line.split(' ').map(Number)

            console.log(divideAndDecide(line[0], line[1]))
        }
    }
}

function divideAndDecide(n1, n2) {
    const result = n1 / n2

    if (result === -Infinity || result === Infinity) {
        return 'divisao impossivel'
    } else {
        return result.toFixed(1)
    }
}

main()
