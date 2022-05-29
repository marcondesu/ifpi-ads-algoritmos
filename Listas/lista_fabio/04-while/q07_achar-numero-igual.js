import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../../../Testes/lista-04_q07.txt').split('\r\n').map(Number)

    console.clear()
    console.log('------- Ler um número e procurar por um igual a ele -------\n')

    let number = lines[0]
    let count = 1

    while (!(lines[count] === number)) {
        count++
    }

    console.log(`O ${count + 1}º número é igual ao primeiro (${number})`)
}

main()
