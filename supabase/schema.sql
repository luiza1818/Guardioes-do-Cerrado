-- Execute no SQL Editor do projeto bghdfbfbiledhvkfwgyw.
-- Estado da jornada por usuário e chave; mantém os formatos atuais do site.
begin;
create table if not exists public.guardioes_dados (
    usuario_id uuid not null references auth.users(id) on delete cascade,
    chave text not null check (length(chave) between 1 and 100),
    valor text check (octet_length(valor) <= 1048576),
    primary key (usuario_id, chave)
);
alter table public.guardioes_dados enable row level security;
revoke all on public.guardioes_dados from anon;
grant select, insert, update, delete on public.guardioes_dados to authenticated;
drop policy if exists "Ler dados próprios" on public.guardioes_dados;
create policy "Ler dados próprios" on public.guardioes_dados for select to authenticated
using ((select auth.uid()) = usuario_id);
drop policy if exists "Criar dados próprios" on public.guardioes_dados;
create policy "Criar dados próprios" on public.guardioes_dados for insert to authenticated
with check ((select auth.uid()) = usuario_id);
drop policy if exists "Atualizar dados próprios" on public.guardioes_dados;
create policy "Atualizar dados próprios" on public.guardioes_dados for update to authenticated
using ((select auth.uid()) = usuario_id) with check ((select auth.uid()) = usuario_id);
drop policy if exists "Apagar dados próprios" on public.guardioes_dados;
create policy "Apagar dados próprios" on public.guardioes_dados for delete to authenticated
using ((select auth.uid()) = usuario_id);
commit;
