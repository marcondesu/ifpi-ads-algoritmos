import { getText } from '../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Criptografia -------\n')

    let frase = getText('Frase: ')

    const frase_deslocada = deslocarCaracteresDaFrase(frase, 0, frase.length-1)
    const frase_invertida = inverterFrase(frase_deslocada)
    // const frase_deslocada_na_metade = deslocarFraseNaMetade(frase_invertida)
}

function deslocarFraseNaMetade(frase) {
    let metade = frase.length / 2
    let count = frase.length - 1
    let frase_deslocada_na_metade = ''

    while (count >= frase.length) {
        frase_invertida += frase[count]

        count--
    }
}

function inverterFrase(frase) {
    let frase_invertida = ''
    let count = frase.length - 1

    while (count >= 0) {
        frase_invertida += frase[count]

        count--
    }

    return frase_invertida
}

function deslocarCaracteresDaFrase(frase, inicio, fim) {
    let frase_deslocada = frase
    let codigo = 0

    for (let i = inicio; i <= fim; i++) {
        if ((ehLetraMinuscula(frase[i]) || ehLetraMaiuscula(frase[i]))) {

            codigo = frase[i].charCodeAt(0)

            frase_deslocada += String.fromCharCode(codigo + 3)
            
            
        } else {
            frase_deslocada += frase[i]
        }
    }
    console.log(frase_deslocada)

    return frase_deslocada
}

function ehLetraMinuscula(caractere) {
    return ((caractere.charCodeAt(0) >= 97) && (caractere.charCodeAt(0) <= 122))
}

function ehLetraMaiuscula(caractere) {
    return ((caractere.charCodeAt(0) >= 60) && (caractere.charCodeAt(0) <= 90))
}

main()
