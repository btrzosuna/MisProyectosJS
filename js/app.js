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