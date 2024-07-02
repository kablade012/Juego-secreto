let NumeroSecreto = 0;
let Intentos = 0;
let ListaNumeroSorteados = [];
let NumeroMaximo = 10 ;


function VerificarIntento(){ 
    let IntentoUsurario = parseInt(document.getElementById('IngresoIntento').value) ;
    console.log(NumeroSecreto);
    if(NumeroSecreto === IntentoUsurario){
        AsignarTextoElemento('p' ,`Acertaste en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else{
        if(NumeroSecreto > IntentoUsurario){
            AsignarTextoElemento('p' ,'numero secreto es mayor.');
        }
        else {
            AsignarTextoElemento('p' ,'numero secreto es menor.');
        }   
    }
    Intentos++;
    VaciaCaja();
    
    return;
    
}
function VaciaCaja(){
    document.getElementById('IngresoIntento').value ='';

}

function AsignarTextoElemento(elemento , texto ){
    let ElementoHTml = document.querySelector(elemento);
    ElementoHTml.innerHTML = texto;
    return;
}
function GenerarUnNumeroSecreto(){
    let NumeroGenerado =  Math.floor(Math.random() * NumeroMaximo) +1;
    if(ListaNumeroSorteados.length==NumeroMaximo){
        AsignarTextoElemento('p','No quedan numeros sorteables')
    }
    else{
    if(ListaNumeroSorteados.includes(NumeroGenerado)){
        return GenerarUnNumeroSecreto();
    } 
    else{
        ListaNumeroSorteados.push(NumeroGenerado);
        return NumeroGenerado;
    }
    }
}


function condicionesIniciales(){
    NumeroSecreto = GenerarUnNumeroSecreto();
    Intentos = 1;
    AsignarTextoElemento('h1' , 'Juego del numero secreto.');
    AsignarTextoElemento('p', `Digite un numero del 1 al ${NumeroMaximo}.`);
}

function ReiniciarJuego(){
    VaciaCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();



// banco de pruebas 



//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function NumerosCuadrados (Lista){
    let i = 0;
    let ListaCuadrada = []; 
    while(i < Lista.length){
     ListaCuadrada.push(Lista [i]* Lista[i]);
     i++
    }
    return ListaCuadrada;
}


let Lista = [2,4,5,6];
let cuadrado = NumerosCuadrados(Lista);
console.log(cuadrado);