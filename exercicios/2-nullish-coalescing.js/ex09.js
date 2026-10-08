const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

// || : Imprime 10, porque 0 é falsy
// ?? : Imprime 0, porque 0 não é null nem undefined