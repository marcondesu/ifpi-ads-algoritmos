import { getText } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log("------- Vogal ou consoante -------\n")

    const letter = getText('Letra: ')

    if (vowelOrConsonant(letter)) {
        console.log('\n[V] Vogal.')
    } else {
        console.log('\n[C] Consoante.')
    }
}

function vowelOrConsonant(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true
    } else if (letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
        return true
    }

    return false
}


main()
