import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.log('\n------- Determinar o maior valor e sua posição entre 100 valores -------\n')

    const testes = loadfile().split('\n').map(Number)

    const result = getLargestNumberAndItsPosition(testes)

    console.log(`${result[0]}\n${result[1]}`)
}

function getLargestNumberAndItsPosition(testes) {
    let largest_number = 0
    let position = 0

    for (let i = 0; i < 100; i++) {
        if (testes[i] > largest_number) {
            largest_number = testes[i]
            position = i + 1
        }
    }

    return [largest_number, position]
}

function loadfile(){
    try{
        const data = fs.readFileSync('../Testes/bc_1080_teste.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}

main()
