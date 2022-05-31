import {print, input} from '../io_utils.js'

function main() {
    print('\n------- Calcular a média de um aluno -------\n')

    // entrada
    const nota_1 = Number(input('Nota 1: '))
    const nota_2 = Number(input('Nota 2: '))
    const nota_3 = Number(input('Nota 3: '))
    const nota_4 = Number(input('Nota 4: '))

    const media = calcularMediaPonderada(nota_1, nota_2, nota_3, nota_4)

    // saída
    print(`Media: ${media.toFixed(1)}`)

    if (media >= 7) {
        print('Aluno aprovado.')
    } else if (media < 5) {
        print('Aluno reprovado.')
    } else {
        print('Aluno em exame.\n')
        const nota_exame = Number(input('Nota do exame: '))

        const media_exame = calcularMediaDoExame(media, nota_exame)

        if (media_exame >= 5) {
            print(`Aluno aprovado.\nMedia final: ${media_exame}`)
        } else {
            print(`Aluno reprovado.\nMedia final: ${media_exame}`)
        }
    }
}

// processamento
function calcularMediaPonderada(n1, n2, n3, n4) {
    return ((n1*2) + (n2*3) + (n3*4) + (n4*1)) / 10
}

function calcularMediaDoExame(media, exame) {
    return ((media + exame) / 2)
}

main()
