//QUE FUNCIONE CUANDO EL PORCENTAJE ES MODIFICADO
//HACER UN NAVBAR PERZONALIDAO CON NOMBRE, POSIBLEMNETE METER DOCUMENTOS
/* Nombre en NAVBAR */
let nombreCompleto;
let usuarioEnLS = localStorage.getItem("nombre")
console.log(usuarioEnLS);

// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS) {
  let a = document.getElementById("nombreCompleto")
  a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
  class="bi bi-person-circle" viewBox="0 0 18 18">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
  <path fill-rule="evenodd"
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1">
  </path>
</svg> ${usuarioEnLS}`
} else {
  document.location.href = "./saludo.html"
}

/* SACAR DATOS */
let container = document.getElementById("contenedor")
const precioTotal = parseFloat(0)
const porcentaje = parseFloat(0)
const anticipo = parseFloat(0)
const cuota = parseInt(0)
const valorFinal = precioTotal - anticipo
let totalFinal = 0


/* Funcion de Calculadora */
function myFunction() {
  let container = document.getElementById("contenedor")
  const precioTotal = parseFloat(document.getElementById("precioTotal").value)
  const porcentaje = parseInt(document.getElementById("porcentaje").value)
  const anticipo = parseFloat(document.getElementById("anticipo").value)
  const cuota = parseInt(document.getElementById("cuotas").value)
  const valorFinal = precioTotal - anticipo
  let totalFinal = 0
  /* PASAR AL HTML */
  // cambio el código HTML interno
  container.innerHTML = `<table class="table table-striped">
    <thead class="table-dark">
      <tr>
        <th scope="col">N° Cuotas</th>
        <th scope="col">Saldo a Financiar</th>
        <th scope="col">Anticipo</th>
        <th scope="col">Precio de Cuota</th>
      </tr>
    </thead>
    <tbody class="table-dark">
      <tr>
        <th scope="row">${cuota}</th>
        <td id="a"></td>
        <td id="tablaAnticipo">$${new Intl.NumberFormat().format(anticipo)}</td>
        <th id="total"></th>
      </tr>
    </tbody>
    </table>`

  /* SELECCION DE ANTICIPO */
  if (!anticipo) {
    /* -----------Con Porcentaje------------- */
    let conPor = (precioTotal * porcentaje) / 100
    console.log(conPor);
    parseInt(document.getElementById("anticipo").value = conPor)
    /* Enviar al HTML */
    console.log(precioTotal);
    /* HTML Anticipo */
    const element = document.getElementById("tablaAnticipo");
    element.innerHTML = "$" + conPor;
    /* HTML Saldo a Financiar */
    const resultado = precioTotal - conPor
    const a = document.getElementById("a");
    a.innerHTML = "$" + resultado.toFixed(2);
    /* CUOTAS */
    if (cuota === 3) {

      const total = parseFloat(resultado) * 0.4151
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    if (cuota === 6) {

      const total = parseFloat(resultado) * 0.2413
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    if (cuota === 9) {

      const total = parseFloat(resultado) * 0.1852
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    if (cuota === 12) {

      const total = parseFloat(resultado) * 0.1584
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    if (cuota === 14) {

      const total = parseFloat(resultado) * 0.1474
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    if (cuota === 18) {

      const total = parseFloat(resultado) * 0.1340
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    console.log(resultado);
  } else {
    /* ---------Sin Porcentaje------------- */
    const sacPor = (anticipo * 100) / precioTotal
    parseInt(document.getElementById("porcentaje").value = sacPor.toFixed(1))
    const resultado = new Intl.NumberFormat().format(precioTotal - anticipo)
    const a = document.getElementById("a");
    a.innerHTML = "$" + resultado;
    /* CUOTAS */
    if (cuota === 3) {

      const total = parseFloat(valorFinal) * 0.4151
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    if (cuota === 6) {

      const total = parseFloat(valorFinal) * 0.2413
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    if (cuota === 9) {

      const total = parseFloat(valorFinal) * 0.1852
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    if (cuota === 12) {

      const total = parseFloat(valorFinal) * 0.1584
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    if (cuota === 14) {

      const total = parseFloat(valorFinal) * 0.1474
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }
    if (cuota === 18) {

      const total = parseFloat(valorFinal) * 0.1340
      totalFinal = total.toFixed(2);
      const valorTransformado = new Intl.NumberFormat().format(totalFinal)
      /* HTML */
      const element = document.getElementById("total");
      element.innerHTML = "$" + valorTransformado;
    }

  }
}

/* Validaciones del Inputs */
function validacion() {
  const precioTotal = parseFloat(document.getElementById("precioTotal").value)
  const anticipo = parseFloat(document.getElementById("anticipo").value)
  const cuota = parseInt(document.getElementById("cuotas").value)


  if (!precioTotal) {
    // Si no se cumple la condicion...
    Toastify({
      text: "Ingresar el valor total de la venta (sin punto y coma)",
      duration: 1800,
      gravity: 'top',
      position: 'right',
      className: 'notificacion my-toast',
      style: {
        background: "linear-gradient(to right, #DA0000,	#FF0000)",
      }
    }).showToast();

    return false;
  }
  /* else if (!anticipo) {
       Toastify({
         text: "Debe ingresar el Anticipo correctamente",
         duration: 1800,
         gravity: 'top',
         position: 'right',
         className: 'notificacion my-toast',
         style: {
           background: "linear-gradient(to right, #DA0000,	#FF0000)",
         }
       }).showToast(); */
  // Si no se cumple la condicion...
  /* return false; 
}*/
  else if (!cuota) {
    Toastify({
      text: "Debe ingresar 3, 6, 9, 12, 14 o 18",
      duration: 1800,
      gravity: 'top',
      position: 'right',
      className: 'notificacion my-toast',
      style: {
        background: "linear-gradient(to right, #DA0000,	#FF0000)",
      }
    }).showToast();
    // Si no se cumple la condicion...
    return false;
  }

  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  return myFunction();
}

/* Notificaciones de errores */
function limpiarTabla() {
  container.innerHTML = null;
  parseFloat(document.getElementById("precioTotal").value = null);
  parseFloat(document.getElementById("anticipo").value = null);
  parseInt(document.getElementById("cuotas").value = null);
  parseInt(document.getElementById("porcentaje").value = null)

  /* NOTIFICACION */
  Toastify({
    text: "Datos eliminados",
    duration: 1000,
    gravity: 'top',
    position: 'right',
    className: 'notificacion my-toast',
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
}

function limpiarUsuario() {
  localStorage.clear();
  document.location.href = "./saludo.html"
}
