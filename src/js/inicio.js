let campousuario = document.getElementById('usuario')
let campoclave = document.getElementById('contrasena')
let botoniniciar = document.getElementById('boton')

let listadeusuarios = JSON.parse(localStorage.getItem('usuarios')) || []

function validardatos() {
    // Se crea la función para validar los datos
    for (let index = 0; index < listadeusuarios.length; index++) {
        if(campousuario.value == listadeusuarios[index].usuario && campoclave.value == listadeusuarios[index].contrasena){
            alert("Inicio de sesión correcto")
            window.location.href = './formulario.html'
            return
        }
    }
    alert("Incorrectos")
}

botoniniciar.addEventListener('click', function(){
    validardatos()
})
// Se crea el evento para el botón de iniciar sesión