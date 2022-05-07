import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()
import { avoidsMenu } from './menus.js'

function main() {
    let menu = '\n####   MENU   ####\n'
    menu += '\n1 - Palavras com mais de 20 letras'
    menu += '\n2 - Palavras sem a letra "E"'
    menu += '\n3 - Palavra sem letras proibidas'
    menu += '\n\n0 - Sair\n'
    menu += '------------------------------------------------------------\n'

    const palavras = loadfile().split('\n')

    console.log(`${palavras.length} palavras carregadas!`)

    // estado anterior
    console.clear()
    console.log(menu)
    let opcao = Number(input('> '))

    while (opcao !== 0) { // condição de continuidade
        // trabalho
        if (opcao === 1) {
            palavrasComMaisDe20Letras(palavras)
        }else if (opcao === 2) {
            palavrasSemLetraE(palavras)
        }else if (opcao === 3) {
            avoids(palavras)
        }

        // convergencia dos dados
        input('\n<Enter> para continuar...')

        console.clear()
        console.log(menu)
        opcao = Number(input('> '))
    }

    console.log('Fim!')
}

// 9.1
function palavrasComMaisDe20Letras(palavras) {
    let contador = 0

    console.log('\n------------------------------------------------------------\n')
    for (let palavra of palavras) {
        if (palavra.length > 20) {
            contador++
            console.log(`${contador}º ${palavra}`)
       }
    } 

    const percentual = (contador / palavras.length) * 100
    console.log(`\nExistem ${contador} palavras (${percentual.toFixed(3)}%) com mais de 20 letras.`)
}

// 9.2
function palavrasSemLetraE(palavras) {
    let contador = 0

    for (let palavra of palavras) {
       if (has_no_letter(palavra, 'e')) {
           console.log(palavra)
           contador++
       }
    }

    const percentual = (contador / palavras.length) * 100
    console.log(`\nExistem ${contador} palavras (${percentual.toFixed(3)}%) sem a letra "E".`) 
}

function avoids(palavras) {
    // menu da função
    avoidsMenu()

    let palavra = input('Palavra: ')
    let serie = input('Letras proibidas: ')

    // tratamento da palavra
    if (palavraSemLetrasProibidas(palavra, serie)) {
        console.log('\n\tTrue')
    }

    // verificação de todas palavras
    let contador = 0

    for (let palavra of palavras) {
        if (palavraSemLetrasProibidas(palavra, serie)) {
            contador++
        } 
    }

    const percentual = (contador / palavras.length) * 100
    console.log(`\nExistem ${contador} palavras (${percentual.toFixed(3)}%) sem a letra "E".`) 
}

function palavraSemLetrasProibidas(palavra, serie) {
    let count = 0

    for (let caractere of serie) {
        if (has_no_letter(palavra, caractere)) {
            count++
        }
    }

    if (count == serie.length) {
        return true
    } else {
        return false
    }
}

function has_no_letter(palavra, letter){
    for (let letra of palavra){
        if (letra === letter){
            return false
        }
    }
    return true
}

function palavras_com_mais_n_letras(palavras) {
    let contador = 0
    const qtd = input('Mais que quantas letras: ')
   for (let palavra of palavras){
       if (palavra.length > qtd){
           console.log(palavra)
           contador++
       }
   } 
   const percentual = (contador / palavras.length) * 100
   console.log(`Existem ${contador} (${percentual.toFixed(3)}%) com mais de ${qtd} letras`)
}

function loadfile() {
    try{
        const data = fs.readFileSync('palavras.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}

main()
