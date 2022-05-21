import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('------- Calcular frequência cardíaca máxima -------\n')

    const age = getNumber('Idade: ')
    console.clear()
}

function calcAverageScore(score_1, score_2) {
    return (score_1 + score_2) / 2
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
