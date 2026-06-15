cat > /tmp/new_js.js << 'JSEOF'
'use strict';
const T={no:{nav:['Hjem','Om oss','Prosjekter','Muligheter','Kontakt'],eyebrow:'Drammen, Norge · Est. 2023',t1:'Styrker',t2:'ungdommen',t3:'for fremtiden',sub:'Youth Network er et flerkulturelt fellesskap som jobber for inkludering, europeisk dialog og en bedre fremtid for unge.',cta1:'Utforsk prosjekter',cta2:'Bli med oss',lang:'🇬🇧 EN'},en:{nav:['Home','About Us','Projects','Opportunities','Contact'],eyebrow:'Drammen, Norway · Est. 2023',t1:'Empowering',t2:'young people',t3:'for the future',sub:'Youth Network is a multicultural community working for inclusion, European dialogue and a better future for young people.',cta1:'Explore projects',cta2:'Join us',lang:'🇳🇴 NO'}};
let lang='no';
function $i(id){return document.getElementById(id)}
function st(id,txt){const e=$i(id);if(e)e.textContent=txt}
function applyLang(l){
  lang=l;const t=T[l];
  document.querySelectorAll('[data-n]').forEach((el,i)=>{el.textContent=t.nav[i]??el.textContent});
  st('h-eyebrow',t.eyebrow);st('h-t1',t.t1);st('h-t2',t.t2);st('h-t3',t.t3);st('h-sub',t.sub);st('h-cta1',t.cta1);st('h-cta2',t.cta2);
  document.querySelectorAll('.lang-toggle').forEach(b=>b.textContent=t.lang);
  document.documentElement.lang=l;
}
function toggleLang(){applyLang(lang==='no'?'en':'no')}

// Progress bar
window.addEventListener('scroll',()=>{
  const b=$i('progress-bar');if(!b)return;
  b.style.width=(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100)+'%';
  // Nav active
  let cur='';
  document.querySelectorAll('section[id]').forEach(s=>{if(window.scrollY>=s.offsetTop-80)cur=s.id});
  document.querySelectorAll('.nav-links a').forEach(a=>{a.classList.toggle('active',a.getAttribute('href')==='#'+cur)});
},{passive:true});

// Mobile menu
function initMobile(){
  const h=$i('hamburger'),m=$i('mobile-menu');if(!h||!m)return;
  h.addEventListener('click',()=>{const o=m.classList.toggle('open');h.classList.toggle('open',o);document.body.style.overflow=o?'hidden':''});
  m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{m.classList.remove('open');h.classList.remove('open');document.body.style.overflow=''}));
}

// Reveal animation
function initReveal(){
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)}}),{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

// Tabs
function initTabs(){
  const tabs=document.querySelectorAll('.tab-btn'),cards=document.querySelectorAll('.project-card');
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(b=>b.classList.remove('active'));t.classList.add('active');
    const f=t.dataset.filter;
    cards.forEach(c=>c.style.display=(f==='all'||c.dataset.cat===f)?'':'none');
  }));
}

// Modal
function openModal(title){
  const o=$i('apply-modal'),p=$i('modal-proj');
  if(o)o.classList.add('open');if(p)p.textContent=title;
  document.body.style.overflow='hidden';
}
function closeModal(){
  const o=$i('apply-modal');if(o)o.classList.remove('open');
  document.body.style.overflow='';
}
function initModal(){
  document.querySelectorAll('.apply-btn').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.project||'')));
  const o=$i('apply-modal');if(o)o.addEventListener('click',e=>{if(e.target===o)closeModal()});
  const c=$i('modal-close');if(c)c.addEventListener('click',closeModal);
  const f=$i('apply-form');if(f)f.addEventListener('submit',e=>{e.preventDefault();toast('Søknaden din er sendt! Vi tar kontakt snart.');f.reset();closeModal()});
}

function initContact(){
  const f=$i('contact-form');if(!f)return;
  f.addEventListener('submit',e=>{e.preventDefault();toast('Melding sendt! Vi svarer innen 48 timer.');f.reset()});
}

function toast(msg){
  const t=document.createElement('div');
  t.textContent=msg;
  t.style.cssText='position:fixed;bottom:2rem;right:2rem;background:#111;color:#fff;padding:.9rem 1.5rem;font-size:.82rem;font-weight:600;letter-spacing:.04em;z-index:600;border-left:4px solid #66BB6A;max-width:320px;animation:ti .3s ease';
  document.body.appendChild(t);setTimeout(()=>t.remove(),4000);
}
const ts=document.createElement('style');ts.textContent='@keyframes ti{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}';document.head.appendChild(ts);

document.addEventListener('DOMContentLoaded',()=>{
  initMobile();initReveal();initTabs();initModal();initContact();
  document.querySelectorAll('.lang-toggle').forEach(b=>b.addEventListener('click',toggleLang));
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}
  }));
});
JSEOF
wc -c /tmp/new_js.js
