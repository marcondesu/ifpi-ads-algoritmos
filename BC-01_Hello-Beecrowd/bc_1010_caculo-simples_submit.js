var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    l0 = lines[0]
    valores0 = l0.split(' ')
    const codigo_peca1 = Number(valores0[0])
    const numero_peca1 = Number(valores0[1])
    const valor_peca1 = Number(valores0[2])

    l1 = lines[1]
    valores1 = l1.split(' ')
    const codigo_peca2 = Number(valores1[0])
    const numero_peca2 = Number(valores1[1])
    const valor_peca2 = Number(valores1[2])

    // procesamento
    const valor_a_pagar = numero_peca1*valor_peca1 + numero_peca2*valor_peca2

    // saída
    console.log(`VALOR A PAGAR: R$ ${valor_a_pagar.toFixed(2)}`)
}

main()