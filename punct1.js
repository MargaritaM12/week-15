let op;
function func() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    document
        .getElementById("result")
        .innerHTML = result;
}
case '/' : try {
    result = num1 / num2;
} catch (ArithmeticException e) {
    System
        .out
        .println('division by zero');
    let message = 'На ноль делить нельзя!';
    alert(message);
}