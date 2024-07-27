var registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

// Validar el inicio de sesión
function starsesion() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar si el usuario está registrado
    var userFound = registeredUsers.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (userFound) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "home.htm";
        // Aca puedes agregarle el link de una pagina x.
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, intenta de nuevo.");
    }
}

// Registrar un nuevo usuario
function register() {
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;

    // Verificar si el usuario ya está registrado
    var userExists = registeredUsers.find(function(user) {
        return user.username === newUsername;
    });

    if (userExists) {
        alert("Este usuario ya existe. Por favor, ingresa otro nombre de usuario.");
    } else {
        // Agregar el nuevo usuario al array de usuarios registrados
        registeredUsers.push({ username: newUsername, password: newPassword });

        // Guardar la matriz actualizada en el almacenamiento local
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

        alert("Registro exitoso. Ahora puedes iniciar sesión con tu nuevo usuario.");
        window.location.href = "index.htm";
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordToggle = document.querySelector(".password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordInput.type = "password";
        passwordToggle.innerHTML = '<i class="fas fa-eye"></i>';
    }
}