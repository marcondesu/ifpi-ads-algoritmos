import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../../../Testes/lista-04_q05.txt').split('\r\n')

    console.clear()
    console.log('------- Dividir X por N -------\n')

    let [x, n] = lines[0].split(' ').map(Number)
    let result
    let count = 0

    while (n >= 2) {
        result = x / n
        
        console.log(`[${count}] ${x} / ${n.toFixed(2)} = ${result}`)

        x = result
        n--
        count++
    }
}

main()
