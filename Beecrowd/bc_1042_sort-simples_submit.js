var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    const [value_1, value_2, value_3] = lines[0].split(' ').map(Number)

    const ordem = ordenarDecrescente(value_1, value_2, value_3)

    console.log(`${ordem[0]}\n${ordem[1]}\n${ordem[2]}\n\n${value_1}\n${value_2}\n${value_3}`)
}
   
function ordenarDecrescente(v1, v2, v3) {
    if (v1 < v2 && v2 < v3) {
        return [v1, v2, v3]

    } else if (v1 < v3 && v3 < v2) {
      return [v1, v3, v2]

    } else if (v2 < v1 && v1 < v3) {
      return [v2, v1, v3]

    } else if (v2 < v3 && v3 < v1) {
      return [v2, v3, v1]

    } else if (v3 < v2 && v2 < v1) {
      return [v3, v2, v1]

    } else {
      return [v3, v1, v2]

    }
}

main()
