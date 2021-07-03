//VARIABLES GLOBALES PARA LAS OPERACIONES 
let operandoa;
let operandob;
let operacion;

function init(){
    // ME TRAIGO LOS IDENTIFICADORES DE CADA BOTON
    let resultado = document.getElementById("resultado");
    let reset =  document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta =  document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division =  document.getElementById("division");
    let igual = document.getElementById("igual");
    let uno =  document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres =  document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco =  document.getElementById("cinco");
    let seis =  document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho =  document.getElementById("ocho");
    let nueve =  document.getElementById("nueve");
    let cero = document.getElementById("cero");
    let exp = document.getElementById("exp");
    let raiz = document.getElementById("raiz");
    let seno = document.getElementById("seno");
    let coseno = document.getElementById("coseno");
    let tangente = document.getElementById("tangente");
    let logaritmo = document.getElementById("logaritmo");
    let porcentaje = document.getElementById("porcentaje");
    let punto = document.getElementById("punto");
    let flecha = document.getElementById("flecha");
}

//Eventos click de click
uno.onclick = function(e){
    //EL TEXTO QUE SE VE ARRIBA DE LA CALCULADORA ES resultado.textContent
    resultado.textContent = resultado.textContent + "1";
}

dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}

punto.onclick = function(e){
    resultado.textContent = resultado.textContent + ".";
}

flecha.onclick = function(e){
    resultado.textContent = resultado.textContent.slice(0,-1);  
}

reset.onclick = function(e){
    resetear();
}

suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = '+';
    limpiar();
}

resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = '-';
    limpiar();
}

multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = '*';
    limpiar();
}

division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = '/';
    limpiar();
}

porcentaje.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "%";
    limpiar();
}

exp.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = '^';
    limpiar();

}

raiz.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "V";
    resolver();
}

seno.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "sin";
    resolver();
}

coseno.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "cos";
    resolver();
}

tangente.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "tan";
    resolver();

}

logaritmo.onclick =function(e){
    operandoa = resultado.textContent;
    operacion = "log";
    resolver();
}

igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}


//LIMPIAMOS LA PANTALLA DE LA CALCULADORA
function limpiar(){
    resultado.textContent = '';
}

//BORRAMOS  LA MEMORIA DE LA CALCULADORA
function resetear(){
    resultado.textContent="";
    operandoa = 0;
    operandob = 0;
    operacion = '';
}

function resolver(){
    let res = 0;
    // AQUI VA LA LOGICA DE LA OPERACION 
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "^":
            res = potencia(parseFloat(operandoa) , parseFloat(operandob));
            break;
        case "V":
            res = raizCuadrada(parseFloat(operandoa));
            break;
        case "sin":
            res = getSeno(parseFloat(operandoa));
            break;
        case "cos":
            res = getCoseno(parseFloat(operandoa));
            break;
        case "tan":
            res = getTangente(parseFloat(operandoa));
            break;
        case "log":
            res = getLogaritmo(parseFloat(operandoa));
            break;
        case "%":
            res = getPorcentaje(parseFloat(operandoa) , parseFloat(operandob));
            break; 



    } 
    resetear();
    resultado.textContent = res;
}


//Agregar la operacion de modulo devuelve el residuo
function modulo(numero, modulo){

}

//Elevar a una potencia devolver la potencia
function potencia(base, potencia){
    let resultado = 1;

    for (let i = 0; i < potencia; i++) {
        resultado =resultado* base;
        console.log(resultado);
    }
    console.log(resultado);
    return resultado;
}


function raizCuadrada(base) {
    return Math.sqrt(base);
    //hacer seno, coseno, tangente y logaritmo
}

function getSeno(base) {
    return Math.sin(base);
}

function getCoseno(base) {
    return Math.cos(base);
}

function getTangente(base) {
    return Math.tan(base);
}

function getLogaritmo(base) {
    return Math.log(base);
}

function getPorcentaje(base, percent) {
    return (percent * base) / 100;
}

