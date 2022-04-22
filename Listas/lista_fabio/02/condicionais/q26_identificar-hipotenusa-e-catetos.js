import {print, input} from '../../../../io_utils.js'

function main() {
    print('\n------- Identificar hipotenusa e catetos -------\n')

    // entrada
    const lado_1 = Number(input("Lado 1: "))
    const lado_2 = Number(input("Lado 2: "))
    const lado_3 = Number(input("Lado 3: "))

    const resultado = identificarHipotenusaECatetos(lado_1, lado_2, lado_3)

    // saída
    print(`\nHipotenusa: lado de valor ${resultado[0]}\nCatetos: lados ${resultado[1]} e ${resultado[2]}`)
}

// processamento    
function identificarHipotenusaECatetos(l1, l2, l3) { // o maior lado é a hipotenusa e os outros são os catetos
    if (l1 > l2 && l1 > l3) {                        // função reaproveitada da q3
        return [l1, l2, l3]
    } else if (l2 > l1 && l2 > l3) {
        return [l2, l1, l3]
    } else if (l3 > l1 && l3 > l2) {
        return [l3, l1, l2]
    }
}

main()
