import {print, input} from '../io_utils.js'

function main() {
  console.clear()
    print('\n------- Ordenar 3 valores em ordem decrescente -------\n')
    print('Os valores deverão ser digitados no formato "12 645 4"\n')

    const [value_1, value_2, value_3] = input('Valores: ').split(' ').map(Number)

    const ordem = orderValues(value_1, value_2, value_3)

    print(`${ordem[0]}\n${ordem[1]}\n${ordem[2]}\n\n${value_1}\n${value_2}\n${value_3}`)
}

function orderValues(v1, v2, v3) {
    if (v1 < v2 && v2 < v3) {
        return [v1, v2, v3]

    } else if (v1 < v3 && v3 < v2) {
      return [v1, v3, v2]

    } else if (v2 < v1 && v1 < v3) {
      return [v2, v3, v1]

    } else if (v2 < v3 && v3 < v1) {
      return [v2, v3, v1]

    } else if (v3 < v2 && v2 < v1) {
      return [v3, v2, v1]

    } else {
      return [v3, v1, v2]

    }
}

/*
  v1, v2, v3 #
  v1, v3, v2 #
  v2, v1, v3 #
  v2, v3, v1 #
  v3, v2, v1
  v3, v1, v2
*/

main()
