var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    let new_grenal = 1
    let [gremio_score, inter_score, count] = [0, 0, 0]
    let [win_gremio, win_inter, ties, grenais] = [0, 0, 0, 0]

    while (new_grenal === 1) {
        [inter_score, gremio_score] = lines[count].split(' ').map(Number)
        
        if (gremio_score > inter_score) {
            win_gremio++
        } else if (gremio_score < inter_score) {
            win_inter++
        } else {
            ties++
        }

        count++

        console.log('Novo grenal (1-sim 2-nao)')
        new_grenal = Number(lines[count])

        grenais++
        count++
    }

    console.log(`${grenais} grenais\nInter:${win_inter}\nGremio:${win_gremio}`)
    console.log(`Empates:${ties}`)

    if (win_gremio > win_inter) {
        console.log('Gremio venceu mais')
    } else if (win_gremio < win_inter) {
        console.log('Inter venceu mais')
    } else {
        console.log('Nao houve vencedor')
    }
}

main()
