/* <div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div> */

/* SACAR DATOS */
function myFunction() {

  const precioTotal = parseFloat(document.getElementById("precioTotal").value)
  const anticipo = parseFloat(document.getElementById("anticipo").value)
  const valorFinal = precioTotal - anticipo
  const cuota = parseInt(document.getElementById("cuotas").value)
  var totalFinal = 0

  /* HTML */
  // VALIDACION DE CUOTA

  /* PASAR AL HTML */
  let container = document.getElementById("contenedor")
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
        <td>$${new Intl.NumberFormat().format(valorFinal)}</td>
        <td>$${new Intl.NumberFormat().format(anticipo)}</td>
        <th id="total"></th>
      </tr>
    </tbody>
    </table>`

  /* BUSCAR VALOR DE LA CUOTA */
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

