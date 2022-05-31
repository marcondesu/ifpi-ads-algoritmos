import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log("------- Cálculo de média -------\n")

    const score_1 = getNumber('1ª nota: ')
    const score_2 = getNumber('2ª nota: ')

    const media = calcMedian(score_1, score_2)

    if (media === 0) {
        console.log('\n[A+] Aprovado com distinção.')
        console.log(`${media}`)
    } else if (media === 1) {
        console.log('\n[A] Aprovado.')
        console.log(`${media}`)
    } else {
        console.log('\n[R] Reprovado.')
        console.log(`${media}`)
    }
}

function calcMedian(score1, score2) {
    const media = (score1 + score2) / 2

    if (media == 10) {
        return 0
    } else if (media >= 7) {
        return 1
    }

    return false
}


main()
