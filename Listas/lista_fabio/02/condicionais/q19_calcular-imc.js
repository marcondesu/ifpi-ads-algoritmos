import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Cálculo de IMC -------\n")


    // entrada
    const altura = Number(input("Altura (metros): "))
    const peso = Number(input("Peso (kg): "))

    // processamento
    const imc = Math.trunc(peso / altura*altura)

    // saída
    if (imc < 25) {
        print(`\nIMC: ${imc}\nPeso normal.`)
    } else if (imc >= 25 && imc <= 30) {
        print(`\nIMC: ${imc}\nObeso.`)
    } else {
        print(`\nIMC: ${imc}\nObesidade mórbida.`)
    }
}

main()
