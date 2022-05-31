import {print, input} from '../../../../io_utils.js'

function main() {
    print("------- Decidir se um aluno está aprovado ou reprovado -------\n")

    // entrada
    const nota1 = Number(input("1º nota: "))
    const nota2 = Number(input("2º nota: "))

    const media = calcMedia(nota1, nota2)

    // saída
    if (media >= 7) {
    	print(`Aprovado`)
    } else {
    	print("Reprovado\n")

    	const nota_exame_final = Number(input("Nota do exame final: "))
    	const media_exame_final = calcExameFinal(media, nota_exame_final)

    	if (media_exame_final >= 5) {
    		print(`Aprovado`)
    	} else {
    		print(`Reprovado`)
    	}
    }
    
}

// processamento
function calcMedia(n1, n2) {
    return (n1 + n2) / 2
}

function calcExameFinal(media, examefinal) {
	return (media + examefinal) / 2
}

main()
