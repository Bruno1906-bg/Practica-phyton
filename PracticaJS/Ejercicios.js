function Suma(a,b) {
    return a + b;
}
console.log("-----------------------");
console.log("Ejercicio funciones");
console.log("-----------------------");
console.log(Suma(10,5));

function areatriangulo(b,h){
    return (b * h)/2
}
console.log("El area  del triangulo es de: ", areatriangulo(20,10), "cm cuadrados.")

function areacuadrado(l1,l2){
    return (l1 * l2)
}
console.log("El  area del cuadrado es de ", areacuadrado(10,10), "cm cuadrados.")

let lista = [1, 2, 3, 4, 5];
console.log("-----------------------");
console.log("Ejercicio ciclos")
console.log("-----------------------");
for (elemento of lista){
    let sumas = Suma(elemento,1);
    console.log(sumas)
}

let lista2 = [1, 2, 3, 4, 5];

console.log("-----------------------------------------------");
console.log("Ejercicios de programacion orientada a objetos");
console.log("-----------------------------------------------");
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentate(){
        console.log('Hola me llamo ' + this.nombre + ' y tengo ' + this.edad);
    }
}

let Persona1 = new Persona('Juan', 18);

Persona1.presentate()