import { loadFile } from '../../../Iteracao-strings/input-utils.js'

function main() {
    const list = loadFile('../../../Testes/lista03_q24.txt').split('\n')
    
    console.clear()
    console.log('\t Percentual de pessoas com salário acima de R$1000, média de salário e filhos \t\n')

    const n_habitantes = Number(list[0])
    let line = []
    let [avg_salary, avg_childs, percent] = [0, 0, 0]
    let counter = 1

    // média de salário | média de filhos | percentual de salários acima de 1000

    while (counter <= n_habitantes) {
        line = list[counter].split(' ').map(Number)

        avg_salary += line[0]
        avg_childs += line[1]
        
        if (line[0] < 1000) {
            percent++
        }

        counter++
    }

    avg_salary = avg_salary / n_habitantes
    avg_childs = avg_childs / n_habitantes
    percent = (percent / n_habitantes) * 100

    console.log(`Média da quantidade de filhos: ${avg_childs}`)
    console.log(`Média de salário: R$ ${avg_salary.toFixed(2)}`)
    console.log(`Percentual de habitantes com salário abaixo de R$ 1000: ${percent.toFixed(1)}%\n`)
}

main()
