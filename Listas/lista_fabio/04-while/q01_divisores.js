import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../../../Testes/lista-04_q01.txt').split('\r\n').map(Number)

    console.clear()
    console.log('------- Relação de divisores de um número -------\n')

    let count = 0
    let divisores = []

    while (lines[count] !== 0) {
        divisores = getDividers(lines[count])
        
        console.log(`${lines[count]} -> ${divisores.reverse().join(', ')}`)

        count++
    }
}

function getDividers(number) {
    let dividers = []

    for (let i = number; i > 0; i--) {
        if (number % i === 0) {
            dividers.push(i)
        }
    }

    return dividers
}

main()
