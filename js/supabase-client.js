// Reutiliza o cliente único da conta, com sessão e armazenamento compartilhados.
export const supabase = window.Guardioes.client;
export const pagina = (nome) => new URL(nome, window.location.href).href;
