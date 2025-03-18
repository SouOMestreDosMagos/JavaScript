function parimpar() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let resto = n1 % 2;
    if (resto == 0){
        document.getElementById("resultado").textContent = "par";
    } else{
        document.getElementById("resultado").textContent = "impar";
    }
}
function media(){
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);
    let n4 = parseFloat(document.getElementById("nota4").value);
    let medeia = (n1 + n2 + n3 + n4) / 4;
    document.getElementById("resultado").textContent = "Resultado: " + medeia;
}
function converter(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let conversao =  (n1*9/5) + 32;
    document.getElementById("resultado").textContent = "Fahrenheit: " + conversao;
}
function imc(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let formula = n1 / (n2 * n2);
    document.getElementById("resultado").textContent = "IMC: " + formula;
}
function idade(){
    let nome = document.getElementById("nome").value;
    let n1 = parseFloat(document.getElementById("num1").value);
    let faxa = "bebê"
    if (n1 >= 5){
        faxa = "criança"
    }
    if (n1>=10){
        faxa = "adolescente"
    }
    if (n1>=20){
        faxa = "adulto"
    }
    if (n1>=60){
        faxa = "idoso"
    }
    document.getElementById("resultado").textContent = nome + " é " + faxa;
}
function mostrarDia() {
    let dia = document.getElementById("dia").value;
    let resultado = document.getElementById("resultado");
    if (dia == 1) {
        resultado.textContent = "Domingo";
    } else if (dia == 2) {
        resultado.textContent = "Segunda-feira";
    } else if (dia == 3) {
        resultado.textContent = "Terça-feira";
    } else if (dia == 4) {
        resultado.textContent = "Quarta-feira";
    } else if (dia == 5) {
        resultado.textContent = "Quinta-feira";
    } else if (dia == 6) {
        resultado.textContent = "Sexta-feira";
    } else if (dia == 7) {
        resultado.textContent = "Sábado";
    } else {
        resultado.textContent = "Dia inválido!";
    }
}
function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch {
        display.value = "Erro";
    }
}