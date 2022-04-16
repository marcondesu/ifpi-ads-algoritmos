import {input, print} from '../../io_utils.js'

// função
function hello_world(texto) {
    print(`${texto}`)
}

function main() {
    // saída
    const txt = input("Texto a ser imprimido: ")
    hello_world(`\n${txt}`)
}

main()