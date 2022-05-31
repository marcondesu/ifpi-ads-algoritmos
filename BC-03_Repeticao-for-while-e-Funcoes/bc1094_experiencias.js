import { loadFile } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Organizar experiências de um laboratório -------\n')

    const experiments = loadFile('../Testes/bc_1094_teste.txt')

    // tsubject -> test subject
    const total_tsubjects = getTotalTestSubjects(experiments)
    const classified_tsubjects = classifyTestSubjects(experiments)
    const percentages = getTestSubjectsPercentage(total_tsubjects, classified_tsubjects)

    console.log(`Total: ${total_tsubjects} cobaias`)
    console.log(`Total de coelhos: ${classified_tsubjects[0]}\nTotal de ratos: ${classified_tsubjects[1]}\nTotal de sapos: ${classified_tsubjects[2]}`)
    console.log(`Percentual de coelhos: ${percentages[0]} %\nPercentual de ratos: ${percentages[1]} %\nPercentual de sapos: ${percentages[2]} %`)
}

function getTestSubjectsPercentage(total, test_subjects) {
    const rabbit_percentage = ((test_subjects[0]*100) / total).toFixed(2)
    const frog_percentage = ((test_subjects[1]*100) / total).toFixed(2)
    const rat_percentage = ((test_subjects[2]*100) / total).toFixed(2)

    return [rabbit_percentage, frog_percentage, rat_percentage]

}

function classifyTestSubjects(experiments) {
    let rat = 0
    let frog = 0
    let rabbit = 0

    for (let line of experiments) {
        line = line.split(' ')

        if (line != experiments[0]) {
            if (line[1] === 'R\r') {
                rat += Number(line[0])
            } else if (line[1] === 'S\r') {
                frog += Number(line[0])
            } else if (line[1] === 'C\r') {
                rabbit += Number(line[0])
            }
        }
    }

    return [rabbit, rat, frog]
}

function getTotalTestSubjects(experiments) {
    const test_cases = Number(experiments[0])

    let total_test_subjects = 0

    for (let line of experiments) {
        line = line.split(' ')

        total_test_subjects += Number(line[0])
    }

    total_test_subjects -= test_cases

    return total_test_subjects
}

function loadfile(){
    try{
        const data = fs.readFileSync('../Testes/bc_1094_teste.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}

main()
