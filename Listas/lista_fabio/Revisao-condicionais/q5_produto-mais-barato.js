import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Decidir produto mais barato -------\n\nPreços:')

    const product_1 = getNumber('1º Produto: ')
    const product_2 = getNumber('2º Produto: ')
    const product_3 = getNumber('3º Produto: ')

    const cheaper_product = decideCheaperProduct(product_1, product_2, product_3)

    console.log(`\n[>] O produto ${cheaper_product} é o mais barato.`)
}

function decideCheaperProduct(p1, p2, p3) {
    if (p1 < p2 && p1 < p3) {
        return '1º'
    } else if (p2 < p1 && p2 < p3) {
        return '2º'
    } else if (p3 < p1 && p3 < p2) {
        return '3º'
    }
}


main()
