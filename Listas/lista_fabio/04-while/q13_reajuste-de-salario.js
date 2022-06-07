import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const lines = loadFile('../../../Testes/lista04_q13.txt').split('\n').map(Number)

    console.clear()
    console.log('------- Reajuste de salário -------\n')

    let salary = 1
    let readjust_salary_sum = 0
    let salary_sum = 0
    let count = 0

    while (salary !== 0) {
        salary = lines[count]

        salary_sum += salary
        readjust_salary_sum += readjustSalary(salary)

        count++
    }

    const difference = readjust_salary_sum - salary_sum

    console.log(`Soma dos salários: R$ ${salary_sum.toFixed(2)}`)
    console.log(`Soma dos salários reajustados: R$ ${readjust_salary_sum.toFixed(2)}`)
    console.log(`Diferença entre os salários: R$ ${difference.toFixed(2)}\n`)
}

function readjustSalary(salary) {
    if (salary < 3000) {
        return (salary / 100) * 125
    } else if (salary < 6000) {
        return (salary / 100) * 120
    } else if (salary < 10000) {
        return (salary / 100) *115
    }

    return (salary / 100) * 110
}

// soma dos salarios, soma dos reajustes, diferença

main()
