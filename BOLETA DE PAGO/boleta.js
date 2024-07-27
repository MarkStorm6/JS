window.addEventListener("DOMContentLoaded", function() {
    // Aquí va tu código para obtener los elementos y agregar los eventos
    document.getElementById("generar").addEventListener("click", function() {
      var trabajador = document.getElementById("trabajador").value;
      var area = document.getElementById("area").value;
      var planta = document.getElementById("planta").value;
      var horas = document.getElementById("horas").value;
      var dias = document.getElementById("dias").value;
      
      var sueldo = 1300; // Sueldo inicial
      var tasaHorasExtras = 6.25; // Tasa de pago por horas extras
      var tasaDiasNoTrabajados = 50; // Tasa de descuento por días no trabajados
      var afp = 0.016; // Tasa de descuento AFP (1.60%)
      var seguro = 0.09; //Descuento del Seguro
      
      if (dias == 0) {
        sueldo += 120; // Bonificación de 120 soles
      }
      
      var sueldoHorasExtras = horas * tasaHorasExtras; // Sueldo por horas extras
      var sueldoDiasNoTrabajados = dias * tasaDiasNoTrabajados; // Descuento por días no trabajados
      var descuentoAFP = sueldo * afp; // Descuento AFP
      var descuentoSeguro = sueldo * seguro;
      
      sueldo += sueldoHorasExtras; // Aumento del sueldo por horas extras
      sueldo -= sueldoDiasNoTrabajados; // Descuento del sueldo por días no trabajados
      sueldo -= descuentoAFP - descuentoSeguro; // Descuento del sueldo por AFP y Seguro

      var sueldoFormateado = sueldo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Formatear el sueldo
      

      // Obtener la fecha actual
      var fecha = new Date();
      var dia = fecha.getDate();
      var mes = fecha.getMonth()+1;
      var año = fecha.getFullYear();
      var fechaFormateada = dia + "/" + mes + "/" + año;

      var boletaText = document.getElementById("boleta-text");
      boletaText.innerHTML = `
        <div class="boleta">
    <div class="boleta-header">
      <p><i class="fa-solid fa-helmet-safety"></i> H E R M E S</p>
      <h2>BOLETA DE PAGO</h2>
    </div>
    <div class="boleta-info">
      <div class="boleta-datos">
        <strong>DATOS DEL TRABAJADOR</strong>
        <p><strong>Trabajador:</strong> ${trabajador}</p>
        <p><strong>Área:</strong> ${area}</p>
        <p><strong>Planta:</strong> ${planta}</p>
      </div>
      <div class="boleta-detalle">
        <strong>DETALLES DEL PAGO</strong>
        <p><strong>Fecha:</strong> ${fechaFormateada}</p>
        <p><strong>Horas Extras:</strong> ${horas} horas</p>
        <p><strong>Días no trabajados:</strong> ${dias} días</p>
      </div>
    </div>
    <div class="boleta-descuentos">
      <strong>DESCUENTOS</strong>
      <p><strong>Seguro:</strong> S/. 117</p>
      <p><strong>AFP:</strong> S/. 20.8</p>
      <p>-------------------------------</p>
      <strong>Neto a Pagar:</strong> ${sueldoFormateado} soles
    </div>
  </div>
      `;
    });
  
    document.getElementById("borrar").addEventListener("click", function() {
      document.getElementById("trabajador").value = "";
      document.getElementById("area").value = "";
      document.getElementById("planta").value = "";
      document.getElementById("horas").value = "";
      document.getElementById("dias").value = "";
      document.getElementById("boleta-text").innerHTML = "";
    });
  });


  