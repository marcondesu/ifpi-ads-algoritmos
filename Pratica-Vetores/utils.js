import * as fs from 'fs'

import prompt from 'prompt-sync'
const input = prompt()

/**
 * Retorna qualquer valor digitado pelo usuário
*/
export function getValue(msg) {
    return input(msg)
}

/**
 * Retorna um número digitado pelo usuário
*/
export function getNumber(msg) {
    const number = Number(input(msg))

    return number
}

/**
 * Retorna um número positivo digitado pelo usuário
*/
export function getPositiveNumber(msg) {
    const number = getNumber(msg)

    if (number < 0) {
        console.log('[X] Erro! O Número deve ser positivo.\n')
        getPositiveNumber(msg)
    }

    return number
}

/**
 * Retorna um número negativo digitado pelo usuário
*/
export function getNegativeNumber(msg) {
    const number = getNumber(msg)

    if (number > 0) {
        console.log('[X] Erro! O Número deve ser negativo.\n')
        getNumber(msg)
    }

    return number
}

/**
 * Retorna um número digitado pelo usuário que esteja entre duas faixas
*/
export function getNumberOnRange(min, max, msg) {
    const number = getNumber(msg)

    if (number > max || number < min) {
        console.log(`[X] Erro! O número deve estar entre ${min} e ${max}\n`)

        return getNumberOnRange(min, max, msg)
    }

    return number
}

/**
 * Retorna um número digitado pelo usuário que seja maior que outro
*/
export function getNumberGreaterThan(min, msg) {
    const number = getNumber(msg)

    if (number <= min) {
        console.log(`\n[X] Erro! O número deve ser maior que ${min}`)
        return getNumberGreaterThan(min, msg)
    }
    
    return number
}

/**
 * Carrega valores de um arquivo .txt
*/
export function loadFile(file){
    try{
        const data = fs.readFileSync(file, 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}

/**
 * Input para travar o final da iteração de um while
*/
export function pressEnterToContinue() {
    const value = input('Pressione Enter para continuar...')
}
