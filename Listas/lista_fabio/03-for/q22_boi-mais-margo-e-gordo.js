import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const list = loadFile('../../../Testes/lista03_q22.txt').split('\n')
    
    console.clear()
    console.log('\t Determinar boi mais magro e boi mais gordo \t\n')

    let [magro, gordo] = [[``, Number.MAX_VALUE], [``, 0]]
    let [nome, peso] = [``, 0]
    
    for (let i = 0; i < list.length; i++) {
        [nome, peso] = list[i].split(' ')

        if (peso > gordo[1]) {
            gordo = [`${nome}`, Number(peso)]
        }

        if (peso < magro[1]) {
            magro = [`${nome}`, Number(peso)]
        }
    }

    console.log(`O boi mais magro é o ${magro[0]} pesando ${magro[1].toFixed(2)}kg`)
    console.log(`O boi mais gordo é o ${gordo[0]} pesando ${gordo[1].toFixed(2)}kg`)
}

main()
