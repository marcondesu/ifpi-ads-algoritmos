import * as fs from 'fs'
import { getText, enterToContinue, getNumberOnRange } from './input-utils.js'

function main() {
    const palavras = loadWords()
    showMenu()

    const [optionMin, optionMax] = [0, 5]

    // estado anterior
    let opcao = getNumberOnRange('> ', optionMin, optionMax)

    while (opcao !== 0) { // condição de continuidade
        // trabalho
        if (opcao === 1) {
            palavrasComMaisDe20Letras(palavras)
        } else if (opcao === 2) {
            palavrasSemLetraE(palavras)
        } else if (opcao === 3) {
            avoids(palavras)
        } else if (opcao === 4) {
            usesOnly()
        } else if (opcao === 5) {
            usesAll()
        }

        // convergencia dos dados
        enterToContinue()
        showMenu()

        opcao = getNumberOnRange('> ', optionMin, optionMax)
    }

    console.log('\n\t-> Fim! <-')
}

// 9.1
function palavrasComMaisDe20Letras(palavras) {
    console.log('\n\t-> Palavras com mais de 20 letras <-\n')
    
    let contador = 0

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
    console.log('\n\t-> Palavras sem a letra "E".<-\n')

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

// 9.3
function avoids(palavras) {
    // menu da função
    console.log('\n\t-> Palavra sem letras proibidas <-\n')

    const palavra = getText('Palavra: ')
    const serie = getText('Letras proibidas: ')

    // tratamento da palavra
    if (palavraSemLetrasProibidas(palavra, serie)) {
        console.log('\n\tA palavra não contém nenhum caractere proibido.')
    } else {
        console.log('\n\tA palavra contém um ou mais dos caracteres proibidos.')
    }

    // verificação de todas palavras
    let contador = 0

    for (let palavra of palavras) {
        if (palavraSemLetrasProibidas(palavra, serie)) {
            contador++
        } 
    }

    const percentual = (contador / palavras.length) * 100
    console.log(`\nExistem ${contador} palavras (${percentual.toFixed(3)}%) sem as letras proibidas.`) 
}

// 9.4
function usesOnly() {
    console.log('\n\t-> Palavra com letras obrigatórias <-\n')

    const palavra = getText('Palavra: ')
    const serie = getText('Letras obrigatórias: ')

    if (!(palavraSemLetrasProibidas(palavra, serie))) {
        console.log('\n\tA palavra contém todas as letras obrigatórias.')
    } else {
        console.log('\nA palavra não contém todas as letras obrigatórias.')
    }
}

// 9.5
function usesAll() {
    usesOnly()
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

function showMenu() {
    let menu = '\n####   MENU   ####\n'
    menu += '\n1 - Palavras com mais de 20 letras'
    menu += '\n2 - Palavras sem a letra "E"'
    menu += '\n3 - Palavra sem letras proibidas'
    menu += '\n4 - Palavra com todas letras obrigatórias'
    menu += '\n5 - Palavra com todas letras obrigatórias pelo menos uma vez.'
    menu += '\n\n0 - Sair\n'
    menu += '------------------------------------------------------------\n'

    console.clear()
    console.log(menu)
}

function loadWords() {
    const palavras = loadfile().split('\n')
    console.log(`${palavras.length} palavras carregadas!`)

    return palavras
}

function loadfile() {
    try{
        const data = fs.readFileSync('../Testes/palavras.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}

main()
