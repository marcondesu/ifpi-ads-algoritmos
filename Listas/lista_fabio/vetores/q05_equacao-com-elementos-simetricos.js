import { loadFile } from '../../../Iteracao-strings/input-utils.js'
import { fillVectorWithNElements } from '../../../vector-utils.js'


function main() {
    console.clear()
    console.log('------- Ler um vetor com 20 elementos e calcular a expressão abaixo -------')
    console.log('S = (A[1] - A[20])**2 + (A[2] - A[19])**2 + ... (A[9] - A[12])**2 + (A[10] - A[11])**2\n')

    const lines = loadFile('../../../Testes/lista05_q05.txt').split('\n').map(Number)

    let vector_a = fillVectorWithNElements(20, lines)

    // vector length
    let vlength = vector_a.length - 1
    let result = 0

    for (let i = 0; i < vlength / 2; i++) {
        result += (vector_a[i] - vector_a[vlength - i])**2
    }
    
    console.log(result)
}

main()
