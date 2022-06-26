import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Resultado de pesquisa de eleição -------\n')

    const lines = loadFile('../../../Testes/lista04while_q14.txt').split('\r\n').map(Number)

    let counter = 0
    let [serra, dilma, ciro] = [0, 0, 0]
    let [indeciso, outros, nulo] = [0, 0, 0]

    // enquanto a flag -1 não for lida vai ler os valores de lines
    while (lines[counter] !== -1) {
        if (lines[counter] === 13) {dilma++}
        else if (lines[counter] === 23) {ciro++}
        else if (lines[counter] === 45) {serra++}
        else if (lines[counter] === 99) {indeciso++}
        else if (lines[counter] === 98) {outros++}
        else if (lines[counter] === 0) {nulo++}

        counter++
    }

    serra = ((serra/ counter) * 100).toFixed(2)
    ciro = ((ciro/ counter) * 100).toFixed(2)
    dilma = ((dilma/ counter) * 100).toFixed(2)
    outros = ((outros/ counter) * 100).toFixed(2)
    nulo = ((nulo/ counter) * 100).toFixed(2)

    console.log(`Porcentagens:\n\tSerra: ${serra}%\n\tCiro: ${ciro}%\n\tDilma: ${dilma}%`)
    console.log(`\tOutros: ${outros}%\n\tNulo: ${nulo}%\n\nTotal de entrevistados: ${counter}`)
}

main()
