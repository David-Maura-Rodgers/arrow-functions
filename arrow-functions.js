/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code Block
    return a + b;
}

let sum0 = addTwoNumbers(2, 3);
console.log(sum0)


// Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => {
    // Code Block
    return a + b;
}

let sum1 = addTwoNumbers1(3, 5);
console.log(sum1);


// Single Line Arrow Function With Parameters
// ------------------------------------------ const addTwoNumbers2 = (a, b) => (a + b); - Can also use brackets for return
const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHello = () => console.log('Hello Sir!');
sayHello();


// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
        One
        Two
    </p>`
)

console.log(returnMultipleLines());
