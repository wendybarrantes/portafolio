let camponombre = document.getElementById('nombre')
let campocorreo = document.getElementById('correo')
let campoprofesion = document.getElementById('profesion')
let campotelefono = document.getElementById('telefono')
let campoedad = document.getElementById('edad')
let campodescripcion = document.getElementById('descripcion')
let botonregistrar = document.getElementById('boton')

let datosdelportafolio = JSON.parse(localStorage.getItem('portafolio')) || []

// Se crean las variables para los campos de texto
function registrardatos() {
    let datosregistro = {
        nombre: camponombre.value,
        correo: campocorreo.value,
        profesion: campoprofesion.value,
        telefono: campotelefono.value,
        edad: campoedad.value,
        descripcion: campodescripcion.value
    }
    datosdelportafolio.push(datosregistro)
    localStorage.setItem('portafolio', JSON.stringify(datosdelportafolio))
    alert("Datos registrados correctamente")
    window.location.href = './portafolio.html'
}

botonregistrar.addEventListener('click', function(){
    registrardatos()
})
// Se crea el evento para el botón de registrar