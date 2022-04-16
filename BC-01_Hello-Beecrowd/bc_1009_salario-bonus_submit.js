var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const nome = lines[0]
    const salario_fixo = Number(lines[1])
    const vendas_no_mes = Number(lines[2])

    // procesamento
    const salario_bonus = salario_fixo + ((vendas_no_mes/100) * 15)

    // saída
    console.log(`TOTAL = U$ ${salario_bonus.toFixed(2)}`)
}

main()