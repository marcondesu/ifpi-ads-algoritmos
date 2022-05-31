import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Resolver Sistemas de Equações Lineares -------\n")

    print("ax + by = c\ndx + ey = f\n")
    print("Onde:\nx = (ce - bf) / (ae - bd)\ny = (af - cd) / (ae - bd)\n")

    const a = Number(input("a: "))
    const b = Number(input("b: "))
    const c = Number(input("c: "))
    const d = Number(input("d: "))
    const e = Number(input("e: "))
    const f = Number(input("f: "))

    const x = (c*e - b*f) / (a*e - b*d)
    const y = (a*f - c*d) / (a*e - b*d)
    print(x, y)

    print(`\nx = ${x}\ny = ${y}`)
}

main()
