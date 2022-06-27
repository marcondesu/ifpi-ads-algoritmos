import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Calcular candidata mais alta/baixa e magra/gorda -------\n')

    const lines = loadFile('../../../Testes/lista04while_q17.txt').split('\r\n')

    let counter = 0

    // variável para facilitar o split de cada linha do txt
    let current_line = []

    // cada variável é uma coleção contendo nome e altura/peso
    let [gorda, alta] = [['', 0], ['', 0]]
    let [magra, baixa] = [['', 500], ['', 3]]

    while (lines[counter] != 'FIM') {
        current_line = lines[counter].split(' ')
        
        // altura
        if (Number(current_line[1]) > alta[1]) {
            alta[0] = current_line[0]
            alta[1] = current_line[1]

        } else if (Number(current_line[1]) < baixa[1]) {
            baixa[0] = current_line[0]
            baixa[1] = current_line[1]
        }

        // peso
        if (Number(current_line[2]) > gorda[1]) {
            gorda[0] = current_line[0]
            gorda[1] = current_line[2]

        } else if (Number(current_line[2]) < magra[1]) {
            magra[0] = current_line[0]
            magra[1] = current_line[2]
        }

        counter++
    }

    console.log(`Candidata mais alta: ${alta[0]} ${alta[1]}m`)
    console.log(`Candidata mais gorda: ${gorda[0]} ${gorda[1]}kg`)
    console.log(`Candidata mais baixa: ${baixa[0]} ${baixa[1]}m`)
    console.log(`Candidata mais magra: ${magra[0]} ${magra[1]}kg`)
}

main()
