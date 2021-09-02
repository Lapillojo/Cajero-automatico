let btnLogin = document.getElementById("btn-login");
let btnIngresar = document.getElementById("btn-ingresar");
let seccionLogin = document.getElementById("seccionLogin");
let seccionPrincipal = document.getElementById("seccionPrincipal");
let seccionIngresarMonto = document.getElementById("seccionIngresarMonto");
let imgBanco = document.getElementById("img-banco");
let imgDinero = document.getElementById("img-dinero");
let pInfo = document.getElementById("p-info");
let pBienvenido = document.getElementById("p-bienvenido");
//Ocultando sección principal
seccionPrincipal.hidden = true;
seccionIngresarMonto.hidden = true;
imgDinero.hidden = true;
pBienvenido.hidden = true;
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
let usuarioActual;
function login(correo, password) {
  let flagAlert = true;
  let alert = document.getElementById("liveAlert");
  for (let i = 0; i < usuarios.length; i++) {
    let tmpUsuario = usuarios[i];
    //Esta es la validacio para ver si si existe el usuario
    if (
      correo.toLowerCase() === tmpUsuario.usuario.toLowerCase() &&
      password === tmpUsuario.pass
    ) {
      flagAlert = false;
      //Oculto la sección de login (el formulario)
      seccionLogin.hidden = true;
      imgBanco.hidden = true;
      pInfo.hidden = true;
      //Muestro la sección principal (los botones)
      seccionPrincipal.hidden = false;
      imgDinero.hidden = false;
      pBienvenido.hidden = false;
      usuarioActual = tmpUsuario;
      console.log(usuarioActual);
      break;
    }
  }

  if (flagAlert == true) {
    alert.classList.add("alert-danger");
    alert.textContent = "ERROR! Revisa tu usuario y/o contraseña, por favor";
  }
}
function ingresar(ingreso) {
  if (usuarioActual.saldo + ingreso > 990) {
    alert("Por favor, ingresa una cantidad menor. Tu saldo no puede ser mayor a 900.");
  } else {
    //usuarioActual.saldo+=ingreso
    usuarioActual.saldo = usuarioActual.saldo + ingreso;
    let pSaldoIngresado = document.getElementById("p-saldo-ingresado");
    let pNuevoSaldo = document.getElementById("p-nuevo-saldo");
    pSaldoIngresado.innerText = "El saldo ingresado es de " + ingreso + " $";
    pNuevoSaldo.innerText = "Tu nuevo saldo es de " + usuarioActual.saldo + " $";
    /*
    nuevoSaldo = ingreso + usuarioActual.saldo
    usuarioActual.saldo = nuevoSaldo*/
  }
}
//Detecto el click en el botón

btnLogin.addEventListener("click", function () {
  //Obtengo valores de usuario y contraseña
  let usuario = document.getElementById("txt-user").value;
  let password = document.getElementById("txt-pass").value;
  console.log("Click en el botón");
  //Se ejecuta la función login
  //Adentro de la función login es donde oculto/muestro secciones
  login(usuario, password);
});

// PARA INGRESAR MONTO
btnIngresar.addEventListener("click", function () {
  seccionIngresarMonto.hidden = false;
});

let btnAceptarIngreso = document.getElementById("btn-aceptar-ingreso");
btnAceptarIngreso.addEventListener("click", function () {
  let ingreso = parseInt(document.getElementById("input-ingreso").value);
  ingresar(ingreso);
});


    
