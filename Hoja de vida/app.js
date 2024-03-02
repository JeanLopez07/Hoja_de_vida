const hola = "hola desde la consola";
console.log(hola);

console.log(1, 2, 3, 4);
let obj = {nombre: "jean",profesion:"estudiante"}
console.log(obj)

// muestra algun error
console.error("upss!");

// limpiar consola
console.clear();

// enviar advertencias
console.warn("eso no se puede");

// monitoreo del tiempo que tarda algo en ejecutarse

console.time('hola'); console.warn("eso no se puede");console.warn("ponga cuidado");
console.warn("eso no se puede");
console.timeEnd('hola');

// variables con var

var producto = 'celular'; // inicializamos una variable con un valor;

producto = 'computador';

console.log(producto);

// booleanos

var disponible;
disponible = true;// si coloco falso no va a funcionar como booleano

// inicializar multiples variables

var categoria = 'computadores';
    marca = 'lenovo';
    calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);

// tamaño de variables y constantes

const producto1 = 'monitor 20 pulgadas';
const precio = '30 USD';

console.log(producto1.log); // conocer la extesion de una cadena

// indexof
console.log(producto1.indexOf("pulgadas")); 
console.log(producto1.indexOf('tablet'));

// includes
console.log(producto1.includes('Monitor')); // conocer si existe
console.log(producto1.includes('monitor'));

// otras formas de concatenar
console.log(producto1 + precio);
console.log(producto1 + 'con un precio de' + precio);
console.log("El producto" + producto1 + "tiene un precio de" + precio);
console.log("El producto" , producto1, "tiene un precio de" + precio);

console.log(`El producto ${producto1} tiene un precio de ${precio}`);

console.log(producto1);
console.log(producto1.length);

// eliminar el inicio

console.log(producto1.trimStart()); //elimina todos los espacios en blanco del inicio
console.log(producto1.trimEnd()); // elimina todos los espacios en blanco del final

// quita el inicio y quita el final de una vez

console.log(producto1.trimStart().trimEnd()); // cortar en ambas dirreciones

// trim hace lo mismo
console.log(producto1.trim().length);

// replace
console.log(producto1.replace("20","24"));
console.log(producto1.replace('pulgadas','"'));

// slice te va a permitir extraer una parte de una cadena
console.log(producto1.slice(0,14)); // iniciar en 0 y cortar hasta 10
console.log(producto1.slice(8)); //

// Substring
const str = 'Producto';

console.log(str.substring(1, 3));

console.log(str.substring(2));

// ChartA
var cualquierCadena = "producto";

console.log("El carácter en el índice 0 es '" + cualquierCadena.charAt(0) + "'",);

// split
var a ='prodcuto de limpieza'; 
console.log(a.split(" "));

// tolowercase
const saludo ='hola';
console.log(saludo.toLowerCase());
// touppercase
console.log(saludo.toUpperCase());

// operadores

const numero1=20;
const numero2="20";
const numero3= 30;

// operador mayor a

console.log (numero1>numero3);
console.log (numero3>numero1);

// operador menor que

console.log (numero3<numero1);

// revisar si son iguales o diferentes

console.log (numero1==numero3);
console.log (numero1==numero2);

// typeof

console.log (typeof numero1);
console.log (typeof numero2);

// operador estricto (revisa valor y tipo de datos)

console.log (numero1==numero2);

// diferente

console.log (numero1 != numero3);
console.log (numero1 != numero2);
console.log (numero1 !== numero2);

// veamos un ejemplos

let numero;
console.clear();

console.log(numero);
console.log(typeof numero);

// 

let numero4 = null;
console.log(numero4);
console.log(typeof numero4);

console.log (numero==numero4);

console.log(numero==numero4);

// el tipo de dato booleano solo se puede tener 2 valores

const boolean1= true;
const boolean2= false;

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean2);

// comparar

console.log(boolean1===boolean2);

console.log(boolean1===true);
console.log(boolean2===true);

if(boolean1===true) {
    console.log('si es true')
}else{
    console.log('no,no es true')
}

console.log(boolean1 ? 'si es true':'no, no es true');

// crear un objeto

let productoo = {
    nombre: "computador",
    precio: 30,
    peso: "1kg",
    color: "negro",
    disponible:true,

    // informacion: {
    //     peso: '1kg',   
    // },
    mostrarInfo: function(){
        return `el producto: ${this.nombre} tiene un precio de ${this.precio}`;
    }, 
    descuento: function(){
        return `el producto: ${this.nombre} tiene descuento`;
    }, 
    peso1: function(){
        return `el producto: ${this.nombre} tiene un peso de ${this.peso}`;
    },
    color1: function(){
        return `el producto: ${this.nombre} viene solo en color ${this.color}`;
    },

 
}

console.log(productoo);

Object.freeze(productoo);

// console.log(object.issealed(productoo));
console.log(productoo.mostrarInfo());
console.log(productoo.descuento());
console.log(productoo.peso1());
console.log(productoo.color1());

// Funcion keys
let objeto1 = {
    a: 'cadena',
    b: 42,
    c: false,
  };
  
console.log(Object.keys(objeto1));
console.log(Object.values(objeto1));
console.log(Object.entries(objeto1));

// como crear un arreglo

const numeros = [10,20,30,40,50];
console.log(numeros);


const meses = new Array ('Enero', 'Febrero', 'Marzo');
console.log(meses);

const deTodo= ["Hola", 10, true, "si", null, {nombre: 'Juan', trabajo: 'Programador'}, [1,2,3,4], 2.5];
console.log(deTodo);

// Forma en la que accedemos a un arreglol
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[20]);

// operaciones utiles en los arreglos

const meses2 = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
meses[0]='nuevo mes'
meses[12]='ultimo mes'
console.log(meses2.length);

for (let i = 0; i < meses2.length; i++){
    console.log(meses2[i])
}

console.log(meses2);

// creamos un carrito

const carrito = [];

// añadimos un elemento al carrito

const producto6 = {
    nombre: 'monitor 20 pulgadas',
    precio: 500
}

const producto7 = {
    nombre: 'celular',
    precio: 500
}

const producto8= {
    nombre: 'telefono',
    precio: 500
}

carrito.push(producto6);
carrito.push(producto7);

let resultado = [... carrito,producto6];
    resultado = [... resultado,producto7];

resultado = [producto8,...resultado];


console.log(resultado);
console.log(carrito);

// metodos de arreglos

const carrito2 = [
    {nombre: "Monitor 32 Pulgadas", precio: 400},
    {nombre: "Celular", precio: 500},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Teclado", precio: 50},

];


for (let i = 0; i < carrito2.length; i++) {
    console.log("Articulo: " + carrito2[i].nombre + " Precio: " + carrito2[i].precio);
}

carrito2.forEach(function(producto) {
    console.log("Articulo: " + producto.nombre + " Precio: " + producto.precio);
} );

// alert('hubo un error...');

// prompt('cual es tu edad?');

// parseInt('edad');


//  funcion saludar

function saludar(nombre, apellido){
    console.log(`hola ${nombre} ${apellido}`);
}
saludar('Juan','Becerra');
saludar('jean', 'junior');

// ejemplo mas avanzado

let total = 0;
function agregarcarrito(precio) {
    return total += precio;
}

function calcularimpuesto(total) {
    return 1.15 * 15;
}

total = agregarcarrito(200);
total = agregarcarrito(300);
total = agregarcarrito(400);
console.log(precio);
console.log(total);