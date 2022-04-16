import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Ler 3 números e determinar o maior e o menor -------\n")
    
    // entrada
    const numero_1 = Number(input("1º Número: "))
    const numero_2 = Number(input("2º Número: "))
    const numero_3 = Number(input("3º Número: "))

    const [n1, n2, n3] = comparar(numero_1, numero_2, numero_3)

    // saída
    print(`\n:::: Pódio ::::\n1º ${n1}\n2º ${n2}\n3º ${n3}`)
}

// processamento
function comparar(n1, n2, n3) {
    if (n1 > n2 > n3) {
        return [n1, n2, n3]
    } else if (n1 > n2 < n3) {
        return [n1, n3, n2]
    } else if (n1 < n2 > n3) {
        if (n1 > n3) {
            return [n2, n1, n3]
        } else {
            return [n2, n3, n1]
        }
    } else if (n1 < n2 < n3) {
        return [n3, n2, n1]
    }
}

main()