import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Calcular a Quantidade de Dias a partir do Número de Anos, Meses e Dias de Idade de uma Pessoa -------\n")

    const anos = Number(input("Anos: "))
    const meses = Number(input("Meses: "))
    const dias_input = Number(input("Dias: "))

    const dias = anos*365 + meses*30 + dias_input

    print(`\n${anos} anos, ${meses} meses e ${dias_input} é equivalente a ${dias} dias`)
}

main()