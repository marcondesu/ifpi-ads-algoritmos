def main():
    print("------- Cálculo de IMC -------\n")

    altura = float(input("Altura (metros): "))
    peso = float(input("Peso (kg): "))

    imc = peso // (altura*altura)

    if (imc < 25):
        print(f'\nIMC: {imc}\nPeso normal.')
    elif (imc >= 25 and imc <= 30):
        print(f'\nIMC: {imc}\nObeso.')
    else:
        print(f'\nIMC: {imc}\nObesidade mórbida.')

main()
