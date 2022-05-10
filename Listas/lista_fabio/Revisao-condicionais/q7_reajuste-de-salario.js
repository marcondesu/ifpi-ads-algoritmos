import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Reajuste de salário -------\n')

    const salary = getNumber('Salário: ')

    const readjust = salaryReadjustment(salary)

    console.log(`\nSalário antes do reajuste: R$${readjust[0]}\nPercentual de aumento: ${readjust[1]}%\nValor do aumento: R$${readjust[2]}\n\nNovo salário: R$${readjust[3]}`)
}

function salaryReadjustment(salary) {
    if (salary <= 280) {
        const new_salary = (salary / 100) * 120 // 100% + 20% (aumento de 20%)
        const increase = new_salary - salary

        return [salary.toFixed(2), 20, increase.toFixed(2), new_salary.toFixed(2)]
    } else if (salary > 280 && salary <= 700) {
        const new_salary = (salary / 100) * 115 // 100% + 15% (aumento de 15%)
        const increase = new_salary - salary

        return [salary.toFixed(2), 15, increase.toFixed(2), new_salary.toFixed(2)]
    } else if ( salary > 700 && salary <= 1500) {
        const new_salary = (salary / 100) * 110 // 100% + 10% (aumento de 10%)
        const increase = new_salary - salary

        return [salary.toFixed(2), 10, increase.toFixed(2), new_salary.toFixed(2)]
    } else if (salary > 1500) {
        const new_salary = (salary / 100) * 105 // 100% + 5% (aumento de 5%)
        const increase = new_salary - salary

        return [salary.toFixed(2), 5, increase.toFixed(2), new_salary.toFixed(2)]
    }
}

main()
