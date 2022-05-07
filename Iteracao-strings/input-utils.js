import prompt from 'prompt-sync'

export function getText(msg) {
    const value = input(msg)

    if (value.length == 0) {
        console.log('Erro! Texto vazio, digite algo.')
        return getText(msg)
    } else if (value)
}