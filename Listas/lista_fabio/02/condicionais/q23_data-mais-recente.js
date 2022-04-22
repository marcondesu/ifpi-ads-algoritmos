import {print, input} from '../../../../io_utils.js'

function main() {
    print('\n------- Comparar a data mais recente -------\n')
    print('Obs.: O formato de data deverá ser escrito no formato dd/mm/aaaa (Ex.: 21/04/2022)\n')

    // entrada
    const data_atual = input("Data atual: ")
    const data_1 = input("Primeira data: ")
    const data_2 = input("Segunda data: ")

    const data_mais_recente = compararDataMaisRecente(data_atual, data_1, data_2)

    // saída
    if (data_mais_recente) {
        print(`\nA primeira data é mais recente.`)
    } else {
        print(`\nA segunda data é mais recente.`)
    }
}

// processamento    
function compararDataMaisRecente(dataatual, data1, data2) {
    const [anoatual, mesatual, diaatual] = dataatual.split('/').map(Number)
    const [ano1, mes1, dia1] = data1.split('/').map(Number)
    const [ano2, mes2, dia2] = data2.split('/').map(Number)

    // transformando as datas em dias
    const datual = (anoatual*365) + (mesatual*30) + diaatual
    const d1 = (ano1*365) + (mes1*30) + dia1
    const d2 = (ano2*365) + (mes2*30) + dia2

    if ((datual - d1) > (datual-d2)) {
        return true
    } else {
        return false
    }
}

main()
