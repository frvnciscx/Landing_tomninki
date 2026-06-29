// Nav scroll-aware
const nav=document.getElementById('nav');
const onScroll=()=>nav.classList.toggle('scrolled',window.scrollY>30);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});

// Menú móvil
const navToggle=document.getElementById('navToggle');
const navLinks=document.getElementById('navLinks');
function setNavOpen(open){navLinks.classList.toggle('open',open);navToggle.setAttribute('aria-expanded',String(open));}
navToggle.addEventListener('click',()=>setNavOpen(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setNavOpen(false)));

// Reveal on scroll
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));

// FAQ acordeón
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.parentElement, ans=item.querySelector('.faq-a'), open=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>{
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight=null;
      i.querySelector('.faq-q').setAttribute('aria-expanded','false');
    });
    if(!open){
      item.classList.add('open');
      ans.style.maxHeight=ans.scrollHeight+'px';
      q.setAttribute('aria-expanded','true');
    }
  });
});

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
  const isDesktop=()=>matchMedia('(hover:hover) and (pointer:fine)').matches;
  function focusables(){
    return modal.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])');
  }
  function openModal(){
    lastFocus=document.activeElement;
    modal.hidden=false; modal.classList.add('open');
    document.body.style.overflow='hidden';
    if(isDesktop()&&email){requestAnimationFrame(()=>email.focus());}
    document.addEventListener('keydown',onKey);
  }
  function closeModal(){
    modal.classList.remove('open'); modal.hidden=true;
    document.body.style.overflow='';
    document.removeEventListener('keydown',onKey);
    if(lastFocus&&lastFocus.focus)lastFocus.focus();
  }
  function onKey(e){
    if(e.key==='Escape'){closeModal();return;}
    if(e.key==='Tab'){
      const f=focusables(); if(!f.length)return;
      const first=f[0], last=f[f.length-1];
      if(e.shiftKey&&document.activeElement===first){last.focus();e.preventDefault();}
      else if(!e.shiftKey&&document.activeElement===last){first.focus();e.preventDefault();}
    }
  }
  document.querySelectorAll('[data-open-modal]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openModal();}));
  document.getElementById('paaClose').addEventListener('click',closeModal);
  done.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
  email.addEventListener('input',()=>{email.removeAttribute('aria-invalid');emailErr.classList.remove('show');});
  terms.addEventListener('change',()=>{if(terms.checked)termsErr.classList.remove('show');});
  formEl.addEventListener('submit',e=>{
    e.preventDefault();
    let ok=true, firstInvalid=null; const val=email.value.trim();
    if(!val||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){email.setAttribute('aria-invalid','true');emailErr.classList.add('show');ok=false;firstInvalid=firstInvalid||email;}
    if(!terms.checked){termsErr.classList.add('show');ok=false;firstInvalid=firstInvalid||terms;}
    if(!ok){firstInvalid&&firstInvalid.focus();return;}
    // TODO: enviar 'val' a tu servicio (Mailchimp / API / Google Form).
    formWrap.style.display='none';
    success.classList.add('show');
    done.focus();
  });
})();
