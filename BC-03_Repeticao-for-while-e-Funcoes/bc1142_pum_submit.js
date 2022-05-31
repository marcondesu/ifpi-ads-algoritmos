let input = require('fs').readFileSync('/dev/stdin', 'utf-8')
let lines = input.split('\n').map(Number)

function main() {
    const number = lines[0]
    let pum = 1
    let count = 1
    let word = ``

    while (count <= number) {
        word += `${pum} ${++pum} ${++pum} PUM`

        console.log(word)


        word = ``
        pum += 2
        count++
    }
}

main()
