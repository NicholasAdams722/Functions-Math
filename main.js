//Instructions
//You won't be doing much, if any, math while in class, but basic math functions are simple to write, so you will be doing that in this exercise.

//The plus sign (+) is used to add numbers in JavaScript
//The asterisk (*) is used to multiply numbers in JavaScript
//You need to write two functions.

//A function to add two values together. This function needs to define two parameters - the two numbers that you want to add together.

//In the adding function, add the values of the two parameters and return the result

const addTwoNumbers(num1, num2)=> {
    const sumNumbers= (num1 + num2)

    return sumNumbers
}

//A function to multiply a single number by 2. This function takes one parameter - the number you want to multiply by 2.

//In the multiplication function, multiply the value of the single parameter by 2 and return the result.


const multiplyByTwo(num1)=> {
    const productNumbers= (num1 *2)

    return productNumbers

}

/*Running the Tasks
After the functions are defined, invoke them in the correct order.

Invoke the adding function, provide two values as arguments, and the store what gets returned into a variable.
Then invoke the multiplication function and provide the variable from the previous step as the argument. Store the result into a variable.
Use console.log() to output the end result of the multiplication function.
As an example, if you pass 4 and 14 to the first function, then the final output should be 36.
*/

const addTwoNumbers=(num1, num2)=> {
    const sumNumbers= (num1 + num2)

    return sumNumbers
}

const multiplyByTwo=(num1)=> {
    const productNumbers= (num1 *2)

    return productNumbers

}



const sum=addTwoNumbers(10,3)
const product=multiplyByTwo(sum)


console.log(product)
























