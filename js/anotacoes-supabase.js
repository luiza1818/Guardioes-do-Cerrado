
const lista=document.querySelector('#lista-anotacoes');
const formulario=document.querySelector('#form-anotacao');
const mensagem=document.querySelector('#mensagem');
const chave='anotacoesCampo';
const ler=()=>JSON.parse(Guardioes.storage.getItem(chave)||'[]');
async function salvar(itens){Guardioes.storage.setItem(chave,JSON.stringify(itens));await Guardioes.flush();}
let editando=null;
const dizer=(texto)=>{mensagem.textContent=texto;};
const limpar=()=>{editando=null;formulario.reset();document.querySelector('#titulo-formulario').textContent='Nova anotação';};
const criar=(tag,texto,classe)=>{const el=document.createElement(tag);el.textContent=texto;if(classe)el.className=classe;return el;};
async function carregar(){
  const data=ler().sort((a,b)=>b.criado_em.localeCompare(a.criado_em));
  lista.replaceChildren();
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
      try {await salvar(ler().filter(x=>x.id!==item.id));dizer('Anotação excluída.');await carregar();} catch(e){dizer('Alteração pendente de sincronização: '+e.message);await carregar();}
    });
    artigo.append(editar,excluir);lista.append(artigo);
  });
}
formulario.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const titulo=formulario.elements.titulo.value.trim();
  const conteudo=formulario.elements.conteudo.value.trim();
  if(!titulo||!conteudo)return dizer('Preencha título e anotação.');
  const itens=ler();const agora=new Date().toISOString();
  if(editando){const item=itens.find(x=>x.id===editando);if(!item)return dizer('Anotação não encontrada.');Object.assign(item,{titulo,conteudo,atualizado_em:agora});}
  else itens.push({id:crypto.randomUUID(),titulo,conteudo,criado_em:agora,atualizado_em:agora});
  try{await salvar(itens);limpar();dizer('Anotação salva na sua conta!');await carregar();}catch(e){limpar();dizer('Anotação guardada neste dispositivo; sincronização pendente.');await carregar();}
});
document.querySelector('#cancelar-edicao').addEventListener('click',limpar);
try{
  if(await Guardioes.initialize()) await carregar();
}catch(e){dizer(`Erro de conexão: ${e.message}`);}
finally{document.documentElement.classList.remove('guardioes-verificando');}
