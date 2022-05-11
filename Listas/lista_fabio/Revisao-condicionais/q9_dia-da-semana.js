import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('------- Dia da semana -------\n')
    console.log('Digite um número que corresponda a um dia da semana. Ex.:')
    console.log(' 1 - Domingo\n 2 - Segunda-feira\n 3 - Terça-feira\n ...\n')

    const number = getNumber('Número do dia da semana: ')

    console.log(`${verifyWeekDay(number)}`)
}

function verifyWeekDay(number) {
    const dias = ['Domingo', 'Segunda-feira.', 'Terça-feira.', 'Quarta-feira.', 'Quinta-feira.', 'Sexta-feira.', 'Sábado.']

    return dias[number - 1]
}

function getNumber(msg) {
    const number = Number(input(msg))

    if (isNaN(number)) {
        console.log('[X] Erro! Digite um número.\n')

        return getNumber(msg)
    } else if (number < 1 || number > 7) {
        console.log('[X] Erro! O número deve estar no intervalo de 1 a 7.\n')

        return getNumber(msg)
    }

    return number
}

main()
