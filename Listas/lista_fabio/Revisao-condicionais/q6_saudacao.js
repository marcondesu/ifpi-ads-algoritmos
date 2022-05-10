import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('------- Dar saudações -------\n\n# Selecione seu turno\n   M - Matutino\n   V - Vespertino\n   N - Noturno\n')

    const shift = getShift('Turno: ')

    console.log(giveGreeting(shift))   
}

function giveGreeting(shift) {
    if (shift === 'M' || shift === 'm') {
        return 'Bom dia!'
    } else if (shift === 'V' || shift === 'v') {
        return 'Boa tarde!'
    } else {
        return 'Boa noite!'
    }
}

export function getShift(msg) {
    const text = input(msg)

    if (text.length == 0) {
        console.log('[X] Erro! Texto vazio, digite algo.\n')

        return getShift(msg)
    } else if (!isNaN(text)) {
        console.log('[X] Erro! Insira caracteres.\n')

        return getShift(msg)
    } else if (text != 'M' && text != 'm' && text != 'V' && text != 'v' && text != 'N' && text != 'n') {
        console.log('[X] Erro! Turno inválido.\n\tM - Matutino\n\tV - Vespertino\n\tN - Noturno\n')

        return getShift(msg)
    }

    return text
}

main()
