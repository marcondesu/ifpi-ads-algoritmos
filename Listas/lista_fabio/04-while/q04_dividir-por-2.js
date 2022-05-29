import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../../../Testes/lista-04_q04.txt').split('\r\n').map(Number)

    console.clear()
    console.log('------- Dividir um número sucessivamente por 2 até ser menor que 1 -------\n')

    let result = lines[0]
    let qtd_divisions = 0

    while (!(result < 1)) {
        result = result / 2

        qtd_divisions++
    }

    console.log(`${lines[0]}/2 (${qtd_divisions}x) = ${result.toFixed(3)}`)
}

main()
