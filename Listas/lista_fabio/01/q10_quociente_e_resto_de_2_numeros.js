import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Calcular Quociente e Resto da Divisão do 1º pelo 2º Número -------\n")

    print("Obs.: Os números têm que ser inteiros.\n")

    const numero1 = Number(input("1º número: "))
    const numero2 = Number(input("2º número: "))
    const quociente = Math.trunc(numero1 / numero2)
    const resto = numero1 % numero2

    print(`\nQuociente: ${quociente}`)
    print(`Resto: ${resto}`)
}

main()
