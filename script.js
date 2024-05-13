let num1input = document.getElementById("num1");
let num2input = document.getElementById("num2");
let somar = document.getElementById("addButton");
let resultSpan = document.getElementById("result");
let subtrair = document.getElementById("subtractButton");
let multiplicar = document.getElementById("multiplyButton");
let dividir = document.getElementById("divideButton");

function add(){
    let num1 = parseFloat(num1input.value);
    let num2 = parseFloat(num2input.value);
    if(!isNaN(num1) && !isNaN(num2)){
        let result = num1 + num2;
        resultSpan.textContent = result;
    }
    else {
        resultSpan.textContent = "Entradas inválidas";
    }
}
addButton.addEventListener("click", add);

function subtrai(){
    let num1 = parseFloat(num1input.value);
    let num2 = parseFloat(num2input.value);
    if(!isNaN(num1) && !isNaN(num2)){
        let result = num1 - num2;
        resultSpan.textContent = result;
    }
    else {
        resultSpan.textContent = "Entradas inválidas";
    }
}
subtractButton.addEventListener("click", subtrai);

function multiplica(){
    let num1 = parseFloat(num1input.value);
    let num2 = parseFloat(num2input.value);
    if(!isNaN(num1) && !isNaN(num2)){
        let result = num1 * num2;
        resultSpan.textContent = result;
    }
    else {
        resultSpan.textContent = "Entradas inválidas";
    }
}
multiplyButton.addEventListener("click", multiplica);
function divide(){
    let num1 = parseFloat(num1input.value);
    let num2 = parseFloat(num2input.value);
    if(!isNaN(num1) && !isNaN(num2)){
        let result = num1 / num2;
        resultSpan.textContent = result;
    }
    else {
        resultSpan.textContent = "Entradas inválidas";
    }
}
divideButton.addEventListener("click", divide);