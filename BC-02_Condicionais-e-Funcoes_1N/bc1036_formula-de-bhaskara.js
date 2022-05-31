import {print, input} from '../io_utils.js'

function main() {
    print('\n------- Calcular raízes com a Fórmula de Bhaskara -------\n')

    // entrada
    const a = Number(input("Coeficiente A: "))
    const b = Number(input("Coeficiente B: "))
    const c = Number(input("Coeficiente C: "))

    const raizes = calcularRaizesEquacao2Grau(a, b, c)

    // saída
    if (raizes) {
        print(`\nR1 = ${raizes[0]}\nR2 = ${raizes[1]}`)
    } else {
        print('\nImpossivel calcular')
    }
}

// processamento    
function calcularRaizesEquacao2Grau(a, b, c) {
   if (a === 0 || ((b**2 - 4*a*c) < 0)) {
       return false
   } else {
       const raiz_1 = ((-b + Math.sqrt(b*b - 4*a*c)) / (2*a))
       const raiz_2 = ((-b - Math.sqrt(b*b - 4*a*c)) / (2*a))

       return [raiz_1.toFixed(5), raiz_2.toFixed(5)]
   }
}

main()
