//para comentarios en js se usa //
console.log("Hola aguante casla"); //imprime en la consola de la pagina     

//variables
let texto = "esto es una variable"; //let es para declarar una variable en la consola


console.log(texto);

//variable numerica
let numUno = 123; 
let numDos = 456; 
let numTres = 0;

//variable booleana
let booleanoTrue = true;
let booleanoFalse = false;



let nulo = null; //nulo es para declarar una variable que no tiene valor
console.log(numUno + texto); //suma de variables numericas

numTres = numUno + texto;

console.log(typeof texto); //imprime el tipo de dato de la variable
console.log(typeof numUno); //imprime el tipo de dato de la variable
console.log(typeof numTres); //imprime el tipo de dato de la variable
console.log(typeof booleanoTrue); //imprime el tipo de dato de la variable
console.log(typeof booleanoFalse); //imprime el tipo de dato de la variable
console.log(typeof nulo); //imprime el tipo de dato de la variable LO TOMA COMO UN OBJETO VACIO     

//OBJETOS
let persona = {
    nombre: "Lauti", //propiedad o atributo tipicas de un objeto . siempre que sea texto se escribe entre comillas
    edad: 22,  
    ciudad: "San Antonio de Padua",
};     
console.log(persona); //muestra el objeto completo

console.log(persona.nombre); //mostrar una propiedad del objeto 
console.log(persona.edad); //mostrar una propiedad del objeto
console.log(persona.ciudad); //mostrar una propiedad del objeto

persona.nombre = "Juan"; //cambiar el valor de una propiedad del objeto 
persona.edad = 23; //cambiar el valor de una propiedad del objeto   

console.log(persona); //muestra el objeto completo

//arreglos
let primos = [2, 3, 5, 7, 11];  

console.log(primos[4]); //muestra el arreglo completo


