import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Arredondar parte fracionária de um número -------\n")


    // entrada
    const number = input("Número com parte fracionária (Ex.:13.2 / 4.5): ")

    // processamento
    const [inteiro, fracao] = number.split('.').map(Number)
    const resultado = arredondarNumero(inteiro, fracao)

    // saída
    print(`${resultado}`)
}

function arredondarNumero(inteiro, fracao) {
    if (fracao >= 5) {
        return inteiro + 1   
    } else {
        return inteiro
    }
}

main()
