function aumentarCantidad(id) {
    var input = document.getElementById(id);
    var cantidad = parseInt(input.value);
    cantidad++;
    input.value = cantidad;
  }
  
  function disminuirCantidad(id) {
    var input = document.getElementById(id);
    var cantidad = parseInt(input.value);
    if (cantidad > 0) {
      cantidad--;
      input.value = cantidad;
    }
  }