let num1;
let num2;
let op;
let flagOne = true;


const display = document.querySelector('.calcs');
const add = (n1, n2) => {
    return n1 + n2;
}

const subtract = (n1, n2) => {
    return n1 - n2;
}

const multiply = (n1, n2) => {
    return n1 * n2;
}

const divide = (n1, n2) => {
    return n1 / n2;
}

const operate = (oper, n1, n2) => {
    if (oper === "+") return add(n1, n2);
    else if (oper === "-") return subtract(n1, n2);
    else if (oper === "*") return multiply(n1, n2);
    else if (oper === "/") return divide(n1, n2);
}

const appendVal = (val) => {
    display.textContent = display.textContent + val;
}
const clearDisplay = () => {
    display.textContent = '';
}

const calculate = () => {
    let res = operate(op, num1, num2);
    display.textContent = eval(display.textContent);
}