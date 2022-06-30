function main() {
    console.clear()
    console.log('------- N termos de uma sequência -------\n')
    console.log('S = 1/1 + 3/2 + 5/3 + ... + 99/50\n')

    let count_up = 1
    let sum = 0
    let counter = 1

    while (counter <= 50) {
        sum += counter / count_up

        count_up += 2

        counter++
    }

    console.log(`${sum.toFixed(2)}`)
}

main()
