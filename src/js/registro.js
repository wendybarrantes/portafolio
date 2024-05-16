let campousuario = document.getElementById('usuario')
let campocorreo = document.getElementById('correo')
let campocontrasena = document.getElementById('contrasena')
let botonregistrar = document.getElementById('boton')

let listadeusuarios = JSON.parse(localStorage.getItem('usuarios')) || []

function registrarusuario() {
    // Se crea la función para registrar los datos
    let usuarioregistrar = {
        usuario: campousuario.value,
        correo: campocorreo.value,
        contrasena: campocontrasena.value
    }
    listadeusuarios.push(usuarioregistrar)
    localStorage.setItem('usuarios', JSON.stringify(listadeusuarios))
    alert("Usuario registrado correctamente")
    window.location.href = 'iniciodesesion.html'
}

botonregistrar.addEventListener('click', function(){
    registrarusuario()
})
// Se crea el evento para el botón de registrar