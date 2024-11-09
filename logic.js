let num1;
let num2;
let op;

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