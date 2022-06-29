function main() {
    const binary = '01101111-01101001-00100000-01110010-01110011'

    if (isCorrupted(binary)) {
        console.log('Mensagem corrompida: Sequência de bits inválida')
    } else {
        console.log('sequência de Bits OK')
    }
}

function isCorrupted(message) {
    message = message.split('-')
    
    let current_octate = ''
    let counter = 0

    while (counter < message.length) {
        current_octate = message[counter]
        
        // verificar se a mensagem está no intervalo dos valores permitidos
        if (isntInRange(current_octate)) {
            // retorna true caso a mensagem não estiver no intervalo (corrompida)
            return true
        }

        counter++
    }
}

/*
letras: 97 - 122
números: 48 - 57
espaço: 32
*/

function isntInRange(octate) {
    const converted_octate = convertBinaryToDecimal(octate)
    console.log(converted_octate)

    if (converted_octate >= 97 && converted_octate <= 122) {
        return false
    
    } else if (converted_octate >= 48 && converted_octate <= 57) {
        return false

    } else if (converted_octate === 32) {
        return false
    }
    
    return true
}

function convertBinaryToDecimal(octate) {
    let counter = 0
    let expoente = 7
    let decimal = 0
    
    while (counter < octate.length) {
        if (octate[counter] == 1) {
            decimal += 2**expoente
        }

        expoente--
        counter++
    }

    return decimal
}

main()
