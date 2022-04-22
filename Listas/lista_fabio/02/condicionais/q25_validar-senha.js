import {print, input} from '../../../../io_utils.js'

function main() {
    print('\n------- Validar senha -------\n')

    // entrada
    const senha = input("Insira a senha: ")

    const acesso = validarSenha(senha)

    // saída
    if (acesso) {
        print(`\nAcesso liberado.`)
    } else {
        print(`\nAcesso negado.`)
    }
}

// processamento    
function validarSenha(senha) {
    if (senha == 1234) {
        return true
    } else {
        return false
    }
}

main()
