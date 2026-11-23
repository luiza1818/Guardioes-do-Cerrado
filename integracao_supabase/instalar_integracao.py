#!/usr/bin/env python3
"""Instala o pacote preservando arquivos antigos em backup externo ao Git."""
from pathlib import Path
import re, sys
from datetime import datetime

pkg=Path(__file__).resolve().parent
root=pkg.parent
if not (root/'.git').exists() or not (root/'login.html').exists():
    sys.exit('Coloque a pasta integracao_supabase NA RAIZ do repositório, junto de login.html!')
backup=Path.home()/'.backups-guardioes'/datetime.now().strftime('%Y%m%d-%H%M%S')
changes={}

def save(path,content):
    dest=root/path
    old=dest.read_text(encoding='utf8') if dest.exists() else None
    if old==content:return
    if old is not None:
        out=backup/path
        out.parent.mkdir(parents=True,exist_ok=True)
        out.write_text(old,encoding='utf8')
    changes[path]=content

def rep_form(s,id,new):
    pat=rf'<form\s+id=["\']{id}["\'][^>]*>.*?</form>'
    s,n=re.subn(pat,lambda m:new,s,count=1,flags=re.I|re.S)
    if n!=1:raise RuntimeError(f'Formulário {id} não encontrado, nenhuma mudança realizada')
    return s

login=(root/'login.html').read_text(encoding='utf8')
if '<!-- INTEGRACAO-GUARDIOES-SUPABASE -->' not in login:
    f1='''<form id="login"><h2>Entrar</h2>
<input id="email-login" name="email" type="email" placeholder="E-mail" autocomplete="email" required>
<input id="senha-login" name="senha" type="password" placeholder="Senha" autocomplete="current-password" required>
<button class="principal" type="submit">Entrar</button></form>'''
    f2='''<form id="cadastro" hidden><h2>Criar conta</h2>
<input id="nome-cadastro" name="nome" type="text" placeholder="Nome" autocomplete="name" required>
<input id="email-cadastro" name="email" type="email" placeholder="E-mail" autocomplete="email" required>
<input id="senha-cadastro" name="senha" type="password" placeholder="Senha" autocomplete="new-password" minlength="8" required>
<input id="confirmar-cadastro" name="confirmar" type="password" placeholder="Confirmar senha" autocomplete="new-password" minlength="8" required>
<button class="principal" type="submit">Criar conta</button></form>'''
    login=rep_form(login,'login',f1)
    login=rep_form(login,'cadastro',f2)
    extras='''
<button type="button" id="entrar-google" class="guardioes-google">Continuar com Google</button>
<button type="button" id="esqueci-senha" class="guardioes-link">Esqueci minha senha</button>
<form id="recuperar-senha" hidden><h2>Nova senha</h2>
<input name="novaSenha" type="password" placeholder="Nova senha" minlength="8" required>
<input name="confirmaNovaSenha" type="password" placeholder="Confirmar nova senha" minlength="8" required>
<button type="submit" class="principal">Atualizar minha senha</button></form>
<p id="status-auth" role="status" aria-live="polite"></p>
<!-- INTEGRACAO-GUARDIOES-SUPABASE -->'''
    login=login.replace(f2,f2+extras,1)
    if '</head>' not in login:raise RuntimeError('Cabeçalho inválido em login.html')
    login=login.replace('</head>','<link rel="stylesheet" href="css/supabase-guardioes.css">\n</head>',1)
    login,n=re.subn(r'<script\s+src=["\']js/login\.js["\']\s*></script>','<script type="module" src="js/login-supabase.js"></script>',login,count=1)
    if n!=1:raise RuntimeError('Não encontrei a inclusão do js/login.js em login.html')
    save('login.html',login)

pages=['principal.html','perfil.html','configuracoes.html','diario.html','biblioteca.html','cerradex.html','missoes.html','quizzes.html']
for page in pages:
    target=root/page
    if not target.exists():raise RuntimeError(f'{page} não existe. Parei antes de alterar arquivos.')
    html=target.read_text(encoding='utf8')
    if '<!-- INTEGRACAO-GUARDIOES-SUPABASE -->' in html:continue
    if '</head>' not in html or '</body>' not in html:raise RuntimeError(f'{page} tem estrutura HTML inesperada')
    html=html.replace('</head>', '''<!-- INTEGRACAO-GUARDIOES-SUPABASE -->
<link rel="stylesheet" href="css/supabase-guardioes.css">
<script>document.documentElement.classList.add('guardioes-verificando');</script>
</head>''',1)
    html=html.replace('</body>','<script type="module" src="js/guardiao-supabase.js"></script>\n</body>',1)
    if page=='diario.html':
        if '</main>' not in html:raise RuntimeError('Falta </main> em diario.html')
        html=html.replace('</main>','''<p style="max-width:750px;margin:24px auto;padding:16px;text-align:center;background:#e9f4e7;border-radius:16px;">
<a style="color:#174b30;font-weight:bold" href="anotacoes.html">🌿 Minhas anotações pessoais na nuvem</a></p>
</main>''',1)
    save(page,html)

for path in ['js/supabase-client.js','js/login-supabase.js','js/guardiao-supabase.js',
             'js/anotacoes-supabase.js','css/supabase-guardioes.css','anotacoes.html']:
    save(path,(pkg/path).read_text(encoding='utf8'))
for path,content in changes.items():
    target=root/path
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text(content,encoding='utf8')
print(f'OK! {len(changes)} arquivos preparados. Backup externo: {backup}')
print('Os arquivos NÃO foram enviados ao GitHub; faça commit e push após testar.')
