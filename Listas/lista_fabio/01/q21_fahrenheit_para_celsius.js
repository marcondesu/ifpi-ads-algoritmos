import {print, input} from '../../../io_utils.js'

function main() {
    print("------- Converter Temperatura de °F para °C -------\n")

    const fahrenheit = Number(input("Temperatura em °F: "))
        
    const celsius = (5*fahrenheit - 160) / 9

    print(`\n${fahrenheit}°F é o equivalente a ${celsius.toFixed(1)}°C`)
}

main()
