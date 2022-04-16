import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Verificar validade de determinada data -------\n")
    
    // entrada
    const data_input = input("Insira a data (dd/mm/aaaa): ")
    const validade = isValida(data_input)
    
    // saída
    print (`${validade}`)
}

// processamento
function isValida(data) {
    const [dia, mes, ano] = data.split('/').map(Number)
    
    if (dia >= 2 && mes >= 1 && ano >= 1903) {
        if (dia <= 31 && mes <= 12) {
            return "A data é válida."
        }
    } else if (dia == 1 && mes == 1 && ano == 1903) {
        return "A data é inválida"
    } else if ((dia <= 31 > 0) && (mes <= 12 > 0) && (ano >= 1903 < 2023)) {
        return "A data é válida."
    } else {
        return "A data é inválida."
    }

    /* a pessoa viva mais velha no dia de hoje (16/04/22) nasceu em 02/01/1903, então adaptei
    a condição do ano para ser de 1903 pra frente caso ela use (curiosidade: ela não vai usar) */
}

main()