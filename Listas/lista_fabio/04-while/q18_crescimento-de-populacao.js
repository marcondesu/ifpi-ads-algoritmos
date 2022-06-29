function main() {
    console.clear()
    console.log('------- Crescimento de população -------\n')

    let populacao_a = 200000
    let populacao_b = 800000
    let counter = 0

    while (populacao_b > populacao_a) {
        populacao_a += (populacao_a / 100) * 3.5
        populacao_b += (populacao_b / 100) * 1.35

        counter++
    }

    console.log(`É necessário ${counter} anos para que a população da cidade A ultrapasse a da cidade B`)
}

main()
