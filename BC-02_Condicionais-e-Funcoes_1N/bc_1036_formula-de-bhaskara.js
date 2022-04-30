import {print, input} from '../io_utils.js'

function main() {
    print('\n------- Calcular raízes com a Fórmula de Bhaskara -------\n')

    // entrada
    const a = Number(input("Coeficiente A: "))
    const b = Number(input("Coeficiente B: "))
    const c = Number(input("Coeficiente C: "))

    const raizes = calcularRaizesEquacao2Grau(a, b, c)

    // saída
    if (raizes == false) {
        print(`\nImpossivel de calcular`)
    } else {
        print(`\nR1 = ${raizes[0].toFixed(5)}\nR2 = ${raizes[1].toFixed(5)}`)
    }
}

// processamento    
function calcularRaizesEquacao2Grau(a, b, c) {
    if (a == 0) { // retorna falso caso o coeficiente A seja 0
        return false
    } else if (Math.sign((b*b) - (4 * a * c)) == -1) { // returna falso caso houver raiz quadrada de número negativo
        return false
    } else {
        const raiz1 = ((-b + Math.sqrt( (b*b) - (4 * a * c) )) / 2 * a) 
        const raiz2 = ((-b - Math.sqrt( (b*b) - (4 * a * c) )) / 2 * a) 

        return [raiz1, raiz2]
    }
}

main()
