/* Navegação compacta independente dos dados da conta. */
(() => {
    const header=document.querySelector('body[data-menu="compacto"] > header.cabecalho');
    if(!header)return;
    const button=header.querySelector('.menu-mobile-guardioes'),nav=header.querySelector('nav.menu');
    if(!button||!nav)return;
    const mobile=matchMedia('(max-width:980px)');
    const setOpen=(value,focus=false)=>{
        nav.dataset.aberto=String(value);
        button.setAttribute('aria-expanded',String(value));
        button.querySelector('i').className=value?'fa-solid fa-xmark':'fa-solid fa-bars';
        if(focus)button.focus();
    };
    button.addEventListener('click',()=>setOpen(button.getAttribute('aria-expanded')!=='true'));
    nav.addEventListener('click',e=>{if(e.target.closest('a'))setOpen(false);});
    document.addEventListener('click',e=>{if(!header.contains(e.target))setOpen(false);});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&button.getAttribute('aria-expanded')==='true')setOpen(false,true);});
    mobile.addEventListener('change',()=>setOpen(false));
    window.addEventListener('pageshow',()=>setOpen(false));
    setOpen(false);
})();
