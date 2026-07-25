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

//PROBLEMA 10
const comment = "Este juego es malo, realmente malo.";
// Tu tarea:
// 1. Usa .replaceAll() para cambiar todas las ocurrencias de "malo" por "bueno".
// 2. Imprime: "Comentario moderado: Este juego es bueno, realmente bueno."
const comentariocensurado = comment.replaceAll("malo", "bueno");
console.log(comentariocensurado);

//PROBLEMA 11
const symbol = "-";
// Tu tarea:
// 1. Crea una variable 'separator' usando .repeat() que cree una línea de 20 guiones.
// 2. Crea un título: "--- BIENVENIDO ---"
// 3. Imprime: 
//    --------------------
//    BIENVENIDO
//    --------------------
//    (Pista: Usa la variable 'separator' para las líneas superior e inferior).
const separator = symbol.repeat(20);
console.log(separator);
console.log("BIENVENIDO");
console.log(separator);

//PROBLEMA 12
const alertMessage = "Alerta: error en el sistema.";
// Tu tarea:
// 1. Reemplaza la palabra "error" por "fallo".
// 2. Convierte toda la frase resultante a mayúsculas usando .toUpperCase().
// 3. Imprime: "ALERTA: FALLO EN EL SISTEMA."
const alertcambiado = alertMessage.replace("error", "fallo").toUpperCase();
console.log(alertcambiado);

//PROBLEMA 13
const age = 17;
const hasId = true;
// Tu tarea:
// Usa una estructura if/else con el operador lógico '&&' (AND).
// Si tiene 18 años o más Y tiene identificación, imprime: "Puedes pasar."
// Si no, imprime: "Acceso denegado."

if(age >= 18 && hasId === true){
    console.log("Puedes pasar.");
} else {
    console.log("Acceso denegado.");
}

//PROBLEMA 14
const score = 85;
//90 a 100: "A"
//80 a 89: "B"
//Menos de 80: "C"

// Tu tarea:
// Usa if, else if, y else para evaluar la variable 'score'.
// Imprime la letra correspondiente según el rango.

if (score >= 90 && score <= 100){
    console.log("A")
} else if(score >= 80 && score <= 89){
    console.log("B")
} else {
    console.log("C")
}

//PROBLEMA 15
const area = "Web"; // Puede ser "Web" o "Data"
const experience = "Beginner"; // Puede ser "Beginner" o "Advanced"
// Tu tarea:
// Si el area es "Web" Y la experiencia es "Beginner", imprime: "Te recomiendo empezar con HTML/CSS."
// Si el area es "Web" Y la experiencia es "Advanced", imprime: "Te recomiendo aprender React."
// Si el area es "Data", imprime: "Te recomiendo aprender Python."
// Si no es ninguna de las anteriores, imprime: "Area no reconocida."

if(area === "Web" && experience === "Beginner"){
    console.log("Te recomiendo empezar con HTML/CSS.")
} else if(area === "Web" && experience === "Advanced"){
    console.log("Te recomiendo aprender React.")
} else if(area === "Data"){
    console.log("Te recomiendo aprender Python.")
} else {
    console.log("Area no encontrada.")
}

//PROBLEMA 16
// Tu tarea:
// 1. Usa Math.random() para generar un número decimal.
// 2. Transfórmalo a un número entero entre 1 y 6 usando Math.floor().
// 3. Imprime: "Has sacado un: [resultado]"
const dado = Math.floor(Math.random()*(6 - 1) - 1)
console.log(`Has sacado un: ${dado}`);

//PROBLEMA 17
const price = 19.10;

// Tu tarea:
// 1. Usa Math.ceil() para redondear el precio hacia arriba.
// 2. Imprime: "El precio final es: [resultado]"

//PROBLEMA 18
const userInput = 15; 
// (Imagina que este valor cambia)

// Tu tarea:
// 1. Si userInput es mayor que 10, usa Math.min(userInput, 10) para forzar el máximo.
// 2. Si userInput es menor que 1, usa Math.max(userInput, 1) para forzar el mínimo.
// 3. Imprime el valor ajustado.
