// Challenge 1:

// const hello = () => {
//     console.log("Hello Code Nation")
// }

// const helloAgain = (fn) => {
//     for (let i = 0; i < 5; i++) {
//         console.log(fn())
//     }
// }

// helloAgain(hello)

// Challenge 2: 

// const bigNum = (num1, num2) => {
//     let result = num1 + num2
//     return result
// }

// const biggerNum = (fn, num3, num4) => {
//     let num99 = 0
    
//     for (let i = 0; i < 5; i++) {
        
//             num99 += fn(num3, num4)
//             console.log(num99)
//             }
//     return num99
            
// }

// console.log(biggerNum(bigNum, 2, 4))

// Challenge 3:

// let arr = [1, 2, 3, 4, 5]
// const newArr = arr.map(function(num) {
//     return num * 2
//   })
// console.log(newArr)

// Challenge 4: 

const multiply = (a,b) => {
    return a*b
}

const add = (a,b) => {
    return a + b
}

const divide = (a,b) => {
    return a/b
}

const subtract = (a,b) => {
    return a-b
}

const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2)
    }
}

let myReturnedFunction = doMath(5)
console.log(myReturnedFunction(3, multiply))
console.log(myReturnedFunction(3, add))
console.log(myReturnedFunction(3, divide))
console.log(myReturnedFunction(3, subtract))