let input = require('fs').readFileSync('/dev/stdin', 'utf-8')
let lines = input.split('\n').map(Number)

function main() {
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
