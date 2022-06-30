import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('------- N termos da sequência de Fibonacci -------\n')

    let qtd_terms = getNumber('Quantidade de termos: ')
    let fibonacci = []
    fibonacci[0] = 0
    fibonacci[1] = 1

    let counter = 2

    while (counter <= qtd_terms - 1) {
        fibonacci[counter] = Number(fibonacci[counter - 2]) + Number(fibonacci[counter - 1])

        counter++
    }

    console.log(`\n${fibonacci}\n`)
}

function getNumber(msg) {
    const number = Number(input(msg))

    if (isNaN(number)) {
        console.log('[X] Erro! Digite um número.\n')

        return getNumber(msg)
    } else if (number < 2) {
        console.log('[X] Erro! Digite um número maior que 2.\n')

        return getNumber(msg)
    }

    return number
}

main()
