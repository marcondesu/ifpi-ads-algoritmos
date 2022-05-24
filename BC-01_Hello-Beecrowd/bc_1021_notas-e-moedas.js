import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    const value = Number(loadFile('../Testes/bc_1021_teste.txt'))

    const notas = calcularNotas(value)
    const moedas = calcularMoedas(notas[6])

    console.log(`NOTAS:\n${notas[0]} nota(s) de R$ 100.00\n${notas[1]} nota(s) de R$ 50.00\n${notas[2]} nota(s) de R$ 20.00`)
    console.log(`${notas[3]} nota(s) de R$ 10.00\n${notas[4]} nota(s) de R$ 5.00\n${notas[5]} nota(s) de R$ 2.00\nMOEDAS:`)
    console.log(`${moedas[0]} moeda(s) de R$ 1.00\n${moedas[1]} moeda(s) de R$ 0.50\n${moedas[2]} moeda(s) de R$ 0.25`)
    console.log(`${moedas[3]} moeda(s) de R$ 0.10\n${moedas[4]} moeda(s) de R$ 0.05\n${moedas[5]} moeda(s) de R$ 0.01`)
}


function calcularNotas(value) {
    const nota100 = Math.trunc(value / 100)
    const nota50 = Math.trunc((value % 100) / 50)
    const nota20 = Math.trunc((value - nota100*100 - nota50*50) / 20)
    const nota10 = Math.trunc((value - nota100*100 - nota50*50 - nota20*20) / 10)
    const nota5 = Math.trunc((value - nota100*100 - nota50*50 - nota20*20 - nota10*10) / 5)
    const nota2 = Math.trunc((value - nota100*100 - nota50*50 - nota20*20 - nota10*10 - nota5*5) / 2)
    
    const resto = (value - nota100*100 - nota50*50 - nota20*20 - nota10*10 - nota5*5 - nota2*2)
    
    return [nota100, nota50, nota20, nota10, nota5, nota2 ,resto]
}

function calcularMoedas(value) {
    const resto = Math.trunc(value*100)

    const moeda1_real = Math.trunc(resto / 100)
    const moeda50 = Math.trunc((resto - moeda1_real*100) / 50)
    const moeda25 = Math.trunc((resto - moeda1_real*100 - moeda50*50) / 25)
    const moeda10 = Math.trunc((resto - moeda1_real*100 - moeda50*50 - moeda25*25) / 10)
    const moeda5 = Math.trunc((resto - moeda1_real*100 - moeda50*50 - moeda25*25 - moeda10*10) / 5)
    const moeda1 = Math.trunc((resto - moeda1_real*100 - moeda50*50 - moeda25*25 - moeda10*10 - moeda5*5) / 1)

    return [moeda1_real, moeda50, moeda25, moeda10, moeda5, moeda1]
}

main()
