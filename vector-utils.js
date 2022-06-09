import prompt from 'prompt-sync'
const input = prompt()

export function getVectorWithNElements(msg, number_of_elements) {
    console.log(`\n- ${msg}`)
    const vector = new Array(number_of_elements)

    for (let i = 0; i < number_of_elements; i++) {
        vector[i] = input(`  . Valor ${i + 1}: `)
    }

    return vector
}
