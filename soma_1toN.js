import {print, input} from './io_utils.js'

function soma() {
    print(`Insira o valor inicial: `)
    const inicio = Number(input())
    
    print(`\nInsira o valor final: `)
    const final = Number(input())

    const soma = (final+inicio) * (final/2)

    print(`\nInicio: ${inicio}`)
    print(`Final: ${final}`)

    print(`\nSoma: ${soma}`)
}

soma()