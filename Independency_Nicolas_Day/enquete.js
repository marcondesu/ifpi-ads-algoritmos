import { getGreaterElement, getNumberGreaterThan, getNumberOnRange, getSummatoryOfVectorElements, getTextWithMaxWords } from './utils.js'

function main() {
    console.clear()

    // letra A
    const qtd_candidatos = getQtdCandidatos('Quantidade de candidatos: ')

    // letra B
    const candidatos = getCandidatos(qtd_candidatos)

    // letra C
    let votos = getVotos(qtd_candidatos)

    // letra D
    const menu = getMenu(candidatos)
    
    // letra E e G
    showMenu(menu)
    let option = getNumberOnRange(-1, qtd_candidatos + 3, '> ')

    while (option != -1) {
        votos[option] += 1

        showMenu(menu)

        option = getNumberOnRange(-1, qtd_candidatos + 3, '> ')
        console.clear()
    }

    // letra F
    const percentuais = getPercentuais(votos)

    // letra H
    // i.
    const qtd_votos = getSummatoryOfVectorElements(votos)
    console.log(`Quantidade de pessoas entrevistadas: ${qtd_votos}\n`)

    // ii. | iii. | iv. | v.
    const menu_votos_de_candidatos = getMenuVotos(candidatos, percentuais, votos)

    // vi.
    showVencedor(candidatos, votos)
}

function showVencedor(candidatos, votos) {
    const vencedor = getGreaterElement(votos)

    console.log(`\nVencedor da eleição: ${candidatos[vencedor[0]]}`)
}

function getMenuVotos(candidatos, percentuais, votos) {
    let i = 0
    let menu = '***** Resultados *****\n\n'
    
    for (i = 0; i < candidatos.length; i++) {
        menu += `${candidatos[i]}: ${votos[i]} (${percentuais[i]}%) votos\n`
    }

    menu += `\nBranco: ${votos[i]} (${percentuais[i]}%) votos`
    menu += `\nNulo: ${votos[i]} (${percentuais[i + 1]}%) votos`
    menu += `\nNão opinar: ${votos[i]} (${percentuais[i + 2]}%) votos`

    console.log(menu)
}

function getPercentuais(votos) {
    const total_votos = getSummatoryOfVectorElements(votos)
    
    let percentuais = new Array(votos.length)

    for (let i = 0; i < votos.length; i++) {
        percentuais[i] = ((votos[i] / total_votos) * 100).toFixed(2)
    }

    return percentuais
}

function showMenu(menu) {
    console.clear()
    console.log(menu)
}

function getMenu(candidatos) {
    let i = 0
    let menu = '***** Eleição *****\n\n'

    for (i = 0; i < candidatos.length; i++) {
        menu += `${i} - ${candidatos[i]}\n`
    }

    menu += `\n${i} - Branco\n`
    menu += `${i + 1} - Nulo\n`
    menu += `${i + 2} - Não opinar\n`

    return menu
}

function getVotos(qtd_candidatos) {
    let votos = new Array(qtd_candidatos + 3)

    // +3 para as opções BRANCO / NULO / NAO OPINAR
    for (let i = 0; i < qtd_candidatos + 3; i++) {
        votos[i] = 0
    }

    return votos
}

function getCandidatos(qtd_candidatos) {
    let vector = new Array(qtd_candidatos)

    for (let i = 0; i < qtd_candidatos; i++) {
        vector[i] = getTextWithMaxWords(1, `Candidato ${i + 1}: `)
    }

    console.clear()

    return vector
}

function getQtdCandidatos(msg) {
    const number = getNumberGreaterThan(1, msg)
    console.clear()

    return number
}

main()
