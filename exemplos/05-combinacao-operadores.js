// ----------------------------------------------------------------
// 5. COMBINANDO ?. E ??
// Exemplo: 'const status = usuario?.ativo ?? "Desconhecido"'
// Acessa informações com segurança (?.) e define valor padrão (??)
// ----------------------------------------------------------------

console.log("\n=== 5. Combinando ?. e ?? ===");

// Exemplo 1: Quando o usuário é undefined
const usuario1 = undefined;
const status1 = usuario1?.ativo ?? "Desconhecido";
console.log("1. Usuário undefined → Status:", status1); // "Desconhecido"

// Exemplo 2: Quando o usuário existe mas não possui a propriedade 'ativo'
const usuario2 = { nome: "Lucas" };
const status2 = usuario2?.ativo ?? "Desconhecido";
console.log("2. Sem propriedade ativo → Status:", status2); // "Desconhecido"

// Exemplo 3: Quando a propriedade ativo é false (preserva false porque não é nullish!)
const usuario3 = { nome: "Marina", ativo: false };
const status3 = usuario3?.ativo ?? "Desconhecido";
console.log("3. Ativo é false → Status:", status3); // false

// Exemplo 4: Quando a propriedade ativo é true
const usuario4 = { nome: "Pedro", ativo: true };
const status4 = usuario4?.ativo ?? "Desconhecido";
console.log("4. Ativo é true → Status:", status4); // true