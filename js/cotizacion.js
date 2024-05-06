document.getElementById('calcularResultado').addEventListener('click', function() {
    calcularCotizacion();
});
document.getElementById('calcularLimpiar').addEventListener('click', function() {
    calcularLimpiar();
});

function calcularCotizacion() {
    var descripcion = document.getElementById('descripcion').value;
    var precio = parseFloat(document.getElementById('precio').value);
    var porcentajeInicial = parseFloat(document.getElementById('porcentajeInicial').value);
    var plazo = parseInt(document.getElementById('plazoOpcion').value);

    
    var pagoInicial = precio * (porcentajeInicial / 100);

   
    var totalFinanciar = precio - pagoInicial;

   
    var pagoMensual = totalFinanciar / plazo;

    
    document.getElementById('idDescripcion').value = descripcion;
    document.getElementById('idPrecio').value = "$" + precio.toFixed(2);
    document.getElementById('pagoInicial').value = "$" + pagoInicial.toFixed(2);
    document.getElementById('plazo').value = plazo + " Meses";
    document.getElementById('pagoFinanciar').value = "$" + totalFinanciar.toFixed(2);
    document.getElementById('pagoMensual').value = "$" + pagoMensual.toFixed(2);
}

function calcularLimpiar() {
    document.getElementById('descripcion').value = "";
    document.getElementById('precio').value = "";
    document.getElementById('porcentajeInicial').value = "";
    document.getElementById('plazoOpcion').selectedIndex = 0;
    document.getElementById('idDescripcion').value = "";
    document.getElementById('idPrecio').value = "";
    document.getElementById('pagoInicial').value = "";
    document.getElementById('plazo').value = "";
    document.getElementById('pagoFinanciar').value = "";
    document.getElementById('pagoMensual').value = "";
}