// Definimos funciones para realizar operaciones matemáticas básicas.
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Creamos una función llamada 'performOperation' que ejecuta una operación matemática utilizando una función de callback.
const performOperation = (a, b, callback) => {
    // Llamamos a la función 'callback' con los valores 'a' y 'b' como argumentos y almacenamos el resultado en una variable llamada 'result'.
    const result = callback(a, b);

    // Luego, imprimimos el resultado en la consola.
    console.log(result);
};

// Llamamos a la función 'performOperation' con diferentes operaciones y sus respectivas funciones de callback (add, subtract, multiply, divide).
performOperation(14, 2, add);
performOperation(14, 2, subtract);
performOperation(14, 2, multiply);
performOperation(14, 2, divide);