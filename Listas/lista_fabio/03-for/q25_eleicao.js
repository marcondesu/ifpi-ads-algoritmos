import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const list = loadFile('../../../Testes/lista03_q25.txt').split('\n')
    
    console.clear()
    console.log('\t Mostrar votos para cada candidato, votos nulos, em branco e eleito \t\n')

    const n_votes = Number(list[0])
    let [candidato_1, candidato_2, candidato_3, nulo, branco] = [0, 0, 0, 0, 0] 
    let vote = 0

    for (let i = 1; i <= n_votes; i++) {
        vote = Number(list[i])

        if (vote === 1) {
            candidato_1++
        } else if (vote === 2) {
            candidato_2++
        } else if (vote === 3) {
            candidato_3++
        } else if (vote === 9) {
            nulo++
        } else {
            branco++
        }
    }

    const eleito = getGreaterNumber(candidato_1, candidato_2, candidato_3)

    console.log(`Candidato 1: ${candidato_1}`)
    console.log(`Candidato 2: ${candidato_2}`)
    console.log(`Candidato 3: ${candidato_3}\n`)

    console.log(`Votos nulos: ${nulo}`)
    console.log(`Votos em branco: ${branco}`)

    console.log(`Eleito: candidato ${eleito}`)
}

function getGreaterNumber(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return 1
    } else if (n2 > n1 && n2 > n3) {
        return 2
    } else if (n3 > n1 && n3 > n2) {
        return 3
    }
}

main()
