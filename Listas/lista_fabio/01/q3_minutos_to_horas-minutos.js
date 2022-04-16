import {print, input} from '../../io_utils.js'

function main() {
    print("------- Converter Minutos para Horas/Minutos -------\n")

    const min = Number(input("Valor em minutos: "))
    const horas = min/60
    const minutos = min%60

    print(`\n${Math.trunc(horas)} horas e ${minutos} minutos`)
}

main()