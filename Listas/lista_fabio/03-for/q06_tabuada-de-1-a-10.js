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

    for (let i = 1; i <= 10; i++) {
        tabuada_1 += ` ${i * 1}`
        tabuada_2 += ` ${i * 2}`
        tabuada_3 += ` ${i * 3}`
        tabuada_4 += ` ${i * 4}`
        tabuada_5 += ` ${i * 5}`
        tabuada_6 += ` ${i * 6}`
        tabuada_7 += ` ${i * 7}`
        tabuada_8 += ` ${i * 8}`
        tabuada_9 += ` ${i * 9}`
        tabuada_10 += ` ${i * 10}`
    }

    console.log(`\n1 -${tabuada_1}\n2 -${tabuada_2}\n3 -${tabuada_3}`)
    console.log(`4 -${tabuada_4}\n5 -${tabuada_5}\n6 -${tabuada_6}`)
    console.log(`7 -${tabuada_7}\n8 -${tabuada_8}\n9 -${tabuada_9}`)
    console.log(`10 -${tabuada_10}`)
}

main()
