/* HTML SALUDO */

document.getElementById("nombreCompleto").addEventListener("click", guardarNombre);

function guardarNombre() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value

    console.log(nombre);
    console.log(apellido);
    localStorage.setItem('nombre', nombre + " " + apellido);
    document.location.href = "./index.html"
}