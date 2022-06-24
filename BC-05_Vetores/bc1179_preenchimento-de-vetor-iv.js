import { loadFile } from "../Iteracao-strings/input-utils.js"

function main() {
    console.clear()
    console.log('------- Preenchimento de Vetor IV -------\n')
    
    const lines = loadFile('../Testes/bc1179.txt').split('\r\n').map(Number)

    let pair_vector = []
    let odd_vector = []

    for (let value of lines) {
        if (pair_vector.length === 5) {
            showPairVector(pair_vector)
            pair_vector = []

        } else if (odd_vector.length === 5) {
            showOddVector(odd_vector)
            odd_vector = []
        }

        if (ehPar(value)) {
            pair_vector.push(value)

        } else {
            odd_vector.push(value)
        }
    }

    showOddVector(odd_vector)
    showPairVector(pair_vector)
}

function showPairVector(vector) {
    for (let i = 0; i < vector.length; i++) {
        console.log(`par[${i}] = ${vector[i]}`)
    }
}

function showOddVector(vector) {
    for (let i = 0; i < vector.length; i++) {
        console.log(`impar[${i}] = ${vector[i]}`)
    }
}

function ehPar(number) {
    return number % 2 === 0
}

main()
