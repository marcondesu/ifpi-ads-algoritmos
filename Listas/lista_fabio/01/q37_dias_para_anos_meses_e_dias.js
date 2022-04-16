import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Calcular a Quantidade de Anos, Meses e Dias a partir do Número de Dias de Idade de uma Pessoa -------\n")

    const dias_input = Number(input("Dias: "))

    const anos = Math.trunc(dias_input / 365)
    const meses = Math.trunc((dias_input - anos*365) / 30)
    const dias = Math.trunc(dias_input - (anos*365 + meses*30))

    print(`\n${dias_input} dias é equivalente a ${anos} anos, ${meses} meses e ${dias} dias`)
}

main()