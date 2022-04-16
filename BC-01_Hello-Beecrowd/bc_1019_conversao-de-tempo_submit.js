var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    // entrada
    const tempo_segundos = Number(lines[0])

    // procesamento
    const horas = Math.trunc(tempo_segundos / 3600)
    const minutos = Math.trunc((tempo_segundos - horas*3600) / 60)
    const segundos = Math.trunc(tempo_segundos - (horas*3600 + minutos*60))
    
    // saída
    console.log(`${horas}:${minutos}:${segundos}`)
}

main() 