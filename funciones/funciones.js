// Función que muestra información adicional sobre el circuito en la pagina de circuito.html
function mostrarInformacion() {
    alert("El Circuito de Mónaco es uno de los circuitos urbanos más conocidos de la Fórmula 1.");
}


// Función que cambia el texto y permite volver al anterior de historia.html
function cambiarTexto() {

    let p = document.getElementById("textoHistoria");

    if (p.innerHTML === "Pulsa el botón para conocer un dato sobre la historia del Gran Premio de Mónaco.") {
        
        p.innerHTML =
            "En el primer Gran Premio de Mónaco, celebrado en 1929, las posiciones de salida se decidieron mediante un sorteo, ya que no hubo una sesión de clasificación como las actuales.";
    } else {
        p.innerHTML =
            "Pulsa el botón para conocer un dato sobre la historia del Gran Premio de Mónaco.";
    }
}


// Función que pregunta al usuario si quiere visitar la web oficial de Fórmula 1 en index.html
function visitarFormula1() {

    let respuesta = confirm("¿Quieres visitar la página oficial de Fórmula 1?");

    if (respuesta) {
        window.location.href = "https://www.formula1.com/";
    }
}
