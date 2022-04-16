var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const numero_funcionario = Number(lines[0])
    const horas_trabalhadas = Number(lines[1])
    const dinheiro_por_hora = Number(lines[2])

    // procesamento
    const salario = horas_trabalhadas * dinheiro_por_hora

    // saída
    console.log(`NUMBER = ${numero_funcionario}`)
    console.log(`SALARY = U$ ${salario.toFixed(2)}`)
}

main()