# Conta e dados dos Guardiões do Cerrado

Projeto Supabase: `bghdfbfbiledhvkfwgyw`.

O script `schema.sql` cria `guardioes_dados`, com chave composta por usuário e nome
 do dado. Os formatos atuais da aplicação são preservados: progresso, leituras,
coleção, quizzes, missões, conquistas, diário e preferências. Nome e email vêm do
Supabase Auth. Senhas ficam exclusivamente no Auth, nunca na tabela da aplicação.
Todas as páginas internas exigem sessão e carregam os dados antes de executar os
scripts originais. O design e os arquivos CSS existentes foram preservados.

## Configuração necessária no painel

Em Authentication → URL Configuration:

- Site URL: `https://luiza1818.github.io/Guardioes-do-Cerrado/login.html`
- Redirect URLs: incluir `https://luiza1818.github.io/Guardioes-do-Cerrado/login.html`

Email/password e novos cadastros precisam estar habilitados. A confirmação por
email deve permanecer habilitada. O serviço de envio padrão do Supabase tem
limites; configure SMTP próprio se o volume de alunos exigir.

Execute `schema.sql` no SQL Editor apenas se a tabela ainda não foi criada.
A chave pública já está no cliente. Nenhuma chave secreta é necessária no GitHub
Pages. Não adicione service_role, sb_secret, senha do banco ou access token ao site.

## Persistência e isolamento

A tabela tem RLS em SELECT, INSERT, UPDATE e DELETE. Cada política exige
`auth.uid() = usuario_id`. A chave primária também indexa o dono. O papel `anon`
não recebe acesso. A exclusão da conta no Auth apaga seus dados por cascata.

`Guardioes.storage` mantém a interface getItem/setItem/removeItem usada pelo site,
com gravação imediata no Supabase e uma fila local separada por usuário. Falhas
aparecem na página e ficam pendentes para nova tentativa. Ao recarregar, alterações
pendentes são reaplicadas sobre os dados da nuvem. Valores excluídos são gravados
como marcadores nulos para evitar que reapareçam. A navegação por links aguarda
o salvamento. Sair da conta também aguarda o salvamento antes de encerrar a sessão.

Dados antigos anônimos do navegador não são importados automaticamente, pois não
é possível determinar de qual pessoa são. O aplicativo exige conexão para carregar
a conta inicialmente. Edições simultâneas do mesmo dado em dispositivos diferentes
seguem a última gravação; os pontos continuam sendo calculados pelo cliente, como
no aplicativo original, e não devem ser usados para premiações competitivas.

Biblioteca cliente: Supabase JS 2.119.0, vendorizada de
https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.119.0/dist/umd/supabase.js
(licença MIT), sem dependência de CDN em tempo de execução.
