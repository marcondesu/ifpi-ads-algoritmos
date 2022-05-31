import { print, input } from '../io_utils.js'

function main() {
    // entrada
    const tempo_segundos = Number(input("Tempo em segundos: "))

    // procesamento
    const horas = Math.trunc(tempo_segundos / 3600)
    const minutos = Math.trunc((tempo_segundos - horas*3600) / 60)
    const segundos = Math.trunc(tempo_segundos - (horas*3600 + minutos*60))
    
    // saída
    print(`${horas}:${minutos}:${segundos}`)
}

main()
