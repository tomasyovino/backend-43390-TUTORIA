// TRIM && FLAT
const string1 = '                      hola';

// Utilizamos el método 'trim' en 'string1' para eliminar los espacios en blanco al principio y al final del string.
const string2 = string1.trim();

// Imprimimos la longitud del 'string1' original.
console.log(string1.length);

// Imprimimos el 'string2', que es el resultado después de aplicar 'trim' a 'string1'.
console.log(string2);

// Imprimimos la longitud del 'string2' resultante después de aplicar 'trim'.
console.log(string2.length);

// Utilizamos el método 'flat' en 'nestedArray' con el argumento 10 para aplanar el array hasta una profundidad de 10.
// El método 'flat' aplanará todos los arrays internos hasta la profundidad especificada, en este caso, 10.
const nestedArray = [1, 2, 3, 4, [1, 2, 3], [8, 9, [10, 11, 12]]];
console.log(nestedArray.flat(10));