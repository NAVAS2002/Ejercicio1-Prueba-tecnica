const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");

async function cargarUsuario() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const usuario = data.results[0];

        nombre.textContent = `${usuario.name.first} ${usuario.name.last}`;
        correo.textContent = usuario.email;
        telefono.textContent = usuario.phone;
        direccion.textContent = `${usuario.location.street.number} ${usuario.location.street.name}, ${usuario.location.city}, ${usuario.location.state}, ${usuario.location.country}`;
    }   catch (error) {
        console.error("Error al cargar el usuario:", error);
    }
}

cargarUsuario();
        