import { supabase, pagina } from './supabase-client.js';
const lista=document.querySelector('#lista-anotacoes');
const formulario=document.querySelector('#form-anotacao');
const mensagem=document.querySelector('#mensagem');
let usuario=null;
let editando=null;
const dizer=(texto)=>{mensagem.textContent=texto;};
const limpar=()=>{editando=null;formulario.reset();document.querySelector('#titulo-formulario').textContent='Nova anotação';};
const criar=(tag,texto,classe)=>{const el=document.createElement(tag);el.textContent=texto;if(classe)el.className=classe;return el;};
async function carregar(){
  const {data,error}=await supabase.from('diario_campo').select('id,titulo,conteudo,criado_em,atualizado_em')
    .eq('usuario_id',usuario.id).order('criado_em',{ascending:false});
  lista.replaceChildren();
  if(error){lista.append(criar('p',`Erro ao carregar: ${error.message}`));return;}
  if(!data.length){lista.append(criar('p','Você ainda não tem anotações. Que tal começar pela primeira descoberta?'));return;}
  data.forEach(item=>{
    const artigo=criar('article','','anotacao');
    artigo.append(criar('h3',item.titulo));
    artigo.append(criar('small',new Date(item.atualizado_em).toLocaleString('pt-BR')));
    const paragrafo=criar('p',item.conteudo);paragrafo.style.whiteSpace='pre-wrap';artigo.append(paragrafo);
    const editar=criar('button','Editar');
    editar.addEventListener('click',()=>{
      editando=item.id;formulario.elements.titulo.value=item.titulo;
      formulario.elements.conteudo.value=item.conteudo;
      document.querySelector('#titulo-formulario').textContent='Editar anotação';
      formulario.scrollIntoView({behavior:'smooth'});
    });
    const excluir=criar('button','Excluir','perigo');
    excluir.addEventListener('click',async()=>{
      if(!window.confirm('Excluir esta anotação?'))return;
      const {error:e}=await supabase.from('diario_campo').delete().eq('id',item.id).eq('usuario_id',usuario.id);
      if(e)dizer(`Não foi possível excluir: ${e.message}`);else {dizer('Anotação excluída.');await carregar();}
    });
    artigo.append(editar,excluir);lista.append(artigo);
  });
}
formulario.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const titulo=formulario.elements.titulo.value.trim();
  const conteudo=formulario.elements.conteudo.value.trim();
  if(!titulo||!conteudo)return dizer('Preencha título e anotação.');
  const pedido=editando ? supabase.from('diario_campo').update({titulo,conteudo}).eq('id',editando).eq('usuario_id',usuario.id)
   : supabase.from('diario_campo').insert({usuario_id:usuario.id,titulo,conteudo});
  const {error}=await pedido;
  if(error)return dizer(`Não foi possível salvar: ${error.message}`);
  limpar();dizer('Anotação salva na sua conta!');await carregar();
});
document.querySelector('#cancelar-edicao').addEventListener('click',limpar);
try{
  const {data,error}=await supabase.auth.getUser();
  if(error||!data.user){location.replace(pagina('login.html'));}
  else{usuario=data.user;await carregar();}
}catch(e){dizer(`Erro de conexão: ${e.message}`);}
finally{document.documentElement.classList.remove('guardioes-verificando');}
