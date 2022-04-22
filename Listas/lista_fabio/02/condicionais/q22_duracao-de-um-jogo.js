import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Calcular a duração de um jogo -------\n")
    print("Obs.: a duração máxima de um jogo é de 24 horas\nO horário deverá ser digitado no formato hora:minuto (23:59)\n")

    // entrada
    const inicio_jogo = input("Hora de início do jogo: ")
    const fim_jogo = input("Hora de fim do jogo: ")

    const duracao_jogo = calcularDuracao(inicio_jogo, fim_jogo)

    // saída
    if (duracao_jogo) {
        print(`\nO jogo durou ${duracao_jogo[0]}:${duracao_jogo[1]} horas`)
    } else {
        print('\nO jogo durou mais de 24 horas.')
    }

}

// processamento    
function calcularDuracao(inicio, fim) {
    const [hora_init, minuto_init] = inicio.split(':').map(Number)
    const [hora_fim, minuto_fim] = fim.split(':').map(Number)
    
    const start_game = hora_init*60 + minuto_init
    const end_game = hora_fim*60 + minuto_fim

    if (start_game > end_game) {
       const duracao_minutos = (1440 - hora_init*60 + minuto_init) + (hora_fim*60 + minuto_fim)

       return [Math.trunc(duracao_minutos/60), Math.trunc(duracao_minutos%60)]
    } else if (start_game < end_game) {
        const duracao_minutos = (hora_fim*60 + minuto_fim) - (hora_init*60 + minuto_init)

        return [Math.trunc(duracao_minutos/60), Math.trunc(duracao_minutos%60)]
    } else if (start_game == end_game) {
        return [24, 0]
    }

    /* const duracao = (hora_fim*60 + minuto_fim) - (hora_init*60 + minuto_init)
    const duration = [Math.trunc(duracao/60), Math.trunc(duracao%60)] */
}

main()
