import { loadFile } from './utils.js'

function main() {
    console.clear()
    const lines = loadFile('./familias.txt').split('\n')

    for (let i = 0; i < lines.length; i++) {
        calcularTarifa(lines[i])
    }
}

function calcularTarifa(familia) {
    const [consumidor, kwh, bandeira] = familia.split('-')

    const consumo_reais = consumoDeEnergia(Number(kwh), bandeira)
    const impostos = calcularValorDosImpostos(consumo_reais)
    const total_a_pagar = somarConsumoEImpostos(consumo_reais, impostos)

    showExtratos(consumo_reais, impostos, total_a_pagar, consumidor, Number(kwh))
}

function showExtratos(consumo_reais, impostos, total_a_pagar, consumidor, kwh) {
    const [consumo, iluminacao] = [consumo_reais[0], consumo_reais[1]]
    const [adicional_bandeira, valor_bandeira] = [consumo_reais[2], consumo_reais[3]]
    const valor_kwh = consumo_reais[4]
    const [icms, pis_cofins] = [impostos[0], impostos[1]]

    let extrato = '****** TALÃO MENSAL XPTO ******\n'
    extrato += `Consumidor: ${consumidor}\n`
    extrato += `Consumo (Kwh): ${kwh}\n`
    extrato += `Consumo (R$): R$ ${consumo.toFixed(2)}(valor por Kwh: R$ R$ ${valor_kwh})\n`
    extrato += `Bandeira tarifária: R$ ${adicional_bandeira} (valor por 100Kwh: R$ ${valor_bandeira})\n`
    extrato += `Total sem impostos: R$ ${consumo}\n`
    extrato += `ICMS: R$ ${icms.toFixed(2)}\n`
    extrato += `PIS/COFINS: R$ ${pis_cofins.toFixed(2)}\n`
    extrato += `Iluminação política: R$ ${iluminacao.toFixed(2)}\n`
    extrato += `--------------------------------------------------------------------------\n`
    extrato += `Total a pagar: R$ ${total_a_pagar.toFixed(2)}\n`
    
    console.log(extrato)
}

function consumoDeEnergia(kwh, bandeira) {
    let custo = 0
    let iluminacao = 0

    if (kwh <= 30) {
        return [0, 0]
    }
    
    const custo_kwh = calcularCusto(kwh)
    custo = custo_kwh[0]
    const valor_kwh = custo_kwh[1]
    
    // letra D
    iluminacao = calcularIluminacao(custo)
    
    const calculo_bandeira = calcularAdicionalDeBandeira(kwh, bandeira)
    
    const adicional_bandeira = calculo_bandeira[0]
    const valor_bandeira = calculo_bandeira[1]

    return [custo, iluminacao, adicional_bandeira, valor_bandeira, valor_kwh]
}

function somarConsumoEImpostos(consumo_reais, impostos) {
    const [consumo, iluminacao] = [consumo_reais[0], consumo_reais[1]]
    const [icms, pis_cofins] = [impostos[0], impostos[1]]

    return consumo + iluminacao + icms + pis_cofins
}

function calcularValorDosImpostos(consumo) {
    const total_consumo = consumo[0] + consumo[1]

    const icms = (total_consumo / 100) * 25
    const pis_cofins = (total_consumo / 100) * 3.75

    return [icms, pis_cofins]
}

function calcularAdicionalDeBandeira(kwh, bandeira) {
    // letra B
    if (bandeira == 'VERDE') {
        return [0, 0]
    
    } else if (bandeira == 'AMARELA') {
        return [(Math.trunc(kwh / 100) * 2.989), 2.989]
    
    } else if (bandeira == 'VERMELHAPTM1') {
        return [(Math.trunc(kwh / 100) * 6.5), 6.5]

    } else if (bandeira == 'VERMELHAPTM2') {
        return [(Math.trunc(kwh / 100) * 9.795), 9.795]
    }
}

function calcularCusto(kwh) {
    // caso for acima de 200kwh, 30% mais caro em cada kwh (R$ 1,157)
    if (kwh > 200) {
        // letra C
        return [kwhSuperiorA200(kwh), 1.157]
    
    }
    
    // caso for abaixo, o preço do kwh se mantém o mesmo (R$ 0,89)
    return [calcularCustoDeKwh(kwh), 0.89]
}

// valor da iluminação equivale a 3% do custo da tarifa
function calcularIluminacao(valor) {
    return valor * 0.03
}

// letra A
function calcularCustoDeKwh(kwh) {
    return kwh * 0.89
}

function kwhSuperiorA200(kwh) {
    return kwh * (0.89 * 1.3)
}

main()
