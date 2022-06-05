import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Escrever valores menores que o Limite de uma Progressão Aritmética -------\n')

    const a0 = getNumber('A0: ')
    const limite = getNumber('Limite: ')
    const razao = getNumber('Razão: ')
    let i = 0
    let an = 0

    for (i = a0; an < limite; i++) {
        if (an === 0) {
            an = calcularPA(a0, i, razao)
            
            continue;
        }

        console.log(`${an}`)

        an = calcularPA(a0, i, razao)
    }
}

function calcularPA(a0, posicao, razao) {
    return a0 + (posicao - 1) * razao
}

main()
