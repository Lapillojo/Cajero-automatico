let btnLogin = document.getElementById("btn-login");
let seccionLogin = document.getElementById("seccionLogin");

let seccionPrincipal = document.getElementById("seccionPrincipal");
let imgBanco = document.getElementById("img-banco");
let imgDinero = document.getElementById("img-dinero");
let pInfo = document.getElementById("p-info");
let pBienvenido = document.getElementById("p-bienvenido");

let btnSaldo = document.getElementById("btn-saldo");
let seccionIngresarMonto = document.getElementById("seccionIngresarMonto");
let btnIngresar = document.getElementById("btn-ingresar");
let btnAceptarIngreso = document.getElementById("btn-aceptar-ingreso");
let seccionRetirarMonto = document.getElementById("seccionRetirarMonto");
let btnRetirar = document.getElementById("btn-retirar");
let btnAceptarRetiro = document.getElementById("btn-aceptar-retiro");

let usuarioActual;

 //Ocultando sección principal
 seccionPrincipal.hidden = true;
 seccionIngresarMonto.hidden = true;
 imgDinero.hidden = true;
 pBienvenido.hidden = true;
 seccionRetirarMonto.hidden = true;

 var usuarios = [
   {
     usuario: "fiorella@hotmail.com",
     pass: "1234",
     saldo: 40,
   },
   {
     usuario: "luis@hotmail.com",
     pass: "1234",
     saldo: 100,
   },
   {
     usuario: "marisol@hotmail.com",
     pass: "1234",
     saldo: 200,
   },
 ];
 
 function login(correo, password) {
  let alert = document.getElementById("liveAlert");
  alert.hidden = true // Mensaje de error oculto al iniciar

  // Buscar usuario en el arreglo usuarios que tenga el mismo correo y contraseña
  const usuarioBuscado = usuarios.find(
    elemento => 
      elemento.usuario.toLowerCase() === correo.toLowerCase() && elemento.pass === password
  )
  
  // Si existe, se oculta el login y se muestra la sección principal
  if(usuarioBuscado) {    
    // Ocultar secciones del formulario de login
    seccionLogin.hidden = true;
    imgBanco.hidden = true;
    pInfo.hidden = true;

    // Mostrar la sección principal con los botones
    seccionPrincipal.hidden = false;
    imgDinero.hidden = false;
    pBienvenido.hidden = false;

    // Setear usuarioActual
    usuarioActual = usuarioBuscado;
  } else {
    // Si no existe, se muestra mensaje de error
    alert.hidden = false;
    alert.classList.add("alert-danger");
    alert.textContent = "ERROR! Revisa tu usuario y/o contraseña, por favor";
  }

}

// Ingresar monto
function ingresar(ingreso) {
  if (usuarioActual.saldo + ingreso > 990) {
    alert(
      "Por favor, ingresa una cantidad menor. Tu saldo no puede ser mayor a 990."
    );
  } else {
    usuarioActual.saldo = usuarioActual.saldo + ingreso;
    let pSaldoIngresado = document.getElementById("p-saldo-ingresado");
    let pNuevoSaldo = document.getElementById("p-nuevo-saldo-ingreso");
    pSaldoIngresado.innerText = `El saldo ingresado es de ${ingreso}$`;
    pNuevoSaldo.innerText = `Tu nuevo saldo es de ${usuarioActual.saldo}$`;
  }
}

// Retirar monto
function retirar(retiro) {
  if (usuarioActual.saldo - retiro < 0) {
    alert("No cuenta con saldo suficiente para esa operación.");
  } else {
    usuarioActual.saldo = usuarioActual.saldo - retiro;
    let pRetiroIngresado = document.getElementById("p-saldo-retirado");
    let pNuevoSaldo = document.getElementById("p-nuevo-saldo-retiro");
    pRetiroIngresado.innerText = `El retiro solicitado es ${retiro}$`;
    pNuevoSaldo.innerText = `Tu nuevo saldo es de ${usuarioActual.saldo}$`;
  }
}

// Loguea si el usuario y contraseña ingresados coinciden
btnLogin.addEventListener("click", function () {
  //Obtengo valores de usuario y contraseña
  let usuario = document.getElementById("txt-user").value;
  let password = document.getElementById("txt-pass").value;
  //Se ejecuta la función login
  //Adentro de la función login es donde oculto/muestro secciones
  login(usuario, password);
});

// Mostrar saldo actual
btnSaldo.addEventListener("click", function () {
  alert(`Tu saldo actual es de ${usuarioActual.saldo}` + "$");
});

// Oculta retirar monto y muestra ingresar monto
btnIngresar.addEventListener("click", function () {
  seccionRetirarMonto.hidden = true;
  seccionIngresarMonto.hidden = false;
});

// Obtiene el monto ingresado y suma
btnAceptarIngreso.addEventListener("click", function () {
  let ingreso = parseInt(document.getElementById("input-ingreso").value);
  ingresar(ingreso);
});

// Oculta ingresar monto y muestra retirar monto
btnRetirar.addEventListener("click", function () {
  seccionIngresarMonto.hidden = true;
  seccionRetirarMonto.hidden = false;
});

// Obtiene el monto ingresado y resta
btnAceptarRetiro.addEventListener("click", function() {
  let egreso = parseInt(document.getElementById("input-egreso").value);
  retirar(egreso);
});