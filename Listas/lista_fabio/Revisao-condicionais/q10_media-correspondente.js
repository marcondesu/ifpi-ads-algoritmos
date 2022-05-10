import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('------- Média de duas notas -------\n')
    console.log('Média   \tConceito')
    console.log('9.0 - 10.0\tA\n7.5 - 9.0  \tB\n6.0 - 7.5  \tC\n4.0 - 6.0  \tD\n4.0 - 0  \tE\n')

    const score_1 = getNumber('1ª nota: ')
    const score_2 = getNumber('2ª nota: ')
    console.clear()
    
    const result = calcAverageScore(score_1, score_2)

    if (result < 4) {
        console.log(`\n[+] Nota 1: ${score_1}\n[+] Nota 2: ${score_2}\n`)
        console.log(`[+] Média: ${result} (E)\n\n[!] Reprovado.`)
    
    } else if (result >= 4 && result < 6) {
        console.log(`\n[+] Nota 1: ${score_1}\n[+] Nota 2: ${score_2}\n`)
        console.log(`Média: ${result} (D)\n\n[!] Reprovado.`)
    
    } else if (result >= 6 && result < 7.5) {
        console.log(`\n[+] Nota 1: ${score_1}\n[+] Nota 2: ${score_2}\n`)
        console.log(`Média: ${result} (C)\n\n[!] Aprovado.`)
        
    } else if (result >= 7.5 && result < 9) {
        console.log(`\n[+] Nota 1: ${score_1}\n[+] Nota 2: ${score_2}\n`)
        console.log(`Média: ${result} (B)\n\n[!] Aprovado.`)

    } else {
        console.log(`\n[+] Nota 1: ${score_1}\n[+] Nota 2: ${score_2}\n`)
        console.log(`Média: ${result} (A)\n\n[!] Aprovado.`)
    }
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
