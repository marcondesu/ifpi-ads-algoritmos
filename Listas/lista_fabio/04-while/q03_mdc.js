import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../../../Testes/lista-04_q03.txt').split('\r\n')

    console.clear()
    console.log('------- Obter o máximo divisor comum entre dois números -------\n')

    let count = 0
    let mdc = []
    let [n1, n2] = [0, 0]

    while (!(lines[count] === undefined)) {
        [n1, n2] = lines[count].split(' ').map(Number)

        mdc = getMDC(n1, n2)
        
        console.log(`mdc(${n1}, ${n2}) = ${mdc}`)

        count++
    }
}

function getMDC(n1, n2) {
    let mdc = 0

    if (n1 > n2) {
        mdc = n1
    } else {
        mdc = n2
    }
    
    while (!(isDivider(n1, mdc) && isDivider(n2, mdc))) {
        mdc--
    }

    return mdc
}

function isDivider(n1, n2) {
    return n1 % n2 === 0
}

main()
