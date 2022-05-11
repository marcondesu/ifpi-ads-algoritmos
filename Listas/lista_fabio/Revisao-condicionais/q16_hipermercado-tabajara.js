import { getPositiveNumber, getNumberOnRange, get2TextOptions } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Hipermercado Tabajara -------\n')
    console.log('[!] Promoção: Ao pagar utilizando o cartão Tabajara obtém-se 5% de desconto.\n')
    console.log('Carne\t    Preço/kg\tAcima de 5kg\n0. Filé\t    R$4,90  \tR$5,80  \n1. Alcatra  R$5,90  \tR$6,80  \n2. Picanha  R$6,90  \tR$7,80  \n')

    const meat_type = getNumberOnRange('Carne (0/1/2): ', -1, 3)
    const meat_quantity = getPositiveNumber('Quantidade (kg): ')
    const payment_method = get2TextOptions('Irá pagar no cartão Tabajara? ', 'Sim', 'Nao', 'As opções são "Sim"/"Nao".')

    const purchase_info = decideAndCalcMeatPrice(meat_type, meat_quantity, payment_method)

    console.log(`\n# Nota fiscal #\n\nItem ${meat_type} (${meat_quantity}kg)\n\nTotal: R$${purchase_info[0]}`)
    console.log(`Pagando no cartão Tabajara? ${payment_method}\nDesconto: ${purchase_info[1]}\nValor a pagar: ${purchase_info[2]}`)
}

// [total, total_with_discount, discount_value]

function decideAndCalcMeatPrice(type, quantity, payment_method) {
    /* const prices = [4.9, 5.9, 6.9]
    const pricesMoreThan5kg = [5.8, 6.8, 7.8] */

    let payment_info = []

    if (payment_method === 'Sim') {
        if (quantity < 5) {
            if (type === 0) {
                payment_info = calcMeatPrice(quantity, 4.9, 5)

                /* payment_info[0] = quantity * price
                payment_info[1] = (quantity * ((price / 100) * (100 - discount)))
                payment_info[2] = total - total_with_discount */
            } else if (type === 1) {
                payment_info = calcMeatPrice(quantity, 5.9, 5)
                
            } else {
                payment_info = calcMeatPrice(quantity, 6.9, 5)

            }
        } else {
            if (type === 0) {
                payment_info = calcMeatPrice(quantity, 5.8, 5)
                
            } else if (type === 1) {
                payment_info = calcMeatPrice(quantity, 6.8, 5)
                
            } else {
                payment_info = calcMeatPrice(quantity, 7.8, 5)

            }
        }
    } else {
        if (quantity < 5) {
            if (type === 0) {
                payment_info = calcMeatPrice(quantity, 4.9, 0)
                
            } else if (type === 1) {
                payment_info = calcMeatPrice(quantity, 5.9, 0)
                
            } else {
                payment_info = calcMeatPrice(quantity, 6.9, 0)

            }
        } else {
            if (type === 0) {
                payment_info = calcMeatPrice(quantity, 5.8, 0)
                
            } else if (type === 1) {
                payment_info = calcMeatPrice(quantity, 6.8, 0)
                
            } else {
                payment_info = calcMeatPrice(quantity, 7.8, 0)

            }
        }
    }

    return payment_info
}

function calcMeatPrice(quantity, price, discount) {
    const total = quantity * price
    const total_with_discount = (quantity * ((price / 100) * (100 - discount)))
    const discount_value = total - total_with_discount

    return [total, total_with_discount, discount_value]
}

main()
