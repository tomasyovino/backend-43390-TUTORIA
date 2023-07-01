// Exponencial
// El método "map" en JavaScript se utiliza para crear un nuevo array a partir de otro array existente, aplicando una función a cada uno de sus elementos.
const values = [1, 2, 3, 4, 5];

// Utilizamos el método 'map' en el array 'values', el cual toma una función como argumento.
const newValues = values.map((number, index) => number * index);

// Imprimimos el nuevo array 'newValues' que contiene el resultado de la operación de multiplicación.
console.log(newValues);

// Includes
// El método "includes" se utiliza para comprobar si un elemento específico está presente dentro de un array. Esta función devuelve un valor booleano (true o false) según si el elemento buscado se encuentra o no en el array.
const names = ['Luciana', 'Gala', 'Lau', 'Diego'];

// La función 'exampleIncludesMethodFunction' toma dos parámetros: 'array' representa el array en el que se buscará, y 'value' representa el elemento que se comprobará si está incluido.
const exampleIncludesMethodFunction = (array, value) => {
    // La función utiliza el método 'includes' del 'array' para comprobar si el 'valor' está presente en él.
    if (array.includes(value)) {
        // Si 'value' se encuentra en el 'array', imprime 'Ese nombre está incluido'.
        console.log('Ese nombre está incluido'); // Output: Ese nombre está incluido
    } else {
        // En caso contrario, imprime 'Ese nombre no está incluido'.
        console.log('Ese nombre no está incluido'); // Output: Ese nombre no está incluido
    };
};

// Llama a la función 'exampleIncludesMethodFunction' con el array 'names' y el valor 'Luciana' para comprobar si 'Luciana' está incluida en el array.
exampleIncludesMethodFunction(names, 'Luciana');