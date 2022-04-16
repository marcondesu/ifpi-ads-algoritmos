import { print, input } from '../io_utils.js'

function main() {
    // entrada
    const dinheiro = Number(input("Dinheiro: "))

    // procesamento
    const nota_100 = Math.trunc(dinheiro / 100)
    const nota_50 = Math.trunc((dinheiro - nota_100*100) / 50)
    const nota_20 = Math.trunc((dinheiro - nota_100*100 - nota_50*50) / 20)
    const nota_10 = Math.trunc((dinheiro - nota_100*100 - nota_50*50 - nota_20*20) / 10)
    const nota_5 = Math.trunc((dinheiro - nota_100*100 - nota_50*50 - nota_20*20 - nota_10*10) / 5)
    const nota_2 = Math.trunc((dinheiro - nota_100*100 - nota_50*50 - nota_20*20 - nota_10*10 - nota_5*5) / 2)

    const notas_somatorio = nota_100*100 + nota_50*50 + nota_20*20 + nota_10*10 + nota_5*5 + nota_2*2

    const moeda_1 = Math.trunc((dinheiro*100 - notas_somatorio*100) / 100)
    const moeda_50 = Math.trunc((dinheiro*100 - notas_somatorio*100 - moeda_1*100) / 50)
    const moeda_25 = Math.trunc((dinheiro*100 - notas_somatorio*100 - moeda_1*100 - moeda_50*50) / 25)
    const moeda_10 = Math.trunc((dinheiro*100 - notas_somatorio*100 - moeda_1*100 - moeda_50*50 - moeda_25*25) / 10)
    const moeda_5 = Math.trunc((dinheiro*100 - notas_somatorio*100 - moeda_1*100 - moeda_50*50 - moeda_25*25 - moeda_10*10) / 5)
    const moeda_01 = Math.round(dinheiro*100 - notas_somatorio*100 - moeda_1*100 - moeda_50*50 - moeda_25*25 - moeda_10*10 - moeda_5)

    // saída
    print(`NOTAS:`)
    print(`${nota_100} nota(s) de R$ 100,00`)
    print(`${nota_50} nota(s) de R$ 50,00`)
    print(`${nota_20} nota(s) de R$ 20,00`)
    print(`${nota_10} nota(s) de R$ 10,00`)
    print(`${nota_5} nota(s) de R$ 5,00`)
    print(`${nota_2} nota(s) de R$ 2,00`)
    print(`MOEDAS:`)
    print(`${moeda_1} moeda(s) de R$ 1,00`)
    print(`${moeda_50} moeda(s) de R$ 0,50`)
    print(`${moeda_25} moeda(s) de R$ 0,25`)
    print(`${moeda_10} moeda(s) de R$ 0,10`)
    print(`${moeda_5} moeda(s) de R$ 0,05`)
    print(`${moeda_01} moeda(s) de R$ 0,01`)
}

main()