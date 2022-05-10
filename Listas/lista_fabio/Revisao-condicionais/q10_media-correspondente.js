import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('------- Média de duas notas -------\n')
    console.log('Média   \tConceito')
    console.log('9.0 - 10.0\tA\n7.5 - 9.0  \tB\n6.0 - 7.5  \tC\n4.0 - 6.0  \tD\n4.0 - 0  \tE\n')

    const score_1 = getNumber('1ª nota: ')
    const score_2 = getNumber('2ª nota: ')

    console.log(`${calcScoreAverage(number)}`)
}

function calcScoreAverage(score_1, score_2) {
    const score_average = (score_1 + score_2) / 2
}

function getNumber(msg) {
    const number = Number(input(msg))

    if (isNaN(number)) {
        console.log('[X] Erro! Digite um número.\n')

        return getNumber(msg)
    } else if (number < 0 || number > 10) {
        console.log('[X] Erro! O número deve estar no intervalo de 0 a 10.\n')

        return getNumber(msg)
    }

    return number
}

main()
