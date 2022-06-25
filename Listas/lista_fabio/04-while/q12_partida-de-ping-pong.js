import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()

    // lines vai conter os valores do arquivo num vetor onde todos são números
    const lines = loadFile('../../../Testes/lista04while_q12.txt').split('\r\n').map(Number)
    let counter = 0

    // variáveis que irão conter o valor dos pontos dos jogadores
    let [player_1, player_2] = [0, 0]

    while (counter < lines.length) {
        // vai iterar até ler todo o arquivo
        if (lines[counter] === 1) {
            player_1++
        } else if (lines[counter] === 2) {
            player_2++
        }

        counter++
        
        if (player_1 >= 21 || player_2 >= 21) {
            // caso um dos jogadores faça mais de 21 pontos...
            if (player_1 - player_2 >= 2) {
                // caso o jogador 1 faça uma diferença de 2 pontos sobre o jogador 2...
                console.log('O jogador 1 ganhou a partida.')
                break
            } else if (player_2 - player_1 >= 2) {
                // caso o jogador 2 faça uma diferença de 2 pontos sobre o jogador 1...
                console.log('O jogador 2 ganhou a partida.')
                break
            }
        }
    }
    
}

main()
