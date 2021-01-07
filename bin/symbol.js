// The Wonderful Symbol

// What is a Symbol?

// How do symbols work?
const mySymbol = Symbol();
// We can also give a string value to the factory function.
const mySymbolWithContent = Symbol(`nameKey`);

const s1 = Symbol(`symbol001`);
const s2 = Symbol(`symbol002`);
console.log(Symbol.for(`symbol001`)); 

// Symbols are always unique.
const s3 = Symbol(`test`);
const s4 = Symbol(`test`);
console.log(s3 == s4);

// Use Cases
// Unique Object Key
const writer = {};
const nameKey = Symbol('key-for-name');
writer[nameKey] = `Jack London`;

// Create Hidden Properties
// Because the properties of a Symbol-like key are invisible to the Object.keys method.
console.log(Object.keys(writer));

// Thanks for watching and be sure to check out my other videos.
