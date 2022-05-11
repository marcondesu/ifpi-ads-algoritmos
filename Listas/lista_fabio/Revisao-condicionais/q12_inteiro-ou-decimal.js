import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('------- Calcular quantidade de classes numéricas -------\n')

    const number = getNumberUnder1000('Número: ')
    const classes = enumerationTypes(number)
    const class_counter = classCounter(classes)
    
    console.clear()
    console.log(printDecision(class_counter, number, classes))
}

function enumerationTypes(number) {
    const hundred = Math.trunc(number / 100)
    const dezena = Math.trunc((number - hundred*100) / 10)
    const unity = Math.trunc(number - hundred*100 - dezena*10)
    
    return [hundred, dezena, unity]
}

function getNumberUnder1000(msg) {
    const number = Number(input(msg))

    if (isNaN(number)) {
        console.log('[X] Erro! Digite um número.\n')

        return getNumberUnder1000(msg)
    } else if (number < 0 || number >= 1000) {
        console.log('[X] Erro! O número deve estar entre 0 e 1000\n')

        return getNumberUnder1000(msg)
    }

    return number
}

main()
