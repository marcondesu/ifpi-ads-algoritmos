import { getText } from '../Iteracao-strings/input-utils.js'

function main() {
  console.clear()
    console.log('\n------- Verificar maior valor -------\n')
    console.log('Os valores deverão ser digitados no formato "12 645 4"\n')

    const [value_1, value_2, value_3] = getText('Valores: ').split(' ').map(Number)

    const ordem = maior_ab(value_1, value_2, value_3)

    console.log(`\n${ordem} eh o maior`)
}

function maior_ab(a, b, c) {
    let maior_ab = ((a + b + Math.abs(a - b)) / 2)
    maior_ab = ((maior_ab + c + Math.abs(maior_ab - c)) / 2)

    return maior_ab
}

main()
