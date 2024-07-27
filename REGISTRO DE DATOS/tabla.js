const agregarBtn = document.getElementById('agregar');
const nombresInput = document.getElementById('nombres');
const telefonoInput = document.getElementById('telefono');
const operadorDropdown = document.getElementById('operador');
const dniInput = document.getElementById('dni');
const ubicacionInput = document.getElementById('ubicacion');
const distritoDropdown = document.getElementById('distrito');
const ciudadaniaDropdown = document.getElementById('ciudadania');
const tabla = document.querySelector('tbody');

let indice = 1; // Variable para el índice, osea cuando al agrega un valor automaticamente se agrega el numero indice.

// Función manejadora del evento click del botón "Agregar"
const agregarClickHandler = function() {
  // Obtener el valor del campo "Nombres"
  const nombres = nombresInput.value;
  const telefono = telefonoInput.value;
  const dni = dniInput.value;
  const operador = operadorDropdown.value;
  const ubicacion = ubicacionInput.value;
  const distrito = distritoDropdown.value;
  const ciudadania = ciudadaniaDropdown.value;




// Función para crear y mostrar el modal cuando los campos no sean completados--------------------------------
const mostrarModal = function() {
    // Crear el div del modal
    const modal = document.createElement('div');
    modal.classList.add('modal', 'mi-modal');
    modal.tabIndex = '-1';
    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Advertencia</h5>
            <button type="button" class="btn-cl" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="modal-body">
            <p>Por favor, llene todos los campos.</p>
          </div>
        </div>
      </div>
    `;
  
    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal);
  
    // Mostrar el modal
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  };

  // Verificar si todos los campos están llenos o seleccionados
  if (nombres === '' || telefono === '' || dni === '' || operador === '' || ubicacion === '' || distrito === '' || ciudadania === '') {
    // Mostrar el modal si algún campo está vacío
    mostrarModal();
    return; // Salir de la función si hay campos vacíos
  }
//-----------------------------------------------------------------------------------------------------------------------------




  // Crear una nueva fila en la tabla con el índice y el nombre
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${indice}</td>
    <td>${nombres}</td>
    <td>${telefono}</td>
    <td>${operador}</td>
    <td>${dni}</td>
    <td>${ubicacion}</td>
    <td>${distrito}</td>
    <td>${ciudadania}</td>
    <td><button type="button" class="btn btn-danger borrar-dato"><i class="fa-solid fa-trash"></i></button></td>
      
  `;



  // Agregar la nueva fila a la tabla-----------------------------------
  tabla.appendChild(fila);


  // Agregar evento de clic al botón "borrar-dato" de la fila
  const botonBorrarDato = fila.querySelector(".borrar-dato");
  botonBorrarDato.addEventListener("click", function () {
    // Eliminar la fila correspondiente
    fila.remove();
  });
  //--------------------------------------------------------------------




  // Incrementar el índice-----------------------------------------------
  indice++;
  //---------------------------------------------------------------------

  // Limpiar el valor del campo "Nombres"--------------------------------
  nombresInput.value = '';
  telefonoInput.value = '';
  operadorDropdown.value = '';
  dniInput.value = '';
  ubicacionInput.value = '';
  distritoDropdown.value = '';
  ciudadaniaDropdown.value = '';
//------------------------------------------------------------------------
};


//Boton agregar datos a la tabla.
// Asignar la función manejadora del evento click al botón "Agregar"
agregarBtn.addEventListener('click', agregarClickHandler);

// Función manejadora del evento click del botón "borrar-dato"
const borrarDatoClickHandler = function () {
  // Obtener la fila correspondiente al botón "borrar-dato" que se hizo clic
  const fila = this.closest("tr");

  // Eliminar la fila correspondiente
  fila.remove();
};

// Obtener todos los botones "borrar-dato"
const botonesBorrarDato = document.querySelectorAll(".borrar-dato");

// Agregar evento de clic a cada botón "borrar-dato"
botonesBorrarDato.forEach((boton) => {
  boton.addEventListener("click", borrarDatoClickHandler);
});



//Boton Borrar toda la tabla----------------------------------------------
const borrarBtn = document.getElementById('borrar');

// Función manejadora del evento click del botón "Borrar"
const borrarClickHandler = function() {
  // Eliminar todas las filas de la tabla
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }
};

// Asignar la función manejadora del evento click al botón "Borrar"
borrarBtn.addEventListener('click', borrarClickHandler);









