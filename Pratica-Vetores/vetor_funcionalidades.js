import { getNumber, getNumberGreaterThan, getNumberOnRange, getValue, loadFile } from './utils.js'
import { createVector, fillVector, showVector } from './vetor_utils.js'

export function inicializarVetorNumerico() {
    console.clear()
    console.log('-------- Inicializar vetor numérico --------\n')
    console.log(' 1. Vetor com dados automáticos\n 2. Vetor com valores digitados\n 3. Carregar valores de um arquivo\n')

    const option = getNumberOnRange(1, 3, 'Digite uma opção: ')
    const vector_length = getNumberOnRange(1, 99999,'Insira o tamanho do vetor: ')

    console.log('\nLimites de valor para os valores do vetor')
    const min = getNumber('Mínimo: ')
    const max = getNumberGreaterThan(min, 'Máximo: ')

    if (option === 1) {
    
    } else if (option === 2) {
        let vector = createVector(vector_length)

        for (let i = 0; i < vector.length; i++) {
            vector[i] = getNumberOnRange(min, max, `Valor ${i + 1}: `)
        }

        return vector
    
    } else {
        let vector = createVector(vector_length)

        const file_path = getValue('Insira o diretório do arquivo: ')

        const lines = loadFile(file_path).split('\n').map(Number)

        let vector_counter = 0

        for (let i = 0; i < vector_length; i++) {
            if (lines[i] < max && lines[i] > min) {
                vector[i] = lines[i]

                vector_counter++
            }
        }

        return vector
    }
}

export function resetVector(vector) {
    const default_value = getNumber('Valor padrão para os elementos do vetor: ')

    for (let i = 0; i < vector.length; i++) {
        vector[i] = default_value
    }

    return vector
}

export function showVectorLength(vector) {
    let vector_length = 0

    for (let i = 0; i < vector.length; i++) {
        vector_length++
    }

    console.log(`\nO vetor possui ${vector_length} itens.`)
}

export function showMinAndMaxValues(vector) {
    let menor = [1, vector[0]]
    let maior = [1, vector[0]]

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > maior[1]) {
            maior = [i + 1, vector[i]]
        }

        if (vector[i] < menor[1]) {
            menor = [i + 1, vector[i]]  
        }
    }

    console.log(`\nO maior valor é ${maior[1]} na posição ${maior[0]}`)
    console.log(`O menor valor é ${menor[1]} na posição ${menor[0]}\n`)
}

export function showMeanVectorValue(vector) {
    let sum = 0

    for (let i = 0; i < vector.length; i++) {
        sum += vector[i]
    }

    console.log(Math.trunc(sum / vector.length))
}
