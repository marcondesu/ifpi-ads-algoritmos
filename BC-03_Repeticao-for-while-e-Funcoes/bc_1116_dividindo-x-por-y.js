import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../Testes/bc_1116_teste.txt').split('\r\n')

    console.clear()
    console.log('------- Dividindo X por Y -------\n')

    const lines_count = Number(lines[0])
    let count = 1
    let n1, n2

    while (count <= lines_count) {
        [n1, n2] = lines[count].split(' ').map(Number)

        if (validateDivision(n2)) {
            console.log(`${(n1 / n2).toFixed(1)}`)
        } else {
            console.log('divisao impossivel')
        }

        count++
    }
}

function validateDivision(n2) {
    if (n2 === 0) {
        return false
    }

    return true
}

main()
