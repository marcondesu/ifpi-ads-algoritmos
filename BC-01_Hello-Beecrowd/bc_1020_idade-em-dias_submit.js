var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const idade_dias = Number(lines[0])

    // procesamento
    const anos = Math.trunc(idade_dias / 365)
    const meses = Math.trunc((idade_dias - anos*365) / 30)
    const dias = Math.trunc(idade_dias - (anos*365 + meses*30))
    
    // saída
    console.log(`${anos} ano(s)`)
    console.log(`${meses} mes(es)`)
    console.log(`${dias} dia(s)`)
}

main() 