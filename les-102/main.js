function hello (name) {
    return `Hello ${name}`
}

console.log(hello('Denis'))



const numbers = [1, 2, 3, 11]

function check (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            return array[i]
        }
    }
    return `No numbers more 10`
}

console.log(check(numbers))



function calc (firstNumber, secondNumber, operation) {
    if (operation === 'plus') {
        return firstNumber + secondNumber
    } else if (operation === 'minus') {
        return firstNumber - secondNumber
    } else if (operation === 'multiply') {
        return firstNumber * secondNumber
    } else if (operation === 'divide') {
        return firstNumber / secondNumber
    }
}

const result = calc(2, 3, 'minus')
console.log(result)