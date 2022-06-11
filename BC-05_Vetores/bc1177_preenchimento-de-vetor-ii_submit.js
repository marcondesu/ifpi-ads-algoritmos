let input = require('fs').readFileSync('/dev/stdin', 'utf-8')
let lines = input.split('\n').map(Number)

function main() {
    const value_to_be_repeated = lines[0]
    let current_value = 0

    for (let i = 0; i < 1000; i++) {
        console.log(`N[${i}] = ${current_value}`)

        current_value++

        if (current_value === value_to_be_repeated) {
            current_value = 0
        }
    }
}

main()
