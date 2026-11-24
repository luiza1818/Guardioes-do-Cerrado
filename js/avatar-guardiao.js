/* Avatar personalizável, salvo por conta na integração existente. */
(function app(icons,colors,defaults,normalize){
    const key="avatarGuardiao";
    const byId=id=>document.getElementById(id);
    function read(){try{return normalize(JSON.parse(Guardioes.storage.getItem(key)||"null"),icons,colors,defaults);}catch{return {...defaults};}}
    const ns="http://www.w3.org/2000/svg";
    function symbol(id){
        const item=icons.find(x=>x[0]===id)||icons[0], code=item[2];
        if(code.startsWith("fa-")){const i=document.createElement("i");i.className="fa-solid "+code;i.setAttribute("aria-hidden","true");return i;}
        const svg=document.createElementNS(ns,"svg");svg.setAttribute("viewBox","0 0 48 48");svg.setAttribute("aria-hidden","true");svg.setAttribute("fill","currentColor");
        const add=(tag,attrs)=>{const e=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));svg.append(e);};
        if(code==="berries"){add("path",{d:"M24 18C21 8 26 3 38 3c-1 10-6 15-14 15Z"});for(const [cx,cy,r] of [[16,23,9],[32,23,9],[24,36,9]])add("circle",{cx,cy,r});}
        else{add("path",{d:"M24 15C20 6 11 5 5 8c3 9 10 12 19 7ZM25 15C27 5 36 3 43 5c-2 9-9 14-18 10Z"});add("ellipse",{cx:24,cy:30,rx:17,ry:15});add("path",{d:"M14 23a12 12 0 0 0-3 8",fill:"none",stroke:"white","stroke-width":2.2,"stroke-linecap":"round",opacity:".55"});}
        return svg;
    }
    function paint(element,value){if(!element)return;const v=normalize(value,icons,colors,defaults),c=colors.find(x=>x[0]===v.color);element.replaceChildren(symbol(v.icon));element.style.setProperty("--avatar-start",c[2]);element.style.setProperty("--avatar-end",c[3]);element.style.setProperty("--avatar-ink",c[4]);element.classList.add("avatar-personalizado");}
    function render(){const saved=read();paint(byId("perfilAvatar"),saved);paint(byId("avatarMenu"),saved);}
    document.addEventListener("guardioes:ready",()=>{
        render();
        window.addEventListener("storage",e=>{if(e.key===key)render();});
        const dialog=byId("editorAvatar");if(!dialog)return;
        const open=byId("editarAvatar"),save=byId("salvarAvatar"),msg=byId("avatarMensagem"),preview=byId("avatarPreview");
        let draft=read(),saving=false;
        const buttons=[],swatches=[];
        const makeButton=(label,css)=>{const b=document.createElement("button");b.type="button";b.className=css;b.setAttribute("aria-label",label);b.setAttribute("aria-pressed","false");b.title=label;return b;};
        function refresh(){
            paint(preview,draft);
            buttons.forEach(([b,id])=>b.setAttribute("aria-pressed",String(id===draft.icon)));
            swatches.forEach(([b,id])=>b.setAttribute("aria-pressed",String(id===draft.color)));
            byId("avatarEscolha").textContent=icons.find(x=>x[0]===draft.icon)[1]+" · "+colors.find(x=>x[0]===draft.color)[1];
        }
        for(const [id,label,,group] of icons){
            const b=makeButton(label,"avatar-opcao");b.append(symbol(id));const caption=document.createElement("span");caption.textContent=label;b.append(caption);
            b.addEventListener("click",()=>{draft.icon=id;refresh();});buttons.push([b,id]);byId(group==="Animais"?"avatarAnimais":"avatarFrutas").append(b);
        }
        for(const [id,label,start,end] of colors){
            const b=makeButton(label,"avatar-cor");b.style.setProperty("--amostra",`linear-gradient(145deg,${start},${end})`);b.addEventListener("click",()=>{draft.color=id;refresh();});swatches.push([b,id]);byId("avatarCores").append(b);
        }
        open.addEventListener("click",()=>{draft=read();msg.textContent="";refresh();dialog.showModal();});
        const close=()=>{if(!saving)dialog.close();};
        byId("fecharAvatar").addEventListener("click",close);
        byId("cancelarAvatar").addEventListener("click",close);
        byId("padraoAvatar").addEventListener("click",()=>{draft={...defaults};refresh();});
        dialog.addEventListener("cancel",e=>{if(saving)e.preventDefault();});
        save.addEventListener("click",async()=>{
            if(saving)return;saving=true;save.disabled=true;msg.textContent="Salvando...";
            const value=normalize(draft,icons,colors,defaults);
            try{Guardioes.storage.setItem(key,JSON.stringify(value));render();await Guardioes.flush();dialog.close();}
            catch{msg.textContent="Não foi possível confirmar o salvamento na nuvem. Verifique a conexão e tente novamente.";}
            finally{saving=false;save.disabled=false;}
        });
    },{once:true});
})([["paw","Pata","fa-paw","Animais"],["bird","Pássaro","fa-dove","Animais"],["frog","Sapo","fa-frog","Animais"],["fish","Peixe","fa-fish","Animais"],["cat","Felino","fa-cat","Animais"],["dog","Canídeo","fa-dog","Animais"],["horse","Cavalo","fa-horse","Animais"],["otter","Lontra","fa-otter","Animais"],["bug","Besouro","fa-bug","Animais"],["apple","Maçã","fa-apple-whole","Frutas e natureza"],["lemon","Limão","fa-lemon","Frutas e natureza"],["berries","Frutinhas","berries","Frutas e natureza"],["pequi","Pequi","pequi","Frutas e natureza"],["leaf","Folha","fa-leaf","Frutas e natureza"],["seedling","Broto","fa-seedling","Frutas e natureza"],["sun","Sol","fa-sun","Frutas e natureza"]],[["gold","Dourado","#fbc02d","#e88932","#174b30"],["green","Verde folha","#c5e5a4","#75b874","#19472b"],["teal","Verde água","#b5e5de","#65b7ab","#164f46"],["blue","Azul céu","#c1def6","#7ab4e5","#173f69"],["purple","Lilás","#e6d3f4","#b291d9","#4b3066"],["pink","Rosa flor","#f9d2e0","#ec9bb9","#752744"],["orange","Laranja","#ffdbb2","#f3a05b","#773a1c"],["earth","Terra","#e8d0b5","#bc916a","#583921"]],{"icon":"paw","color":"gold"},function normalize(value,icons,colors,defaults){return {icon:icons.some(x=>x[0]===value?.icon)?value.icon:defaults.icon,color:colors.some(x=>x[0]===value?.color)?value.color:defaults.color};});
