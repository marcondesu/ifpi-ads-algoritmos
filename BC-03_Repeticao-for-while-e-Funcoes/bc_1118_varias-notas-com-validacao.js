import { loadFile } from '../Iteracao-strings/input-utils.js'
const lines = loadFile('../Testes/bc_1118_teste.txt').split('\r\n').map(Number)
let count = 0

function main() {

    console.clear()
    console.log('------- Validação de várias notas -------\n')

    let scores = []
    let new_calculation = 1

    while (new_calculation !== 2) {
        if (isNaN(scores[1]) === false) {
            console.log(scores[1])
            new_calculation = getOption('novo calculo (1-sim 2-nao)', count)
            scores = []
        }

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

function getOption(msg, count) {
    console.log(msg)

    if (validateOption(lines[count])) {
        return lines[count]
    }

    count++
    return getOption(msg, count)
}

function validateOption(option) {
    return (option === 1 || option === 2)
}

function validateScore(value) {
    if (value >= 0 && value <= 10) {
        return true
    } else {
        return false
    }
}

main()
