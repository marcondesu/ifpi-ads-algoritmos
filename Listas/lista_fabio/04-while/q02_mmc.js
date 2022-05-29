import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../../../Testes/lista-04_q02.txt').split('\r\n')

    console.clear()
    console.log('------- Obter o mínimo múltiplo comum entre dois números -------\n')

    let count = 0
    let mmc = []
    let [n1, n2] = [0, 0]

    while (!(lines[count] === undefined)) {
        [n1, n2] = lines[count].split(' ').map(Number)

        mmc = getMMC(n1, n2)
        
        console.log(`mmc(${n1}, ${n2}) = ${mmc}`)

        count++
    }
}

function getMMC(n1, n2) {
    let mmc = 1

    while (!(isMultiple(mmc, n1) && isMultiple(mmc, n2))) {
        mmc++
    }

    return mmc
}

function isMultiple(n1, n2) {
    return n1 % n2 === 0
}

main()
