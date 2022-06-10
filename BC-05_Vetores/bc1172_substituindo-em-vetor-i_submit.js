let input = require('fs').readFileSync('/dev/stdin', 'utf-8')
let lines = input.split('\n').map(Number)

function main() {    
    let vector_x = fillVector(lines)
    vector_x = replaceCharacter(vector_x, 0, 1)
    vector_x = replaceNegativeNumber(vector_x, 1)

    for (let i = 0; i < vector_x.length; i++) {
        console.log(`X[${i}] = ${vector_x[i]}`)
    }
}


function replaceNegativeNumber(vector, new_charac) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] < 0) {
            vector[i] = new_charac
        }
    }
    
    return vector
}

function replaceCharacter(vector, charac, new_charac) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === charac) {
            vector[i] = new_charac
        }
    }

    return vector
}

function fillVector(lines) {
    const vector = new Array(10)

    for (let i = 0; i < lines.length; i++) {
        vector[i] = lines[i]
    }

    return vector
}

main()
