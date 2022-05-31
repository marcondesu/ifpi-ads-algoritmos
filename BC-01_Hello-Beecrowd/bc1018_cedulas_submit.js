var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const dinheiro = Number(lines[0])

    // procesamento
    const nota_100 = Math.trunc(dinheiro / 100)
    const nota_50 = Math.trunc((dinheiro - nota_100*100) / 50)
    const nota_20 = Math.trunc((dinheiro - nota_100*100 - nota_50*50) / 20)
    const nota_10 = Math.trunc((dinheiro - nota_100*100 - nota_50*50 - nota_20*20) / 10)
    const nota_5 = Math.trunc((dinheiro - nota_100*100 - nota_50*50 - nota_20*20 - nota_10*10) / 5)
    const nota_2 = Math.trunc((dinheiro - nota_100*100 - nota_50*50 - nota_20*20 - nota_10*10 - nota_5*5) / 2)
    const nota_1 = Math.trunc((dinheiro - nota_100*100 - nota_50*50 - nota_20*20 - nota_10*10 - nota_5*5 - nota_2*2) / 1)
    
    // saída
    console.log(`${dinheiro}`)
    console.log(`${nota_100} nota(s) de R$ 100,00`)
    console.log(`${nota_50} nota(s) de R$ 50,00`)
    console.log(`${nota_20} nota(s) de R$ 20,00`)
    console.log(`${nota_10} nota(s) de R$ 10,00`)
    console.log(`${nota_5} nota(s) de R$ 5,00`)
    console.log(`${nota_2} nota(s) de R$ 2,00`)
    console.log(`${nota_1} nota(s) de R$ 1,00`)
}

main()