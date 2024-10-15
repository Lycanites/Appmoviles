// alert("Hola");

// //Funciones

// function hello() {
//   return
// }

// hello();
// hello();
// hello();
// hello();
// hello();

//Retorno de una funcion

function hello() {
  return "Hola Js";
}

const result = hello();

console.log(result);

//Tambien

function hello1() {
  return "Hola Js";
}

const result1 = hello1();
console.log(hello1);

//Tambien retorna numeros y objetos

function hellonum() {
  return 10;
}
const resultnum = hellonum();
console.log(resultnum);

//Objetos

function helloobj() {
  return {};
}
console.log(helloobj);

// Retorna el valor de un objeto

function hello() {
  return { nombre: "Andre" };
}

console.log(hello);

//Funcion que retorna a otra funcion

function hellofunc() {
  return function () {
    return "Hola Js";
  };
}
console.log(hellofunc()());

//Para ejecutar una funcion y que de el valor de la funcion y no lo que dice debemos poner un doble ()

//============USO DE PARAMETROS EN FUNCIONES================

/*
function helpconJS(name) {
  return "Hola" + name;
}

console.log("Andre");
console.log("Roman");
console.log("Fernando");
console.log("Michelle");


*/

//Pasar mas de un parametro a la funcion

/*
function helpconJs(x, y) {
  return x + y;
}

console.log(helpconJs(10, 20));
console.log(helpconJs(10, 0));
*/

/*
function helpconJs(x, y) {
  if (y == undefined) {
    y = 0;
  }
  return x + y;
}

console.log(helpconJs(10));
*/

//Menos codigo definiendolo desde la funcion

/*
function helpconJS(x, y = 0) {
  return x + y;
}
console.log(10);
*/

// =========Objetos========

const user = {
  nombre: "Andre",
  apellidos: "Hernandez Castañeda",
  edad: 17,
  estadocivil: "Separado",
  domicilio: {
    ciudad: "CDMX",
    calle: "Mar mediterraneo",
    numero: 5516845323,
  },
  amigos: ["Agustin", "Mario"],
  activo: false,
  sendMensaje: function () {
    return "enviando msj";
  },
};

alert(
  user.domicilio.ciudad +
    "   " +
    user.domicilio.calle +
    "     " +
    user.domicilio.numero
);
alert(user.activo);

console.log(user.activo);

alert(user.sendMensaje());
