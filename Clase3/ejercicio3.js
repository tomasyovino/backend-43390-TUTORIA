// Tenemos cuatro funciones: add, subtract, divide, y multiply, cada una de ellas realiza operaciones matemáticas usando promesas.
// Cada función matemática (add, subtract, divide, y multiply) devuelve una promesa que se resuelve con el resultado de la operación o se rechaza con un mensaje de error específico si se dan ciertas condiciones.
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) reject('Operación innecesaria');
        if (a + b < 0) reject('Esta calculadora solo devuelve valores positivos');
        resolve(a + b);
    });
};

const subtract = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) reject('Operación innecesaria');
        if (a - b < 0) reject('Esta calculadora solo devuelve valores positivos');
        resolve(a - b);
    });
};

const divide = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a === 0) reject('No se puede dividir por 0');
        resolve(a / b);
    });
};

const multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) reject('Esta calculadora solo devuelve valores positivos');
        resolve(a * b);
    });
};

// La función calculate es una función asíncrona que toma tres parámetros: a y b que son números, y callback que es una de las funciones add, subtract, divide, o multiply.
// Al llamar a la función calculate, utilizamos async/await para esperar el resultado de la operación asincrónica realizada por la función matemática correspondiente.
const calculate = async (a, b, callback) => {
    try {
        // Si la promesa se resuelve correctamente, el resultado se almacena en la variable result y se imprime en la consola.
        const result = await callback(a, b);
        console.log(result);
    } catch (error) {
        // Si ocurre un error durante la ejecución de la promesa, se captura el error en el bloque catch y se imprime en la consola.
        console.log(error);
    };
};

// Llamamos a la función 'calculate' con los valores 10 y 5 como primeros argumentos, y las funciones 'add', 'subtract', 'divide' y 'multiply' como tercer argumento respectivamente.
calculate(10, 5, add);
calculate(10, 5, subtract);
calculate(10, 5, divide);
calculate(10, 5, multiply);