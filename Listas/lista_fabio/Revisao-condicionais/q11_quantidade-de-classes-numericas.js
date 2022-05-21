import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('------- Calcular quantidade de classes numéricas -------\n')

    const number = getNumberUnder1000('Número: ')
    const classes = enumerationTypes(number)
    const class_counter = classCounter(classes)
    
    console.clear()
    console.log(printDecision(class_counter, number, classes))
}

function enumerationTypes(number) {
    const hundred = Math.trunc(number / 100)
    const dezena = Math.trunc((number - hundred*100) / 10)
    const unity = Math.trunc(number - hundred*100 - dezena*10)
    
    return [hundred, dezena, unity]
}

function classCounter(classes) {
    /*
        [X] 0 0 0 - X
        [0] 0 0 1 - unidade
        [1] 0 1 0 - dezena
        [2] 0 1 1 - dezena, unidade
        [3] 1 0 0 - centena
        [4] 1 0 1 - centena, unidade
        [5] 1 1 0 - centena, dezena
        [6] 1 1 1 - centena, dezena, unidade
    */

    const hundred = classes[0]
    const dezena = classes[1]
    const unity = classes[2]

    if (hundred === 0) {
        if (dezena === 0 && unity > 1) {
            return 0
        } else if (dezena > 1 && unity === 0) {
            return 1
        } else {
            return 2
        }
    } else {
        if (dezena === 0 && unity === 0) {
            return 3
        } else if (dezena === 0 && unity > 1) {
            return 4
        } else if (dezena > 1 && unity === 0) {
            return 5
        } else {
            return 6
        }
    }
}

function printDecision(class_counter, number, classes) {
    if (class_counter === 0) {
        if (classes[2] === 1) {
            return (`\n[${class_counter}] ${number} - ${classes[2]} unidade.`)
        } else {
            return (`\n[${class_counter}] ${number} - ${classes[2]} unidades.`)
        }
    } else if (class_counter === 1) {
        if (classes[1] === 1) {
            return (`\n[${class_counter}] ${number} - ${classes[1]} dezena.`)
        } else {
            return (`\n[${class_counter}] ${number} - ${classes[1]} dezenas.`)
        }
    } else if (class_counter === 2) {
        if (classes[1] === 1 && classes[2] === 1) {
            return (`\n[${class_counter}] ${number} - ${classes[1]} dezena e ${classes[2]} unidade.`)
        } else if (classes[1] === 1 && classes[2] > 1) {
            return (`\n[${class_counter}] ${number} - ${classes[1]} dezena e ${classes[2]} unidades.`)
        } else if (classes[1] > 1 && classes[2] === 0) {
            return (`\n[${class_counter}] ${number} - ${classes[1]} dezenas e ${classes[2]} unidade.`)
        } else {
            return (`\n[${class_counter}] ${number} - ${classes[1]} dezenas e ${classes[2]} unidades.`)
        }
    } else if (class_counter === 3) {
        if (classes[0] === 1) {
            return (`\n[${class_counter}] ${number} - ${classes[0]} centena.`)
        } else {
            return (`\n[${class_counter}] ${number} - ${classes[0]} centenas.`)
        }
    } else if (class_counter === 4) {
        if (classes[0] === 1 && classes[2] === 1) {
            return (`\n[${class_counter}] ${number} - ${classes[0]} centena e ${classes[2]} unidade.`)
        } else if (classes[0] === 1 && classes[2] > 1) {
            return (`\n[${class_counter}] ${number} - ${classes[0]} centena e ${classes[2]} unidades.`)
        } else if (classes[0] > 1 && classes[2] === 0) {
            return (`\n[${class_counter}] ${number} - ${classes[0]} centenas e ${classes[2]} unidade.`)
        } else {
            return (`\n[${class_counter}] ${number} - ${classes[0]} centenas e ${classes[2]} unidades.`)
        }
    } else if (class_counter === 5) {
        if (classes[0] === 1 && classes[1] === 1) {
            return (`\n[${class_counter}] ${number} - ${classes[0]} centena e ${classes[1]} dezena.`)
        } else if (classes[0] === 1 && classes[1] > 1) {
            return (`\n[${class_counter}] ${number} - ${classes[0]} centena e ${classes[1]} dezenas.`)
        } else if (classes[0] > 1 && classes[1] === 0) {
            return (`\n[${class_counter}] ${number} - ${classes[0]} centenas e ${classes[1]} dezena.`)
        } else {
            return (`\n[${class_counter}] ${number} - ${classes[0]} centenas e ${classes[1]} dezenas.`)
        }
    } else {
        if (classes[0] === 1) {
            if (classes[1] === 1 && classes[2] === 0) {
                return (`[${class_counter}] ${number} - ${classes[0]} centena, ${classes[1]} dezena e ${classes[2]} unidade.`)
            } else if (classes[1] === 1 && classes[2] > 1) {
                return (`[${class_counter}] ${number} - ${classes[0]} centena, ${classes[1]} dezena e ${classes[2]} unidades.`)
            } else if (classes[1] > 1 && classes[2] === 1) {
                return (`[${class_counter}] ${number} - ${classes[0]} centena, ${classes[1]} dezenas e ${classes[2]} unidade.`)
            } else {
                return (`[${class_counter}] ${number} - ${classes[0]} centena, ${classes[1]} dezenas e ${classes[2]} unidades.`)
            }
        } else {
            if (classes[1] === 1 && classes[2] === 0) {
                return (`[${class_counter}] ${number} - ${classes[0]} centenas, ${classes[1]} dezena e ${classes[2]} unidade.`)
            } else if (classes[1] === 1 && classes[2] > 1) {
                return (`[${class_counter}] ${number} - ${classes[0]} centenas, ${classes[1]} dezena e ${classes[2]} unidades.`)
            } else if (classes[1] > 1 && classes[2] === 1) {
                return (`[${class_counter}] ${number} - ${classes[0]} centenas, ${classes[1]} dezenas e ${classes[2]} unidade.`)
            } else {
                return (`[${class_counter}] ${number} - ${classes[0]} centenas, ${classes[1]} dezenas e ${classes[2]} unidades.`)
            }
        }
    }
}

/*
        [X] 0 0 0 - X
        [0] 0 0 1 - unidade
        [1] 0 1 0 - dezena
        [2] 0 1 1 - dezena, unidade
        [3] 1 0 0 - centena
        [4] 1 0 1 - centena, unidade
        [5] 1 1 0 - centena, dezena
        [6] 1 1 1 - centena, dezena, unidade
            . 0 0 0 - centena, dezena e unidade
            . 0 0 1 - centena, dezena e unidades
            . 0 1 0 - centena, dezenas e unidade
            . 0 1 1 - centena, dezenas e unidades
            . 1 0 0 - centenas, dezena e unidade
            . 1 0 1 - centenas, dezena e unidades
            . 1 1 0 - centenas, dezenas e unidade
            . 1 1 1 - centenas, dezenas e unidades
    */

function getNumberUnder1000(msg) {
    const number = Number(input(msg))

    if (isNaN(number)) {
        console.log('[X] Erro! Digite um número.\n')

        return getNumberUnder1000(msg)
    } else if (number < 0 || number >= 1000) {
        console.log('[X] Erro! O número deve estar entre 0 e 1000\n')

        return getNumberUnder1000(msg)
    }

    return number
}

main()
