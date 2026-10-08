// ----------------------------------------------------------------
// 4. OPERADOR E / AND (&&) - SHORT-CIRCUIT
// Executa o lado direito APENAS se o lado esquerdo for verdadeiro (truthy).
// ----------------------------------------------------------------

console.log("\n=== 4. Operador AND (&&) ===");

function enviarNotificacao(nome) {
    console.log(`Notificação enviada para ${nome}.`);
}

const usuarioAtivo = true;
const usuarioInativo = false;

// Exemplo 1: Como usuarioAtivo é true, executa a ação a direita
usuarioAtivo && enviarNotificacao("Davi");

// Exemplo 2: Como usuarioInativo é false, o JS para aqui e NÃO executa
usuarioInativo && enviarNotificacao("Elisa");

// Exemplo 3: && vs IF tradicional
// O && é direto para ações simples de 1 linha.
// Para lógicas maiores ou mais complexas, o IF tradicional e mais legível:
if (usuarioAtivo) {
    console.log("Com IF: Mais claro para fluxos maiores de código.")
}