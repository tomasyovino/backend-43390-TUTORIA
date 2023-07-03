/* ----------------------------------------------------------------------------------------------------- */
/* --------------------------------------- "PROMESAS" ¿QUÉ SON? -----------------------------------------*/
/* ----------------------------------------------------------------------------------------------------- */
// Las promesas son objetos que representan la eventual finalización (éxito o fracaso) de una operación asincrónica y que permiten trabajar con resultados futuros. Las promesas actúan como contenedores para un valor que aún no está disponible, pero que se resolverá en algún momento. Estas operaciones asincrónicas podrían ser solicitudes a servidores, lecturas de archivos, o cualquier tarea que tome tiempo y no bloquee el hilo principal de ejecución.
// Las promesas tienen tres estados posibles: "pendiente" cuando la operación aún no se ha completado, "resuelta" cuando la operación se ha completado con éxito y "rechazada" cuando ha ocurrido un error.

// Definimos una función llamada 'divide' que realiza una división asincrónica usando una promesa.
const divide = (dividend, divider) => {
    // Dentro de la función, creamos una nueva promesa usando 'Promise'.
    return new Promise((resolve, reject) => {
        // Dentro del constructor de la promesa, verificamos si el 'divider' es igual a 0.
        if (divider === 0) {
            // Si es así, rechazamos la promesa con el mensaje 'No se puede dividir por 0'.
            reject('No se puede dividir por 0');
        } else {
            // Si el 'divider' no es 0, resolvemos la promesa con el resultado de la división 'dividend / divider'.
            resolve(dividend / divider)
        }
    });
};

/* ----------------------------------------------------------------------------------------------------- */
/* ------------------------------------------- ".THEN" --------------------------------------------------*/
/* ----------------------------------------------------------------------------------------------------- */

// Llamamos a la función 'divide' con los argumentos 6 y 3 para realizar la división asincrónica.
divide(6, 3)
    // Utilizamos el método 'then' para manejar el caso en el que la promesa se resuelva correctamente.
    .then(result => {
        // Dentro del 'then', imprimimos el resultado de la división en la consola.
        console.log(result)
    })
    // También utilizamos el método 'catch' para manejar el caso en el que la promesa sea rechazada.
    .catch(error => {
        // Dentro del 'catch', imprimimos el mensaje de error en la consola.
        console.log(error)
    });

/* ----------------------------------------------------------------------------------------------------- */
/* -------------------------------------------- ASYNC Y AWAIT -------------------------------------------*/
/* ----------------------------------------------------------------------------------------------------- */

// Definimos una función llamada 'asyncFunction' que es asíncrona y toma tres parámetros: 'a' y 'b' que son números, y 'callback' que es una función que tomará 'a' y 'b' como argumentos y realizará una operación asincrónica.
const asyncFunction = async (a, b, callback) => {
    try {
        // Dentro de la función, utilizamos la palabra clave 'await' para esperar el resultado de la promesa devuelta por la función 'callback', que en este caso es la función 'divide'.
        const result = await callback(a, b);

        // Después de que se resuelva la promesa, imprimimos el resultado.
        console.log(result);
    } catch (error) {
        // Si ocurre un error durante la ejecución de la promesa, lo capturamos y lo imprimimos en la consola.
        console.log(error);
    };
};

// Llamamos a la función 'asyncFunction' con los valores 10 y 5 como primeros argumentos, y la función 'divide' como tercer argumento.
asyncFunction(10, 5, divide);