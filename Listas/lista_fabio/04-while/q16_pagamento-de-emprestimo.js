function main() {
    console.clear()
    console.log('------- Em quantos dias se paga um empréstimo de R$3.000,00 -------\n')
    console.log('Obs.: visto que a cada dia é debitado 0.85% do saldo não pago e a cada dia útil é feito um pagamento de R$200,00.\n')

    let counter = 1
    let saldo_nao_pago = 3000
    let dias_uteis = 1

    /* 
       - as iterações vão girar em torno de 0-6 levando em consideração que uma semana tem 7 dias
       - quando o contador for igual a 0 ou 6, irá pular para a próxima iteração (não é dia útil)
       - como todo dia cai juros sobre o saldo não pago, essa verificação do dia é feita apenas após o débito do juro
    */

    while (saldo_nao_pago > 0) {
        saldo_nao_pago = saldo_nao_pago * 0.85

        if (counter === 0) {
            counter++
            continue

        } else if (counter === 6) {
            counter = 0
            continue
        }
        
        saldo_nao_pago -= 200

        dias_uteis++
        counter++
    }

    console.log(`É necessário ${dias_uteis} dias úteis para concluir o pagamento do empréstimo.`)
}

main()
