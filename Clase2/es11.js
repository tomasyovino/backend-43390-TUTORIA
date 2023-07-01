// Declaramos una variable test y le asignamos el valor 0.
const test = 0;

// Utilizamos el operador "OR" (||) para asignar el valor de test a assignedVariable. El operador "OR" devuelve el valor de la primera expresión verdadera. En JavaScript, 0 se considera falso, por lo que el segundo operando ("Sin valor") es verdadero y se asigna a "assignedVariable".
const assignedVariable = test || "Sin valor";

// Utilizamos el operador "Nullish" (??) para asignar el valor de test a nullish. El operador "Nullish" devuelve el valor de la primera expresión definida (no nula y no indefinida). En este caso, test se define como 0, que no es nulo, por lo que el primer operando (0) se asigna a nullish.
const nullish = test ?? 'Sin valor';

// Imprimimos los valores de assignedVariable y nullish en la consola.
// "assignedVariable" tiene el valor "Sin valor" porque el operador "OR" asignó el segundo operando ya que el primero era falso (0 se considera falso).
console.log(assignedVariable);

// "nullish" tiene el valor 0 porque el operador "Nullish" asignó el primer operando, considerándolo como un valor definido (no nulo o indefinido).
console.log(nullish);