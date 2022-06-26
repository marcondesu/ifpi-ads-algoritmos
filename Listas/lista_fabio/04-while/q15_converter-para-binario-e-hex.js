import { getNumberOnRange } from '../../../Iteracao-strings/input-utils.js'

function main() {
    console.clear()
    console.log('------- Converte um número de decimal para binário e hexadecimal -------\n')

    const number = getNumberOnRange('Número decimal entre 0-255: ', 0, 255)

    const binary_number = convertDecimalToBinary(number)
    // const hex_number = convertDecimalToHex(binary_number)

    console.log(`\n${number} em binário = ${binary_number}`)
}

function convertDecimalToHex(number) {
    let hex = ''
    let nibble = ''
    let nibble_in_decimal = ''
    const hex_table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let counter = 0

    nibble = fillNibble(nibble, number, counter)
    nibble_in_decimal = convertNibbleToDecimal(nibble)
    console.log(nibble_in_decimal)
}

function convertNibbleToHex(nibble) {
    let nibble_hex = ''
    let counter = 0

    while (counter < 4) {
        nibble_hex += `${nibble[counter] ** 2}`
    }
}

function fillNibble(nibble, number, counter) {
    while (nibble.length < 4) {
        nibble += `${number[counter]}`
        

        counter++
    }

    return nibble
}

function convertDecimalToBinary(number) {
    let binary = ''
    let counter = 0

    while (number > 0) {
        binary += `${number % 2}`
        number = Math.trunc(number / 2)

        counter++
    }
    
    // preenche com zeros para completar 8 bits (1 byte)
    while (binary.length <= 8) {
        binary += '0'
    }

    // inverte a string do numero em binario
    binary = invertString(binary)

    return binary
}

function invertString(string) {
    let new_string = ''
    let counter = string.length - 1

    while (counter >= 0) {
        new_string += string[counter]

        counter--
    }

    // usei for e depois percebi que a lista é de while

    /* for (let i = string.length - 1; i >= 0; i--) {
        new_string += string[i]
    } */

    return new_string
}

main()
