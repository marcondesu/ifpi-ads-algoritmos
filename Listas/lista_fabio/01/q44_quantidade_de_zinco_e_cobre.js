import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Quantidade de Cobre e Zinco Necessária para se Obter Certa Quantidade de Latão -------\n")

    const latao = Number(input("Quantidade de latão em kg: "))
    const cobre = (latao/100) * 70
    const zinco = (latao/100) * 30

    print(`\nPara se obter ${latao}kg de latão é necessário ${cobre.toFixed(3)}kg de cobre e ${zinco.toFixed(3)}kg de zinco`)
}

main()