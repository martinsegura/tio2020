function validar() {
    let clases = ['nombreyapellido', 'asunto', 'correo', 'mensaje'];

    nombreyapellido = document.querySelectorAll(".form-input-nombre")[0].value;
    asunto = document.querySelectorAll(".form-input-asunto")[0].value;
    correo = document.querySelectorAll(".form-input-correo")[0].value;
    mensaje = document.querySelectorAll(".form-input-correo")[0].value;
    

    if (nombreyapellido === "") {
      
      alert("El campo nombre esta vacio.");
    }
    if (asunto === "") {
      
      alert("El campo asunto esta vacio.");
    }
    if (correo === "") {
      
      alert("El campo correo esta vacio.");
    }
    if (mensaje === "") {
      
      alert("El campo mensaje esta vacio.");
      return false;
    }

  }
























