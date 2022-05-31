import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Quilograma para Grama -------\n")

    const quilograma = Number(input("Valor em Kg: "))
        
    const grama = quilograma*1000

    print(`\n${quilograma}kg é o equivalente a ${grama.toFixed(0)}g`)
}

main()
