import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../Testes/bc_1118_teste.txt').split('\r\n').map(Number)

    console.clear()
    console.log('------- Validação de várias notas -------\n')

    let new_calc = 1
    let score_1, score_2, count, result

    while (!(new_calc === 2)) {
        if (!isNaN(score_2)) {
            media = ((score_1 + score_2) / 2).toFixed(2)
            console.log(`media = ${media}`)

            result = getOption(lines, count)

            count = result[1]
            new_calc = result[0]
        }

        if (validateScore(lines[count])) {
            if (isNaN(score_1)) {
                score_1 = lines[count]
            } else {
                score_2 = lines[count]
            }
        } else {
            console.log('nota invalida')
        }

        count++
    }
}

function getOption(lines, count) {
    console.log('novo calculo (1-sim 2-nao)')

    if (lines[count] === 1 || lines[count] === 2) {
        return [lines[count], count]
    }

    return getOption(lines, count)
}

function validateScore(score) {
    return (score >= 0 && score <= 10)
}

main()
