// Spread Operator
// El operador de propagación "Spread Operator", se representa con tres puntos suspensivos '...' y se utiliza para descomponer objetos iterables, como arreglos u objetos, en elementos individuales
const object1 = {
    number: 2,
    string: 'b',
    boolean: true
};
const object2 = {
    string: 'c',
    array: [1, 2, 3, 4]
};

// Usamos el Operador Spread para fusionar las propiedades de 'object1' y 'object2' en un nuevo objeto llamado 'resultingObject'.
const resultingObject = {
    ...object1, ...object2
};
console.log(resultingObject);

// Rest Operator
// El operador rest (o "Rest Operator") también es representado por tres puntos suspensivos y se utiliza para representar un número indefinido de argumentos. Es importante tener en cuenta que el operador rest solo puede usarse como el último parámetro de una función, ya que recoge todos los argumentos restantes después de los parámetros formales definidos antes de él.
const object3 = {
    a: 1,
    b: 2,
    c: 3
};

// Utilizamos el operador Rest para extraer la propiedad 'a' de 'object3' y reunir el resto de propiedades en un nuevo objeto llamado 'rest'.
const { a, ...rest } = object3;
console.log(a);
console.log(rest);