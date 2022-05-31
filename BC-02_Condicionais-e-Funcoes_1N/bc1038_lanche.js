import {print, input} from '../io_utils.js'

function main() {
    print('\n------- Ler o código de um item, sua quantidade e calcular a conta a ser paga -------\n')
    print('### Cardápio ###\n\nCÓDIGO\tESPECIFICAÇÃO\tPREÇO\n1\tCachorro Quente\tR$4.00\n2\tX-Salada\tR$4.50\n3\tX-Bacon\t\tR$5.00\n4\tTorrada simples\tR$2.00\n5\tRefrigerante\tR$1.50\n')

    // entrada
    const codigo = Number(input("Código do item: "))
    const quantidade = Number(input("Quantidade de itens: "))

    const conta = calcularConta(codigo, quantidade)

    // saída
    print(`Total: R$ ${conta.toFixed(2)}`)
}

// processamento    
function calcularConta(code, quantity) {
    if (code == 1) { // valor do item 1: R$4.00
        return quantity*4
    } else if (code == 2) { // valor do item 2: R$4.50
        return quantity*4.5
    } else if (code == 3) { // valor do item 3: R$5.00
        return quantity*5
    } else if (code == 4) { // valor do item 4: R$2.00
        return quantity*2
    } else if (code == 5) { // valor do item 5: R$1.50
        return quantity*1.5
    }
} 

main()
