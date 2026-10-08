const usuario = {
    nome: "",
    idade: 0,
    endereco: null
};

console.log(usuario.nome || "Visitante");
console.log(usuario.nome ?? "Visitante");
console.log(usuario.idade || 18);
console.log(usuario.idade ?? 18);
console.log(usuario.endereco?.cidade);
console.log(usuario.endereco?.cidade ?? "Sem cidade");

// Saída:
// 1. "Visitante"
// 2. ""
// 3. "18"
// 4. "0"
// 5. undefined
// 6. "Sem cidade"