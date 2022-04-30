var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

function main() {
    // entrada
    const [nota_1, nota_2, nota_3, nota_4] = lines[0].split(' ').map(Number)

    const media = calcularMediaPonderada(nota_1, nota_2, nota_3, nota_4)

    // saída
    console.log(`Media: ${media.toFixed(1)}`)

    if (media >= 7) {
        console.log('Aluno aprovado.')
    } else if (media < 5) {
        console.log('Aluno reprovado.')
    } else {
        const nota_exame = Number(lines[1])
        console.log(`Aluno em exame.\nNota do exame: ${nota_exame.toFixed(1)}`)

        const media_exame = calcularMediaDoExame(media, nota_exame)

        if (media_exame >= 5) {
            console.log(`Aluno aprovado.\nMedia final: ${media_exame.toFixed(1)}`)
        } else {
            console.log(`Aluno reprovado.\nMedia final: ${media_exame.toFixed(1)}`)
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
