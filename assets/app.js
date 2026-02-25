
const qs=(s,p=document)=>p.querySelector(s),qsa=(s,p=document)=>[...p.querySelectorAll(s)];
const lang=qs('.lang-dropdown');if(lang){const btn=qs('.lang-btn');btn.addEventListener('click',()=>{lang.classList.toggle('open');btn.setAttribute('aria-expanded',String(lang.classList.contains('open')))});document.addEventListener('click',e=>{if(!lang.contains(e.target)){lang.classList.remove('open');btn.setAttribute('aria-expanded','false')}})}
qsa('.faq-item').forEach(item=>{qs('.faq-q',item).addEventListener('click',()=>{qsa('.faq-item').forEach(i=>{if(i!==item)i.classList.remove('open')});item.classList.toggle('open');qs('.faq-q',item).setAttribute('aria-expanded',String(item.classList.contains('open')));});});
const modal=qs('.modal'),openM=qs('.privacy-link'),closeBtns=[qs('.modal-x'),qs('.modal-close')];
let lastFocus=null;function trap(e){if(!modal.classList.contains('open')||e.key!=='Tab')return;const f=qsa('button,[href],input',qs('.modal-panel')).filter(el=>!el.disabled);const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
function openModal(){lastFocus=document.activeElement;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';qs('.modal-x').focus();document.addEventListener('keydown',trap)}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';document.removeEventListener('keydown',trap);if(lastFocus)lastFocus.focus()}
openM?.addEventListener('click',openModal);closeBtns.forEach(b=>b?.addEventListener('click',closeModal));modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
const drawer=qs('.mobile-drawer'),backdrop=qs('.drawer-backdrop'),burger=qs('.burger'),drawerClose=qs('.drawer-close');
function openDrawer(){drawer.classList.add('open');backdrop.classList.add('open');document.body.style.overflow='hidden';drawer.setAttribute('aria-hidden','false')}
function closeDrawer(){drawer.classList.remove('open');backdrop.classList.remove('open');document.body.style.overflow='';drawer.setAttribute('aria-hidden','true')}
burger?.addEventListener('click',openDrawer);drawerClose?.addEventListener('click',closeDrawer);backdrop?.addEventListener('click',closeDrawer);document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawer();closeModal()}});
qsa('.drawer-nav a,.mobile-drawer .cta-btn,.drawer-language a').forEach(a=>a.addEventListener('click',closeDrawer));
const io=new IntersectionObserver((entries)=>entries.forEach(en=>{if(en.isIntersecting)en.target.classList.add('show')}),{threshold:.15});qsa('.reveal').forEach(el=>io.observe(el));
qsa('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Thank you. Our institutional team will contact you shortly.')}));
