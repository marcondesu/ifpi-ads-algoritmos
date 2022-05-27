var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
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
