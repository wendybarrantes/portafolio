let nombreportafolio = document.getElementById('nombremostrar')
let  correoportafolio = document.getElementById('correomostrar')
let profesionportafolio = document.getElementById('profesionmostrar')
let telefonoportafolio = document.getElementById('telefonomostrar')
let edadportafolio = document.getElementById('edadmostrar')
let descripcionportafolio = document.getElementById('descripcionmostrar')
// Se crean las variables para los campos de texto

let datosdelportafolio = JSON.parse(localStorage.getItem('portafolio')) || []

function verdatos() {
    // Se crea la función para mostrar los datos
    for (let index = 0; index < datosdelportafolio.length; index++) {
        nombreportafolio.innerHTML = datosdelportafolio[index].nombre
        correoportafolio.innerHTML = datosdelportafolio[index].correo
        profesionportafolio.innerHTML = datosdelportafolio[index].profesion
        telefonoportafolio.innerHTML = datosdelportafolio[index].telefono
        edadportafolio.innerHTML = datosdelportafolio[index].edad
        descripcionportafolio.innerHTML = datosdelportafolio[index].descripcion
    }
}
verdatos() // Se llama a la función para que se ejecute al cargar la página