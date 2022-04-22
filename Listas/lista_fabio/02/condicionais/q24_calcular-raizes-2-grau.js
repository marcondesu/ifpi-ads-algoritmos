import {print, input} from '../../../../io_utils.js'

function main() {
    print('\n------- Calcular raízes de uma equação do 2º grau -------\n')

    // entrada
    const a = Number(input("Coeficiente A: "))
    const b = Number(input("Coeficiente B: "))
    const c = Number(input("Coeficiente C: "))

    const raizes = calcularRaizesEquacao2Grau(a, b, c)

    // saída
    if (raizes == false) {
        print(`\nO coeficiente A não pode ser 0`)
    } else {
        print(`\nRaiz 1 = ${raizes[0]}\nRaiz 2 = ${raizes[1]}`)
    }
}

// processamento    
function calcularRaizesEquacao2Grau(a, b, c) {
    if (a != 0) {
        const raiz1 = (-b + Math.sqrt( (b*b) - (4 * a * c) )) / 2 * a
        const raiz2 = (-b - Math.sqrt( (b*b) - (4 * a * c) )) / 2 * a

        return [raiz1, raiz2]
    } else {
        return false
    }
}

main()
