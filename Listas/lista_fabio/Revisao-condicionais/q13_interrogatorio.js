import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('------- Interrogatório -------\n\nResponda "Sim" ou "Nao".\n')

    // carregar lista de perguntas
    const questions = questionList()

    const question_1 = getText(questions[0])
    const question_2 = getText(questions[1])
    const question_3 = getText(questions[2])
    const question_4 = getText(questions[3])
    const question_5 = getText(questions[4])

    const number_of_positive_answers = judgment(question_1, question_2, question_3, question_4, question_5)

    console.log(decideVerdict(number_of_positive_answers))
}

function decideVerdict(positive_answers) {
    if (positive_answers === 1) {
        return '\n[!] Inocente.'
    } else if (positive_answers === 2) {
        return '\n[!] Suspeito.'
    } else if (positive_answers <= 4) {
        return '\n[!] Cúmplice.'
    } else {
        return '\n[!] Assassino.'
    }
}

function judgment(q1, q2, q3, q4, q5) {
    const answers = [q1, q2, q3, q4, q5]
    let positive_answers_count = 0

    for (let answer of answers) {
        if (answer === 'Sim') {
            positive_answers_count++
        }
    }

    return positive_answers_count
}

function questionList() {
    const questions = ['Telefonou para a vítima? ',
                       'Esteve no local do crime? ',
                       'Mora perto da vítima? ',
                       'Devia para a vítima? ',
                       'Já trabalhou com a vítima? ']

    return questions
}

export function getText(msg) {
    const text = input(msg)

    if (text.length == 0) {
        console.log('[X] Erro! Texto vazio, digite algo.\n')

        return getText(msg)
    } else if (!isNaN(text)) {
        console.log('[X] Erro! Insira caracteres.\n')

        return getText(msg)
    } else if (text === 'Sim' || text === 'Nao') {
        return text
    }

    console.log('[X] Erro! Digite "Sim" ou "Nao" para responder às perguntas.\n')

    return getText(msg)    
}

main()
