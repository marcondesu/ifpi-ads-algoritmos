import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Calcular quantidade de alunos numa turma, aprovados e reprovados -------\n')

    let students = loadFile('../../../Testes/lista04_q11.txt').split('\r\n')
    let [score_1, score_2, score_3] = [0, 0, 0]
    let [approved, disapproved] = [0, 0]
    let line = []
    let count = 0

    while (count < students.length) {
        line = students[count].split(' ').map(Number)

        score_1 = line[1]
        score_2 = line[2]
        score_3 = line[3]

        if (calculateAverageScore(score_1, score_2, score_3)) {
            approved++
        } else {
            disapproved++
        }

        count++
    }

    console.log(`Total de alunos: ${students.length}\nAprovados: ${approved}\nReprovados: ${disapproved}`)
}

function calculateAverageScore(score1, score2, score3) {
    const media = ((2 * score1) + (3 * score2) + (5 * score3)) / 10

    if (media >= 7) {
        return true
    }

    return false
}

main()
