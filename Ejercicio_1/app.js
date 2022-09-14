"use strict"
import {suma,resta,multiplicacion,division} from "./operaciones.js";

let num1;
let num2;
num1 = parseFloat(prompt('Introduzca un número: '));
num2 = parseFloat(prompt('Introduzca otro número: '));

alert(`El resultado de su suma es: ${suma(num1,num2)}`);
alert(`El resultado de su resta es: ${resta(num1,num2)}`);
alert(`El resultado de su multiplicación es: ${multiplicacion(num1,num2)}`);
alert(`El resultado de su división es: ${division(num1,num2)}`)
//alert(`El resultado de su resta es: ${num1} - ${num2} = ${resta(num1,num2)}`);

//console.log(suma(num1, num2));
//$ ``{}Interpolar