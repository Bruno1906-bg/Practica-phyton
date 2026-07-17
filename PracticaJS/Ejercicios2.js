//EJERCICIOS CON SLICE LENGTH Y INDEXOFF
//PROBLEMA 1 
const fileName = "reporte.pdf";
// Tu tarea: Crea una variable llamada 'extension' 
// que extraiga los últimos 3 caracteres de fileName.
// Luego, imprime en consola: "La extensión es: .pdf" (usando template literals)

const extension = fileName.slice(7, 11);
console.log(extension);

//PROBLEMA 2
const username = "Juan!";
// Tu tarea: Crea una variable llamada 'cleanName' 
// usando .slice() para obtener todo el nombre excepto el último carácter.
// Imprime: "Hola, Juan" usando la variable 'cleanName'.

const cleanName = username.slice(0, 4);
console.log(`"Hola, ${cleanName}"`);

//PROBLEMA 3
const phrase = "Aprendiendo JavaScript es divertido";
// Tu tarea: 
// 1. Usa .slice() con un índice negativo para obtener "tido".
// 2. Guarda ese resultado en una variable llamada 'lastPart'.
// 3. Imprime en consola: "El final de la frase es: tido"

const lastPart = phrase.slice(-4);
console.log(`"El final de la frase es: ${lastPart}"`);

//PROBLEMA 4
const email = "usuario.ejemplo@correo.com";
// Tu tarea:
// 1. Encuentra la posición del carácter '@' usando .indexOf('@').
// 2. Usa esa posición como índice para .slice() y obtener solo la parte antes del @.
// 3. Imprime: "El usuario es: usuario.ejemplo"

const posicionarroba = email.indexOf("@");
console.log(`"El arroba se encuentra en la posicion numero ${posicionarroba}"`);

const prearroba = email.slice(0, 15);
console.log(`"El usuario es: ${prearroba}"`);

//PROBLEMA 5
const productCode = "102-Teclado-Electronica";
// Tu tarea:
// 1. Encuentra el primer guion '-' y el último guion '-'.
// 2. Usa .slice() para extraer solo "Teclado" basándote en las posiciones de los guiones.
//    (Pista: el índice de inicio será la posición del primer guion + 1).
// 3. Imprime: "El producto es: Teclado"
const product = productCode.indexOf("-")
const product2 = productCode.lastIndexOf("-");
console.log(product, product2);
const productName = productCode.slice(4, 11);
console.log(`"El producto es ${productName}"`);

//PROBLEMA  6
const secretCode = "AB-12345-XY";
// Tu tarea:
// 1. Usa la propiedad .length para saber cuánto mide la cadena.
// 2. Usa .slice() para eliminar los 3 primeros y los 3 últimos caracteres, 
//    dejando solo lo que está en el medio.
// 3. Imprime: "El código central es: 12345"
const codemedida = secretCode.length
console.log(codemedida);
const  codealone = secretCode.slice(3, 8);
console.log(`"El codigo ccentral es: ${codealone}`);

//PROBLEMAS CON UPPERCASE LOWCASE TRIM Y MAS
//PROBLEMA 7
const rawName = "  bruno  ";
// Tu tarea:
// 1. Elimina los espacios extra.
// 2. Convierte el nombre para que la primera letra sea mayúscula 
//    y el resto minúsculas (pista: usa .slice(0, 1) y .slice(1)).
// 3. Imprime: "Nombre formateado: Bruno"
const nombrelimpio = rawName.trim();
const primerletra = nombrelimpio.slice(0,1);
const letramayus = primerletra.toUpperCase();
const nombrelimpio2 = nombrelimpio.slice(1);
console.log(letramayus)
console.log(nombrelimpio2);
console.log(letramayus + nombrelimpio2)

//PROBLEMA 8
const message = "El resultado es secreto";
// Tu tarea:
// 1. Encuentra la palabra "secreto".
// 2. Crea una variable nueva que contenga el mensaje original, 
//    pero donde "secreto" esté transformado a "SECRETO" usando .toUpperCase().
//    (Puedes usar .slice para dividir el mensaje en partes).
// 3. Imprime: "El resultado es SECRETO"
const secreto = message.slice(16, 23)
const secretoMayus = secreto.toLocaleUpperCase();
console.log(`"El resultado es ${secretoMayus}"`);

//PROBLEMA 9
const rawInput = "java script";
// Tu tarea:
// 1. El objetivo es obtener "javaScript".
// 2. Divide la cadena en dos palabras usando la posición del espacio.
// 3. Convierte la primera letra de la segunda palabra a mayúscula.
// 4. Une la primera palabra con la segunda (ya modificada).
// 5. Imprime: "Usuario sugerido: javaScript"
const rawdividido1 = rawInput.slice(0, 4);
const rawdividido2 = rawInput.slice(6, 11);
const rawdividido3 = rawInput.slice(5, 6).toUpperCase();
console.log(rawdividido1 + rawdividido3 +rawdividido2)