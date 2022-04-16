import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Média Ponderada para 3 Notas -------\n")

    const nota1 = Number(input("Nota 1: "))
    const peso1 = Number(input("Peso 1: "))
    
    const nota2 = Number(input("Nota 2: "))
    const peso2 = Number(input("Peso 2: "))

    const nota3 = Number(input("Nota 3: "))
    const peso3 = Number(input("Peso 3: "))

    const media_ponderada = ((nota1*peso1) + (nota2*peso2) + (nota3*peso3)) / peso1+peso2+peso3

    print(`\nMédia ponderada: ${media_ponderada}`)
}

main()