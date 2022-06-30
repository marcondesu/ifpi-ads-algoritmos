import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Escrever valores menores que o Limite de uma Progressão Aritmética -------\n')

    const a0 = getNumber('A0: ')
    const limite = getNumber('Limite: ')
    const razao = getNumber('Razão: ')
    let counter = a0
    let an = 0

    while (an < limite) {
        if (an === 0) {
            an = calcularPA(a0, counter, razao)
            
            continue;
        }

        console.log(`${an}`)

        an = calcularPA(a0, counter, razao)

        counter++
    }
}

function calcularPA(a0, posicao, razao) {
    return a0 + (posicao - 1) * razao
}

main()
