function main() {
    console.clear()
    console.log('------- Tabuada de 1 a 10 -------\n')

    let tabuada_1 = ``
    let tabuada_2 = ``
    let tabuada_3 = ``
    let tabuada_4 = ``
    let tabuada_5 = ``
    let tabuada_6 = ``
    let tabuada_7 = ``
    let tabuada_8 = ``
    let tabuada_9 = ``
    let tabuada_10 = ``

    let counter = 1

    while (counter <= 10) {
        tabuada_1 += ` ${counter * 1}`
        tabuada_2 += ` ${counter * 2}`
        tabuada_3 += ` ${counter * 3}`
        tabuada_4 += ` ${counter * 4}`
        tabuada_5 += ` ${counter * 5}`
        tabuada_6 += ` ${counter * 6}`
        tabuada_7 += ` ${counter * 7}`
        tabuada_8 += ` ${counter * 8}`
        tabuada_9 += ` ${counter * 9}`
        tabuada_10 += ` ${counter * 10}`

        counter++
    }

    console.log(`1 -${tabuada_1}\n2 -${tabuada_2}\n3 -${tabuada_3}`)
    console.log(`4 -${tabuada_4}\n5 -${tabuada_5}\n6 -${tabuada_6}`)
    console.log(`7 -${tabuada_7}\n8 -${tabuada_8}\n9 -${tabuada_9}`)
    console.log(`10 -${tabuada_10}`)
}

main()
