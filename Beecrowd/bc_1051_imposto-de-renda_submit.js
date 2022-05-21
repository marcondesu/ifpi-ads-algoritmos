var input = require('fs').readFileSync('/dev/stdin', 'utf-8')
var lines = input.split('\n')

function main() {
    const salary = Number(lines[0])

    const income_tax = calcIncomeTax(salary)

    if (income_tax === false) {
        console.log(`Isento`)
    } else {
        console.log(`R$ ${income_tax}`)
    }
}

// imposto de renda
function calcIncomeTax(gross_salary) {
    let descontos_ir = 0

    if (gross_salary > 4500) {
        descontos_ir = (999.99 / 100) * 8
        descontos_ir += (1499.99 / 100) * 18
        descontos_ir += ((gross_salary - 4500) / 100) * 28

    } else if (gross_salary <= 4500 && gross_salary > 3000) {
        descontos_ir = (999.99 / 100) * 8
        descontos_ir += ((gross_salary - 3000) / 100) * 18
    
    } else if (gross_salary <= 3000 && gross_salary > 2000) {
        descontos_ir = ((gross_salary - 2000) / 100) * 8

    } else {
        return false
    }

    return descontos_ir.toFixed(2)
}

main()
