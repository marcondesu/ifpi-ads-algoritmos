import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Temperatura de °C para °F -------\n")

    const celsius = Number(input("Temperatura em °C: "))
        
    const fahrenheit = (9*celsius + 160) / 5

    print(`\n${celsius}°C é o equivalente a ${fahrenheit.toFixed(1)}°F`)
}

main()