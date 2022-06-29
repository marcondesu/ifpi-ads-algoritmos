import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../../../Testes/lista04while_q19.txt').split('\r\n')

    let boi_magro = ['', 1000]
    let boi_gordo = ['', 0]
    let current_line = []
    let counter = 0

    // enquanto a linha for diferente de 0...
    while (lines[counter] != 0) {
        current_line = lines[counter].split(' ').map(Number)

        if (current_line[1] < boi_magro[1]) {
            boi_magro[0] = current_line[0]
            boi_magro[1] = current_line[1]

        } else if (current_line[1] > boi_gordo[1]) {
            boi_gordo[0] = current_line[0]
            boi_gordo[1] = current_line[1]
        }

        counter++
    }

    console.log(`Boi mais magro: ${boi_magro[0]} com ${boi_magro[1]}`)
    console.log(`Boi mais gordo: ${boi_gordo[0]} com ${boi_gordo[1]}`)
}

main()
