var usuariotxt = document.getElementById("usuariotxt");
var contenidoDiv = document.getElementById("contenido");
function login(){
contenidoDiv.innerHTML = "";
var parrafo = document.createElement("p");
parrafo.innerHTML = "login " + usuariotxt.value;
contenidoDiv.appendChild(parrafo);
}
function registro(){
    contenidoDiv.innerHTML = "registro correcto ";
    var span = document.createElement("span");
    span.innerHTML = usuariotxt.value;
    contenidoDiv.append(span);
}