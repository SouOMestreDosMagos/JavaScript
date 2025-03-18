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
var num1 = -1;
var num2 = -1;
var ope = 0;
var troca = 0;

function n0(){
    let resultado = document.getElementById("resultado");
    if (troca == 1){
        num2 = 0;
        resultado.textContent = num2;
    }else{
        num1 = 0;
        resultado.textContent = num1;
    }
}
function n1(){
    let resultado = document.getElementById("resultado");
    if (troca == 1){
        num2 = 1;
        resultado.textContent = num2;

    }else{
        num1 = 1;
        resultado.textContent = num1;
    }
}
function n2(){
    let resultado = document.getElementById("resultado");
    if (troca == 1){
        num2 = 2;
        resultado.textContent = num2;
    }else{
        num1 = 2;
        resultado.textContent = num1;
    }
}
function n3(){
    let resultado = document.getElementById("resultado");
    if (troca == 1){
        num2 = 3;
        resultado.textContent = num2;
    }else{
        num1 = 3;
        resultado.textContent = num1;
    }
}
function n4(){
    let resultado = document.getElementById("resultado");
    if (troca == 1){
        num2 = 4;
        resultado.textContent = num2;
    }else{
        num1 = 4;
        resultado.textContent = num1;
    }
}
function n5(){
    let resultado = document.getElementById("resultado");
    if (troca == 1){
        num2 = 5;
        resultado.textContent = num2;
    }else{
        num1 = 5;
        resultado.textContent = num1;
    }
}
function n6(){
    let resultado = document.getElementById("resultado");
    if (troca == 1){
        num2 = 6;
        resultado.textContent = num2;
    }else{
        num1 = 6;
        resultado.textContent = num1;
    }
}
function n7(){
    let resultado = document.getElementById("resultado");
    if (troca == 1){
        num2 = 7;
        resultado.textContent = num2;
    }else{
        num1 = 7;
        resultado.textContent = num1;
    }
}
function n8(){
    let resultado = document.getElementById("resultado");
    if (troca == 1){
        num2 = 8;
        resultado.textContent = num2;
    }else{
        num1 = 8;
        resultado.textContent = num1;
    }
}
function n9(){
    let resultado = document.getElementById("resultado");
    if (troca == 1){
        num2 = 9;
        resultado.textContent = num2;
    }else{
        num1 = 9;
        resultado.textContent = num1;
    }
}
function adicao(){
    let resultado = document.getElementById("resultado");
    if (num1 == -1){
        resultado.textContent = "adicione um numero primeiro";
    }else{
        ope = 1;
        resultado.textContent = "adição";
        troca = 1;
    }
}
function subtracao(){
    let resultado = document.getElementById("resultado");
    if (num1 == -1){
        resultado.textContent = "adicione um numero primeiro";
    }else{
        ope = 2;
        resultado.textContent = "subtração";
        troca = 1;
    }
}
function multiplicacao(){
    let resultado = document.getElementById("resultado");
    if (num1 == -1){
        resultado.textContent = "adicione um numero primeiro";
    }else{
        ope = 3;
        resultado.textContent = "multiplicação";
        troca = 1;
    }
}
function divisao(){
    let resultado = document.getElementById("resultado");
    if (num1 == -1){
        resultado.textContent = "adicione um numero primeiro";
    }else{
        ope = 4;
        resultado.textContent = "divisão";
        troca = 1;
    }
}
function resolver(){
    let resultado = document.getElementById("resultado");
    if (num2 == -1){
        resultado.textContent = "adicione um segundo numero";
    }else{
        if (ope == 1){
            resultado.textContent = (num1 + num2);
            num1 = -1;
            num2 = -1;
            ope = 0;
            troca = 0;
        }else if(ope == 2){
            resultado.textContent = (num1 - num2);
            num1 = -1;
            num2 = -1;
            ope = 0;
            troca = 0;
        }else if(ope == 3){
            resultado.textContent = (num1 * num2);
            num1 = -1;
            num2 = -1;
            ope = 0;
            troca = 0;
        }else if(ope == 4){
            resultado.textContent = (num1 / num2);
            num1 = -1;
            num2 = -1;
            ope = 0;
            troca = 0;
        }  
    }
}