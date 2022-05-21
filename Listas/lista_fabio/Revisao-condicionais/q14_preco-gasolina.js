import { get2TextOptions, getNumberOnRange } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Posto de gasolina -------\n\nSelecione A (álcool) ou G (gasolina).\n')

    const fuel_type = get2TextOptions('Tipo de combustível: ', 'A', 'G', 'Selecione A (álcool) ou G (gasolina)')
    const fuel_quantity = getNumberOnRange('Quantidade (litro): ', 0, Number.MAX_VALUE)

    console.log(`\nPreço: R$${decideAndCalcFuelPrice(fuel_type, fuel_quantity)}`)
}

function decideAndCalcFuelPrice(fuel_type, fuel_qtt) {
    if (fuel_type === 'A') {
        return calcAlcoholPrice(fuel_qtt).toFixed(2)
    } else {
        return calcGasPrice(fuel_qtt).toFixed(2)
    }
}

function calcGasPrice(fuel_qtt) {
    const price = 2.5

    if (fuel_qtt < 20) { // desconto de 3%
        return (fuel_qtt * ((price / 100) * 97))

    } else { // desconto de 5%
        return (fuel_qtt * ((price / 100) * 95))

    }
}

function calcAlcoholPrice(fuel_qtt) {
    const price = 1.9

    if (fuel_qtt < 20) { // desconto de 3%
        return (fuel_qtt * ((price / 100) * 97))

    } else { // desconto de 6%
        return (fuel_qtt * ((price / 100) * 94))

    }
}

main()
