import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log("------- Verificar se um número é positivo ou negativo -------\n")

    const numero = getNumber('Número: ')

    if (positivoOuNegativo(numero)) {
        console.log('\n[+] Número positivo.')
    } else {
        console.log('\n[-] Número negativo.')        
    }
}

function positivoOuNegativo(number) {
    if (number >= 0) {
        return true
    } 

    return false
}

main()
