import { getNumber } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- PUM -------\n')

    const number = getNumber('Número de linhas: ')
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
