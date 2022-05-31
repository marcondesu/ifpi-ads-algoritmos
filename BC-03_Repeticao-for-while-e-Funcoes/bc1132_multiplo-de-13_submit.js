let input = require('fs').readFileSync('/dev/stdin', 'utf-8')
let lines = input.split('\n').map(Number)

function main() {
    const number_1 = lines[0]
    const number_2 = lines[1]
    let [count, larger_number, soma] = [0, 0, 0]

    if (number_1 > number_2) {
        count = number_2
        larger_number = number_1
    } else {
        larger_number = number_2
        count = number_1
    }

    while (count <= larger_number) {
        if (!isMultipleOf13(count)) {
            soma += count
        }

        count++
    }

    console.log(`${soma}`)
}

function isMultipleOf13(number) {
    return number % 13 === 0
}

main()
