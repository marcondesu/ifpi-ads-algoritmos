var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    let scores = []

    for (let line of lines) {
        if (scores[1] >= 0) {
            break;
        }

        if (validateScore(line)) {
            scores.push(line)

        } else  {
            console.log('nota invalida')
        }
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
