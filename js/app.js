const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');

btnLimpiar.addEventListener('click', function limpiar(){
document.getElementById('altura').value='';
document.getElementById('peso').value='';
document.getElementById('resultado').value='';

});


btnCalcular.addEventListener('click', function calcular(){

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let imc = peso/(altura*altura);
    document.getElementById('resultado').value = imc.toFixed(1);
}
);

//Práctica 2

const btnCalcularp2 = document.getElementById("btnCalcularp2");
const btnLimpiarp2 = document.getElementById("btnLimpiarp2");

btnCalcularp2.addEventListener('click', function calcular(){
const opcion = document.getElementById('idOpcion').value;
const idNumero1 = document.getElementById('idNumero1').value;
const idNumero2 = document.getElementById('idNumero2').value;
const txtres = document.getElementById('idResultado');

let res=0;
let num1=parseInt(idNumero1);
let num2=parseInt(idNumero2);
let opc=parseInt(opcion);

switch(opc){
    case 1: res= num1+num2; break;
    case 2: res= num1-num2; break;
    case 3: res= num1*num2; break;
    case 4: res= num1/num2; break;
}

txtres.value = res;

});

btnLimpiarp2.addEventListener('click', function limpiarp2(){
    document.getElementById('idOpcion').value='1';
    document.getElementById('idNumero1').value='';
    document.getElementById('idNumero2').value='';
    document.getElementById('idResultado').value='';
    });