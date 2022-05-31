import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Somar um Numero de 3 Dígitos pelo seu Inverso -------\n")

    const numero = Number(input("Insira o número: "))

    const centena = Math.trunc(numero / 100) // centena do número original que será convertida em unidade
    const dezena = Math.trunc((numero - centena*100) / 10) // dezena original manterá como dezena
    const unidade = Math.trunc(numero - (centena*100 + dezena*10)) // unidade original será centena


    const inverso = unidade*100 + dezena*10 + centena
    const soma = numero + inverso

    print(`\n${numero} + ${inverso} = ${soma}`)
}

main()
