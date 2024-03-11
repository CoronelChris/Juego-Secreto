let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt (document.getElementById(`valorUsuario`).value);

    console.log (intentos);
  
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p",`Acertaste el Número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El Usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
asignarTextoElemento ("p", "El Número Secreto es Menor");
    } else {
       (numeroDeUsuario < numeroDeUsuario);
        asignarTextoElemento ("p","El Número Secreto es Mayor")
    }
    intentos++;
    limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
    
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ("p","Ya se sortearon todos los números posibles");
    } else {
        //si el número genrado está en una lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales (){
    asignarTextoElemento("h1", "Bienvenido al Juego del Número secreto");
    asignarTextoElemento("p",`ingresa un Número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
//limpiar la caja
limpiarCaja();
//Indicar el mensaje de intervalo de números
condicionesIniciales();
// Generar el número aleatorio
//Inicializar el número de intentos 
// Des habilitar el boton de nuevo juego
document.querySelector("#reiniciar").setAttribute("disabled","true");

}

condicionesIniciales();