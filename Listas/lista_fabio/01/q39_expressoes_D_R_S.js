import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Calcular D = (R+S) / 2 ### R = (A+B)² ### S = (B+C)² -------\n")

    const a = Number(input("Valor de A: "))
    const b = Number(input("Valor de B: "))
    const c = Number(input("Valor de C: "))

    const r = (a+b) * (a+b)
    const s = (b+c) * (b+c)

    const d = (r + s) / 2
    
    print(`\nO valor de D é: ${d}`)
}

main()