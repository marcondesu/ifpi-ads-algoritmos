import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../Testes/bc1118_teste.txt').split('\n').map(Number)

    console.clear()
    console.log('------- Validação de várias notas -------\n')

    let new_calc = 1
    let scores = []
    let media = 0
    let count = 0

    while (new_calc === 1) {
        if (validateScore(lines[count])) {
            scores.push(lines[count])
        
        } else {
            console.log('nota invalida')
        }
        
        count++

        if (scores.length === 2) {
            media = (scores[0] + scores[1]) / 2
            console.log(`media = ${media.toFixed(2)}`)
            
            new_calc = 0
            scores = []

            while(!(new_calc === 1 || new_calc === 2)) {
                console.log('novo calculo (1-sim 2-nao)')

                new_calc = lines[count]

                count++
            }
        }
    }
}

function validateScore(score) {
    return (score >= 0 && score <= 10)
}

main()
