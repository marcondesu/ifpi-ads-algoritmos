var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    let numbers = []
    let result = ''

    for (let line of lines) {
        numbers = line.split(' ')

        if (numbers[0] <= 0 || numbers[1] <= 0) {
            break

        } else {
            result = getRangeAndSum(numbers[0], numbers[1])
            console.log(`${result}`)
            
        }
    }
}

function getRangeAndSum(n1, n2) {
    if (n1 === n2) {
        return `${n1} Sum=${n1}`

    } else if (n1 > n2) {
        let numbers = []
        let soma = 0

        for (let i = n2; i <= n1; i++) {
            numbers.push(i)
            soma += Number(i)
        }

        numbers.toString()

        return `${numbers.join(' ')} Sum=${soma}`

    } else if (n1 < n2) {
        let numbers = []
        let soma = 0

        for (let i = n1; i <= n2; i++) {
            numbers.push(i)
            soma += Number(i)
        }

        numbers.toString()

        return `${numbers.join(' ')} Sum=${soma}`
    }
}

main()
