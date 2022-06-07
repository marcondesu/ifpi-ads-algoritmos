import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const list = loadFile('../../../Testes/lista03_q23.txt').split('\n')
    
    console.clear()
    console.log('\t Calcular impostos e salário líquido de funcionários \t\n')

    let [discount_inss, discount_ir, gross_salary, liquid_salary] = [0, 0, 0, 0]
    let line = []

    for (let i = 0; i < list.length; i++) {
        line = list[i].split(' ')

        gross_salary = (12 * Number(line[1])) + (40 * Number(line[2]))

        discount_inss = calcINSS(gross_salary)
        discount_ir = calcIR(gross_salary)
        liquid_salary = gross_salary - discount_inss - discount_ir

        console.log(`# Código: ${line[0]}`)
        console.log(`Desconto INSS: R$ ${discount_inss.toFixed(2)}`)
        console.log(`Desconto IR: R$ ${discount_ir.toFixed(2)}`)
        console.log(`Salário líquido: R$ ${liquid_salary.toFixed(2)}\n`)
    }
}

// IR
function calcIR(gross_salary) {
    return (gross_salary / 100) * 5
}

// INSS
function calcINSS(gross_salary) {
    return ((gross_salary / 100) * 8.5)
}

main()
