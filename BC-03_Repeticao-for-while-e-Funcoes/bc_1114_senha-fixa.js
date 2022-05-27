import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../Testes/bc_1114_teste.txt').split('\r\n')

    console.clear()
    console.log('------- Senha fixa -------\n')

    for (let line of lines) {
        if (invalidPassword(Number(line))) {
            console.log('Acesso Permitido')
            break;
        } else {
            console.log('Senha Invalida')
        }
    }
}

function invalidPassword(password) {
    if (password === 2002) {
        return true

    } else {
        return false
    }
}

main()
