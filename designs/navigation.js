const button=document.querySelector('.nav-toggle');
const navigation=document.querySelector('#navigation');
function closeNavigation(){navigation.classList.remove('open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','메뉴 열기');}
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeNavigation));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){closeNavigation();button.focus();}});
window.matchMedia('(min-width:761px)').addEventListener('change',event=>{if(event.matches)closeNavigation();});
