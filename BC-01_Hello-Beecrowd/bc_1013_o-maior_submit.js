var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    const [value_1, value_2, value_3] = lines[0].split(' ').map(Number)

    const ordem = maior_ab(value_1, value_2, value_3)

    console.log(`${ordem} eh o maior`)
}

function maior_ab(a, b, c) {
    let maior_ab = ((a + b + Math.abs(a - b)) / 2)
    maior_ab = ((maior_ab + c + Math.abs(maior_ab - c)) / 2)

    return maior_ab
}

main()
