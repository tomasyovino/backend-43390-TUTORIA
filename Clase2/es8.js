// Existen distintos métodos con los que trabajar con objetos, aquí veremos el funcionamiento de Object.entries() && Object.keys() && Object.values()
const object = {
    tax1: 12,
    tax2: 42,
    tax3: 35
};

// Object.entries() devuelve tanto propiedades como valores del objeto
const entries = Object.entries(object);
console.log(`Las entradas del objeto son: ${entries}`);

// Object.keys() devuelve las propiedades del objeto
const properties = Object.keys(object); 
console.log(`Las propiedades del objeto son: ${properties}`);

// Object.values() devuelve los valores del objeto
const values = Object.values(object); 
console.log(`Los valores del objeto son: ${values}`);