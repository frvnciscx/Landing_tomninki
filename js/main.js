// Nav scroll-aware
const nav=document.getElementById('nav');
const onScroll=()=>nav.classList.toggle('scrolled',window.scrollY>30);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});

// Menú móvil
const navToggle=document.getElementById('navToggle');
const navLinks=document.getElementById('navLinks');
navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

// Reveal on scroll
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));

// Respeta prefers-reduced-motion: pausa el video de fondo
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const hv=document.querySelector('.hero-video'); if(hv){hv.removeAttribute('autoplay'); if(hv.pause)hv.pause();}
}

// FAQ acordeón
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.parentElement, ans=item.querySelector('.faq-a'), open=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null});
    if(!open){item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px';}
  });
});

// Formularios waitlist (placeholder — conectar backend después)
function handleWaitlist(formId,successId){
  const form=document.getElementById(formId), success=document.getElementById(successId);
  if(!form)return;
  form.querySelector('input[name=email]').addEventListener('input',function(){this.removeAttribute('aria-invalid');var e2=form.querySelector('.wl-error');if(e2)e2.classList.remove('show');});
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const input=form.querySelector('input[name=email]'), email=input.value.trim();
    if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){input.setAttribute('aria-invalid','true');var er=form.querySelector('.wl-error');if(er){er.textContent='Escribe un correo válido para apartar tu lugar.';er.classList.add('show');}input.focus();return;}
    // TODO: enviar 'email' a tu servicio (Mailchimp / API / Google Form).
    console.log('Waitlist signup:',email);
    form.style.display='none';
    success.classList.add('show');
    success.setAttribute('tabindex','-1');success.focus();
  });
}

// Modal PAA
(function(){
  const modal=document.getElementById('paaModal'); if(!modal)return;
  const formWrap=document.getElementById('paaForm');
  const formEl=document.getElementById('paaFormEl');
  const success=document.getElementById('paaSuccess');
  const email=document.getElementById('paaEmail');
  const terms=document.getElementById('paaTerms');
  const emailErr=document.getElementById('paaEmailErr');
  const termsErr=document.getElementById('paaTermsErr');
  const done=document.getElementById('paaDone');
  let lastFocus=null;
  function openModal(){
    lastFocus=document.activeElement;
    modal.hidden=false; modal.classList.add('open');
    document.body.style.overflow='hidden';
    setTimeout(()=>email&&email.focus(),60);
    document.addEventListener('keydown',onKey);
  }
  function closeModal(){
    modal.classList.remove('open'); modal.hidden=true;
    document.body.style.overflow='';
    document.removeEventListener('keydown',onKey);
    if(lastFocus&&lastFocus.focus)lastFocus.focus();
  }
  function onKey(e){if(e.key==='Escape')closeModal();}
  document.querySelectorAll('[data-open-modal]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openModal();}));
  document.getElementById('paaClose').addEventListener('click',closeModal);
  done.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
  email.addEventListener('input',()=>{email.removeAttribute('aria-invalid');emailErr.classList.remove('show');});
  terms.addEventListener('change',()=>{if(terms.checked)termsErr.classList.remove('show');});
  formEl.addEventListener('submit',e=>{
    e.preventDefault();
    let ok=true; const val=email.value.trim();
    if(!val||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){email.setAttribute('aria-invalid','true');emailErr.classList.add('show');ok=false;}
    if(!terms.checked){termsErr.classList.add('show');ok=false;}
    if(!ok)return;
    // TODO: enviar 'val' a tu servicio (Mailchimp / API / Google Form).
    console.log('PAA signup:',val);
    formWrap.style.display='none';
    success.classList.add('show');
    done.focus();
  });
})();
