import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../../../Testes/lista-04_q08.txt').split('\r\n').map(Number)

    console.clear()
    console.log('------- Ler um número e procurar por um igual a ele -------\n')

    let count = 1
    let [number_1, number_2, soma] = [0, 0, 0]

    while (soma !== lines[0]) {
        number_1 = lines[count]

        number_2 = lines[++count]
        console.log(`[${count - 1}] ${lines[count]}`)
        
        soma = number_1 + number_2
    }

    console.log(`\nPrimeiro número (${lines[0]})`)
}

main()
