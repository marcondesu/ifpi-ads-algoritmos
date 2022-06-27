import { getNumberOnRange, pressEnterToContinue } from './utils.js'
import { inicializarVetorNumerico, resetVector, showMeanVectorValue, showMinAndMaxValues, showVectorLength } from './vetor_funcionalidades.js'
import { showVector } from './vetor_utils.js'

function main() {
    const [min_option, max_option] = [0, 5]

    let vector = inicializarVetorNumerico()

    showMenu()
    let option = getNumberOnRange(min_option, max_option, 'Insira uma opção: ')

    while (option !== 0) {
        if (option === 1) {
            showVector(vector)
        
        } else if (option === 2) {
            resetVector(vector)
        
        } else if (option === 3) {
            showVectorLength(vector)
        
        } else if (option === 4) {
            showMinAndMaxValues(vector)
        
        } else if (option === 5) {
            showMeanVectorValue(vector)
        }
        
        pressEnterToContinue()

        showMenu()
        option = getNumberOnRange(min_option, max_option, 'Insira uma opção: ')
    }
}

function showMenu() {
    console.clear()

    let menu = '-------- Prática de Vetores --------\n'
    menu += '\n1. Mostrar todos os valores\n'
    menu += '2. Resetar vetor\n'
    menu += '3. Ver quantidade de itens no vetor\n'
    menu += '4. Ver menor e maior valores e suas posições\n'
    menu += '5. Média dos valores\n'
    menu += '0. Sair\n'

    console.log(menu)
}

main()
