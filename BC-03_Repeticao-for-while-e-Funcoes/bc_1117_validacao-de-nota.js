import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../Testes/bc_1117_teste.txt').split('\r\n').map(Number)

    console.clear()
    console.log('------- Validação de nota -------\n')

    let scores = []
    let count = 0

    while (isNaN(scores[1]) === true) {
        if (validateScore(Number(lines[count]))) {
            scores.push(Number(lines[count]))
        
        } else {
            console.log('nota invalida')
        }

        count++
    }

    const media = ((scores[0] + scores[1]) / 2).toFixed(2)
    console.log(`media = ${media}`)
}

function validateScore(value) {
    if (value >= 0 && value <= 10) {
        return true
    } else {
        return false
    }
}

main()
