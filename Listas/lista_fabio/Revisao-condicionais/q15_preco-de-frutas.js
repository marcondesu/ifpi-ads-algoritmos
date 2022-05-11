import { getNumber } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Frutaria -------\n')
    console.log('Fruta\tPreço\tAcima de 5kg\nMorango\tR$2.50\tR$2.20\nMaçã\tR$1.80\tR$1.50\n')

    const strawberry = getNumber('Morango (kg): ')
    const apple = getNumber('Maçã (kg): ')

    console.log(`\nPreço: R$${decideAndCalcFruitsPrice(strawberry, apple)}`)
}

function decideAndCalcFruitsPrice(strawberry, apple) {
    let price = 0

    if (strawberry <= 5) {
        if (apple <= 5) {
            price = calcStrawberryPrice(strawberry, 2.5) + calcApplePrice(apple, 1.8)
            
        } else {
            price = calcStrawberryPrice(strawberry, 2.5) + calcApplePrice(apple, 1.5)

        }
    } else {
        if (apple <= 5) {
            price = calcStrawberryPrice(strawberry, 2.2) + calcApplePrice(apple, 1.8)
            
        } else {
            price = calcStrawberryPrice(strawberry, 2.2) + calcApplePrice(apple, 1.5)

        }
    }

    if (price > 25 || (strawberry + apple) > 8) {
        price = (price / 100) * 90
    }

    return price.toFixed(2)
}

function calcStrawberryPrice(strawberry, price) {
    return (strawberry * price)
}

function calcApplePrice(apple, price) {
    return (apple * price)
}

main()
