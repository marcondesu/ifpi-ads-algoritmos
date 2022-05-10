import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Folha de pagamento -------\n')

    const hour_cost = getNumber('Valor recebido por hora: ')
    const hours = getNumber('Horas trabalhadas no mês: ')

    const gross_salary = calcGrossSalary(hour_cost, hours)
    const income_tax = calcIncomeTax(gross_salary)
    const inss = calcINSS(gross_salary)
    const fgts = calcFGTS(gross_salary)
    const total_discount = (gross_salary - income_tax[0] - inss).toFixed(2)

    if (income_tax[1] === 1) { // desconto de 5% no imposto de renda
        console.log(`\n[+] Salário bruto: R$ ${gross_salary}`)
        console.log(`[-] Imposto de renda (5%): R$ ${income_tax[0]}`)
        console.log(`[-] INSS (10%): R$ ${inss}\n[-] FGTS (11%): R$ ${fgts}\n`)
        console.log(`[-] Total de descontos: R$ ${total_discount}`)
    
    } else if (income_tax[1] === 2) { // desconto de 5% e 10% no imposto de renda
        console.log(`\n[+] Salário bruto: R$ ${gross_salary}`)
        console.log(`[-] Imposto de renda (5%, 10%): R$ ${income_tax[0]}`)
        console.log(`[-] INSS (10%): R$ ${inss}\n[-] FGTS (11%): R$ ${fgts}\n`)
        console.log(`[-] Total de descontos: R$ ${total_discount}`)
    
    } else if (income_tax[1] === 3) { // desconto de 5%, 10% e 20% no imposto de renda
        console.log(`\n[+] Salário bruto (${hour_cost} * ${hours}): R$ ${gross_salary}`)
        console.log(`[-] Imposto de renda (5%, 10%, 20%): R$ ${income_tax[0]}`)
        console.log(`[-] INSS (10%): R$ ${inss}\n[-] FGTS (11%): R$ ${fgts}\n`)
        console.log(`[-] Total de descontos: R$ ${total_discount}`)

    }
}

// salário bruto
function calcGrossSalary(hour_cost, hours) {
    return (hour_cost * hours).toFixed(2)
}

// salário líquido
function calcNetSalary(gross_salary, discount_ir, discount_inss) {
    return (gross_salary - (discount_ir + discount_inss)).toFixed(2)
}

// imposto de renda
function calcIncomeTax(gross_salary) {
    let descontos_ir = 0

    let ir_flag = 0
    /* 
       flag para facilitar quando for mostrar as porcentagens do imposto de renda 
       1 = 5%
       2 = 5%, 10%
       3 = 5%, 10%, 20%
    */

    if (gross_salary > 2500) {
        descontos_ir += (600 / 100) * 5
        descontos_ir += (1000 / 100) * 10
        descontos_ir += ((gross_salary - 2500) / 100) * 20
        ir_flag = 3


    } else if (gross_salary <= 2500 && gross_salary > 1500) {
        descontos_ir += (600 / 100) * 5
        descontos_ir += ((gross_salary - 900) / 100) * 10
        ir_flag = 2
    
    } else if (gross_salary <= 1500 && gross_salary > 900) {
        descontos_ir += ((gross_salary - 900) / 100) * 5
        ir_flag = 1
    }

    return [descontos_ir.toFixed(2), ir_flag]
}

// INSS
function calcINSS(gross_salary) {
    return ((gross_salary / 100) * 10).toFixed(2)
}

// FGTS
function calcFGTS(gross_salary) {
    return ((gross_salary / 100) * 11).toFixed(2)
}

main()
