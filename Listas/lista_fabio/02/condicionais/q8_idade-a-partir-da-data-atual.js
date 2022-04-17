import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Calcular a idade de uma pessoa com base na data atual e de seu nascimento -------\n")
    
    // entrada
    const data_atual = input("Insira a data atual (dd/mm/aaaa): ")
    const data_nascimento = input("Insira a data de nascimento (dd/mm/aaaa): ")

    const validar_data_atual = isValida(data_atual)
    const validar_data_nascimento = isValida(data_nascimento)

    const resultado = idadeCalc(data_atual, data_nascimento, validar_data_atual, validar_data_nascimento)
    
    // saída
    print(resultado)
}

// processamento
function idadeCalc(dataatual, datanascimento, v1, v2) {
    // se as datas forem válidas, segue com o cálculo da idade
    if (v1 == true && v2 == true) {
        const [dia_atual, mes_atual, ano_atual] = dataatual.split('/').map(Number)
        const [dia_nasc, mes_nasc, ano_nasc] = datanascimento.split('/').map(Number)

        /* 
        as seguintes condições servem para comparar mês de nascimento com o mês atual
        por exemplo,
        data atual: 20/11/2022
        data de nascimento: 22/11/2001
        se apenas subtrairmos os anos dará um ano a mais porque a pessoa ainda não fez aniversário
        em 2022
        */
        if (mes_atual == mes_nasc) { // caso o mês atual for igual ao mês de nascimento...
            if (dia_atual < dia_nasc) { // caso o dia atual for menor que o dia de nascimento subtrai 1
                return ano_atual - ano_nasc - 1
            } else {
                return ano_atual - ano_nasc
            }
        } else if (mes_atual < mes_nasc) { // caso o mês atual for menor que o mês de nascimento...
            return ano_atual - ano_nasc - 1
        }

    } else if (v1 == false && v2 == true) { // v1 = data atual
        return 'A data atual fornecida é inválida.'
    } else if (v1 == true && v2 == false) { // v2 = data de nascimento
        return 'A data de nascimento fornecida é inválida'
    } else {
        return 'Ambas datas fornecidas são inválidas'
    }
}

function isValida(data) {
    const [dia, mes, ano] = data.split('/').map(Number)
    
    if (dia >= 2 && mes >= 1 && ano >= 1903) {
        if (dia <= 31 && mes <= 12) {
            return true
        }
    } else if (dia == 1 && mes == 1 && ano == 1903) {
        return false
    } else if ((dia <= 31 > 0) && (mes <= 12 > 0) && (ano >= 1903 < 2023)) {
        return true
    } else {
        return false
    }

    /* a pessoa viva mais velha no dia de hoje (16/04/22) nasceu em 02/01/1903, então adaptei
    a condição do ano para ser de 1903 pra frente caso ela use (curiosidade: ela não vai usar) */
}

main()