import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Escrever valores menores que o Limite de uma Progressão Geométrica -------\n')

    const a0 = getNumber('A0: ')
    const limite = getNumber('Limite: ')
    const razao = getNumber('Razão: ')
    let i = 0
    let an = 0

    for (i = a0; an < limite; i++) {
        if (an === 0) {
            an = calcularPG(a0, i, razao)
            
            continue;
        }

        console.log(`${an}`)

        an = calcularPG(a0, i, razao)
    }
}

function calcularPG(a0, posicao, razao) {
    return a0 * (razao ** (posicao - 1))
}

main()
