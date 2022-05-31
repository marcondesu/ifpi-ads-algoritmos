import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Média de 3 Números -------\n")

    const numero1 = Number(input("Insira o 1º número: "))
    const numero2 = Number(input("Insira o 2º número: "))
    const numero3 = Number(input("Insira o 3º número: "))

    const media = (numero1+numero2+numero3) / 3

    print(`\nA média dos números ${numero1}, ${numero2} e ${numero3} é ${media.toFixed(3)}`)
}

main()
