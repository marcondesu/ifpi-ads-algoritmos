import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('------- Determinar a quantidade de dígitos de um número -------\n')

    const number = input('Número: ')
    let count = 0

    while (!(number[count] === undefined)) {
        count++
    }

    console.log(`${count} dígitos`)
}

main()
