var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
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
