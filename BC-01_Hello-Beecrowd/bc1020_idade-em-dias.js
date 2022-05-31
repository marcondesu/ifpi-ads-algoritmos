import { print, input } from '../io_utils.js'

function main() {
    // entrada
    const idade_dias = Number(input("Idade em dias: "))

    // procesamento
    const anos = Math.trunc(idade_dias / 365)
    const meses = Math.trunc((idade_dias - anos*365) / 30)
    const dias = Math.trunc(idade_dias - (anos*365 + meses*30))
    
    // saída
    print(`${anos} ano(s)`)
    print(`${meses} mes(es)`)
    print(`${dias} dia(s)`)
}

main() 