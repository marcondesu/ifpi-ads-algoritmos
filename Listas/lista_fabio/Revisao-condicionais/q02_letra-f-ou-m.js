import { getText } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log("------- Verificação de sexo -------\nF (feminino) ou M (masculino)\n")

    const letter = getText('Sexo: ')
    const result = verifySex(letter)

    if (result === 0) {
        console.log('\n[F] Feminino')
    } else if (result === 1){
        console.log('\n[M] Masculino')        
    } else {
        console.log('[!] Sexo inválido.')
    }
}

function verifySex(letter) {
    if (letter === 'F' || letter === 'f') {
        return 0
    } else if (letter === 'M' || letter === 'm') {
        return 1
    }

    return false
}


main()
