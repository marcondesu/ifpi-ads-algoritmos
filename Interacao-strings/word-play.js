import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let menu = '\n####   MENU   ####\n'
    menu += '\n1 - Palavras com mais de 20 letras'
    menu += '\n2 - Palavras sem a letra "E"'
    menu += '\n3 - Verificar se determinada palavra não contém determinadas letras'
    menu += '\n\n0 - Sair\n'
    menu += '------------------------------------------------------------\n'

    const palavras = loadfile().split('\n')

    console.log(`${palavras.length} palavras carregadas!`)

    // estado anterior
    console.log(menu)
    let opcao = Number(input('> '))

    while (opcao !== 0) { // condição de continuidade
        // trabalho
        if (opcao === 1) {
            palavrasComMaisDe20Letras(palavras)
        }else if (opcao === 2) {
            palavrasSemLetraE(palavras)
        }else if (opcao === 3) {
            avoids()
        }

        // convergencia dos dados
        input('\n<Enter> para continuar...')

        console.clear()
        console.log(menu)
        opcao = Number(input('> '))
    }

    console.log('Fim!')
}

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

function avoids() {
    let palavra = input('Palavra: ')

    console.log('\nA série de letras proibidas deve ser digitada no formato (a b c d)\n')
    let serie = input('Letras proibidas: ').split(' ')

    for (let i = 0; i < serie.length; i++) {
        for (let x = 0; x < palavra.length; x++) {
            if (serie[i] === palavra[x]) {
                console.log('True')
                i = serie.lenght
            }
        }
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
