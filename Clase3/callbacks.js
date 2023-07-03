/* ----------------------------------------------------------------------------------------------------- */
/* --------------------------------------- "CALLBACKS" ¿QUÉ SON? ----------------------------------------*/
/* ----------------------------------------------------------------------------------------------------- */
// Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se complete cierta operación asincrónica o evento. Estas funciones permiten manejar el flujo de control y realizar acciones específicas cuando una tarea asíncrona ha finalizado o cuando ocurre un evento determinado. Los callbacks son fundamentales para la programación asíncrona en JavaScript y se utilizan ampliamente en funciones como setTimeOut, eventos de escucha y operaciones AJAX, entre otros.

// Definimos un array original de valores.
const originalValues = [1, 2, 3, 4, 5];

// Creamos una función llamada 'isEven' para determinar si un número es par o impar.
const isEven = (value) => {
    // Si el residuo de 'value' dividido por 2 es 0, significa que es un número par.
    if (value % 2 === 0) {
        // En ese caso, la función devuelve una cadena indicando que el número es par.
        return `El numero ${value} es par`;
    } else {
        // En este caso, la función devuelve una cadena indicando que el número es impar.
        return `El numero ${value} es impar`;
    };
};


// El método 'map' itera sobre cada elemento del array 'originalValues' y aplica la función 'isEven' a cada elemento.
const newValues = originalValues.map(isEven);

// El resultado es un nuevo array 'newValues' que contiene las cadenas indicando si cada número es par o impar.
console.log(newValues);

/* ----------------------------------------------------------------------------------------------------- */
/* --------------------------------- FUNCIONAMIENTO INTERNO DEL ".MAP()" --------------------------------*/
/* ----------------------------------------------------------------------------------------------------- */

// La función toma dos parámetros: 'array' representa el array original y 'callback' representa la función de transformación.
const artificialMap = (array, callback) => {
    // Creamos un nuevo array 'newArray' que utilizaremos para almacenar los valores transformados.
    const newArray = [];

    // Luego, recorremos cada elemento del array 'array' utilizando un bucle 'for'.
    for (let i = 0; i < array.length; i++) {
        // En cada iteración, llamamos a la función de transformación 'callback' con el elemento actual como argumento. Además, el resultado de la función 'callback' se almacena en una variable llamada 'newValue'.
        const newValue = callback(array[i]);

        // Luego, agregamos 'newValue' al array 'newArray' utilizando el método 'push'.
        newArray.push(newValue);
    };

    // Una vez que hemos procesado todos los elementos del array original, devolvemos el nuevo array 'newArray' con los valores transformados.
    return newArray;
};

const result = artificialMap(originalValues, x => x + 2);
console.log(result);