import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- N termos de uma sequência -------\n')
    console.log('S = 1/1 + 3/2 + 5/3 + ... + 99/50\n')

    let count_up = 1
    let sum = 0

    for (let i = 1; i <= 50; i++) {
        sum += i / count_up

        count_up += 2
    }

    console.log(`${sum.toFixed(2)}`)
}

main()
